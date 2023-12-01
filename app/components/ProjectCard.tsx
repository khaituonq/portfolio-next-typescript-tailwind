"use client";

import { AiFillGithub } from "react-icons/ai";

import Image from "next/image";

interface ProjectCardProps {
  data: any;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ data }) => {
  const handleOpen = (source: string) => {
    console.log("Test")
    return window.open(source, "_blank");
  };

  return (
    <div
      className="
        col-span-1
        bg-card
        rounded-lg
        flex
        flex-col
        gap-4
        p-4
        h-auto
        group
        hover:-translate-y-2
        duration-300
      "
    >
      <div
        className="
        relative 
        w-full 
        h-[250px] 
        overflow-hidden 
        aspect-square 
        inline
      "
      >
        <Image
          onClick={() => handleOpen(data.project_link)}
          fill
          alt="Card"
          className="h-full w-full cursor-pointer"
          src={`/images/project/${data.image}.png`}
        />
        {data.source_code_link && (
          <div
            onClick={() => handleOpen(data.source_code_link)}
            className="
            absolute 
            rounded-full 
            w-10 
            h-10
            right-2
            top-2
            bg-primary
            items-center
            justify-center
            text-color1
            cursor-pointer
            group-hover:opacity-100
            opacity-0
            duration-300
            flex
          "
          >
            <AiFillGithub size={24} />
          </div>
        )}
      </div>

      <div
        onClick={() => handleOpen(data.project_link)}
        className="font-bold text-color1 text-2xl cursor-pointer"
      >
        {data.name}
      </div>

      <div className="text-sm text-color2 line-clamp-4 h-20 w-full">
        {data.description}
      </div>

      <div className="flex flex-row gap-2 flex-wrap">
        {data.tags.map((tag: any) => (
          <div key={tag.id} className={`${tag.color} text-sm font-medium`}>
            <em className="font-light">#</em>
            {tag.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
