"use client";

import { useCallback, useState } from "react";
import ScrollContainer from "react-indiana-drag-scroll";

import Container from "./Container";
import MixedText from "./MixedText";
import Button from "./buttons/Button";
import ProjectCard from "./ProjectCard";
import { categories, projects } from "../constants";
import EmptyState from "./EmptyState";

const Works = () => {
  const [activeFilter, setActiveFilter] = useState("all");

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

  const newProjects = handleFilterProjects().sort((a, b) => a.order - b.order);

  return (
    <div id="work" className="w-full h-auto flex flex-col gap-12 md:pt-40 pt-16">
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

      {newProjects.length > 0 ? (
        <div
          className="
            grid 
            lg:grid-cols-3 
            sm:grid-cols-2 
            grid-cols-1 
            gap-6
          "
        >
          {newProjects.map((item) => (
            <ProjectCard key={item.name} data={item} />
          ))}
        </div>
      ) : (
        <EmptyState onReset={() => setActiveFilter("all")} />
      )}
    </div>
  );
};

export default Works;
