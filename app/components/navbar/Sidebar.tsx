"use client";

import React from "react";
import { FaTimes } from "react-icons/fa"
 
import NavButton from "../buttons/NavButton";
import { navLinks } from "@/app/constants";

interface SidebarProps {
  showed: boolean;
  onClick: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ showed, onClick }) => {
  return (
    <div
      className={`
        fixed
        inset-0
        bg-primary
        z-50
        flex
        flex-col
        p-4
        gap-2
        ${showed ? "translate-x-0" : "-translate-x-full"}
        duration-300
        sm:hidden
        w-screen
        h-screen
        overflow-hidden
      `}
    >
      <div
        className="
        w-full 
        flex 
        justify-end 
        text-color1
        mb-4
        "
      >
        <div onClick={onClick} className="p-1 cursor-pointer">
          <FaTimes size={20} />
        </div>
      </div>

      {navLinks.map((item, index) => (
        <React.Fragment key={item.id}>
          <NavButton
            label={item.title}
            redirect={item.id}
            onClick={onClick}
          />
          {navLinks.length - 1 !== index && <hr className="text-border" />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Sidebar;
