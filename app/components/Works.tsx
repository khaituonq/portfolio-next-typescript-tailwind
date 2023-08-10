"use client";

import { useCallback, useState } from "react";
import Image from "next/image";
import ScrollContainer from "react-indiana-drag-scroll";

import Container from "./Container";
import MixedText from "./MixedText";
import Button from "./navbar/buttons/Button";
import ProjectCard from "./ProjectCard";
import { categories, projects } from "../constants";
import EmptyState from "./EmptyState";

const Works = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const handleProjects = useCallback(() => {
    if (activeFilter === "all") {
      return projects;
    } else {
      return projects.filter((project) => {
        return project.tags.some((tag) => tag.id === activeFilter);
      });
    }
  }, [activeFilter]);

  const newProjects = handleProjects();

  return (
    <div
      id="work"
      className=" 
        lg:h-screen
        w-full
        lg:relative
        static
      "
    >
      <Image
        fill
        className="
          absolute 
          inset-0 
          w-full 
          h-full 
          object-cover
          hidden
          lg:block
        "
        src="/images/svg/doodle-mixed-full.svg"
        alt="Image"
      />
      <div
        className="
          lg:absolute
          static
          w-full
          h-full
        "
      >
        <Container>
          <div className="flex flex-col gap-12 md:pt-40 pt-16">
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
        </Container>
      </div>
    </div>
  );
};

export default Works;
