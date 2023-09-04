"use client";

import { FaBars } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Oswald } from "next/font/google";

import Container from "../Container";
import NavButton from "../buttons/NavButton";
import Sidebar from "./Sidebar";
import { navLinks } from "@/app/constants";
import useScrollDirection from "../../hooks/useScrollDirection";
import useBodyScrollLock from "../../hooks/useBodyScrollLock";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const detectScroll = useScrollDirection();

  const [isLocked, toggle] = useBodyScrollLock();

  const handleToggleSidebar = () => {
    setShowSidebar((value) => !value);
    toggle();
  };

  useEffect(() => {
    const sectionIds: string[] = ["home", "about", "work", "contact"];

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveLink(entry.target.id);
        }
      });
    };

    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px",
      threshold: 0.7, // Adjust this threshold as needed
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      className={`
        shadow-sm
        fixed
        w-full
        z-40
        duration-300
        bg-primary
        ${detectScroll === "down" ? "-translate-y-full" : "translate-y-0"}
      `}
    >
      <Container>
        <div
          className={`
            flex 
            flex-row 
            items-center 
            justify-between 
            lg:py-8 
            py-6
          `}
        >
          <div className={`${oswald.className} text-color1 text-2xl font-bold`}>
            khaituonq
          </div>

          <div
            onClick={handleToggleSidebar}
            className="text-color1 cursor-pointer sm:hidden block"
          >
            <FaBars size={20} />
          </div>

          <Sidebar showed={showSidebar} onClick={handleToggleSidebar} />

          <div className="flex-row gap-16 sm:flex hidden">
            {navLinks.map((item) => (
              <NavButton
                key={item.id}
                label={item.title}
                redirect={item.id}
                active={item.id === activeLink}
              />
            ))}
          </div>
        </div>
      </Container>
      <hr className="text-border border-t-2" />
    </div>
  );
};

export default Navbar;
