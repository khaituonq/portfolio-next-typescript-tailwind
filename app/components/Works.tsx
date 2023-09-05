"use client";

import { useCallback, useMemo, useState } from "react";
import ScrollContainer from "react-indiana-drag-scroll";

import Container from "./Container";
import MixedText from "./MixedText";
import Button from "./buttons/Button";
import ProjectCard from "./ProjectCard";
import { categories, projects } from "../constants";
import EmptyState from "./EmptyState";
import Pagination from "./Pagination";
import { useRouter } from "next/navigation";

const PageSize = 3;

const Works = () => {
  const router = useRouter()
  const [activeFilter, setActiveFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const getTagsWithTagId = useCallback(() => {
    return projects.map((project) => ({
      ...project,
      tags: project.tagsId.map((tagId) =>
        categories.find((category) => category.id === tagId)
      ),
    }));
  }, [categories, projects]);

  const handleFilterProjects = useCallback(() => {
    if (activeFilter === "all") {
      return getTagsWithTagId();
    } else {
      return getTagsWithTagId().filter((project) =>
        project.tags.some((tag: any) => tag.id === activeFilter)
      );
    }
  }, [activeFilter]);

  // Sort order by properties order of item
  const newProjects = handleFilterProjects().sort((a, b) => b.order - a.order);

  // Format data to implement pagination
  const currentProjects = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;

    return newProjects.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  const handleChangePage = (page: number) => {
    setCurrentPage(page)
    router.push('#work')
  }

  return (
    <div
      id="work"
      className="w-full lg:h-screen h-auto flex flex-col gap-12 md:pt-24 pt-12"
    >
      <div className="text-center">
        <MixedText label="My recent" secondaryLabel="works" />
      </div>

      <ScrollContainer className="flex flex-row gap-4">
        {categories.map((item) => (
          <Button
            key={item.id}
            label={item.title}
            color={item.id === activeFilter}
            onClick={() => setActiveFilter(item.id)}
          />
        ))}
      </ScrollContainer>

      {currentProjects.length > 0 ? (
        <div
          className="
            grid 
            lg:grid-cols-3 
            sm:grid-cols-2 
            grid-cols-1 
            gap-6
          "
        >
          {currentProjects.map((item) => (
            <ProjectCard key={item.name} data={item} />
          ))}
        </div>
      ) : (
        <EmptyState onReset={() => setActiveFilter("all")} />
      )}
      <Pagination
        currentPage={currentPage}
        totalCount={newProjects.length}
        pageSize={PageSize}
        onPageChange={(page) => handleChangePage(page)}
      />
    </div>
  );
};

export default Works;
