"use client";

import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { Oswald } from "next/font/google"

import Container from "../Container";
import NavButton from "../buttons/NavButton";
import NavbarMobile from "./Sidebar";
import { navLinks } from "@/app/constants";
import useScrollDirection from "../../hooks/useScrollDirection";
import useBodyScrollLock from "../../hooks/useBodyScrollLock";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
})

const Navbar = () => {
  const [showNavbarMB, setShowNavbarMB] = useState(false);

  const detectScroll = useScrollDirection();

  const [isLocked, toggle] = useBodyScrollLock();

  const handleToggleNavBarMB = () => {
    setShowNavbarMB((value) => !value);
    toggle();
  };

  return (
    <div
      className={`
        shadow-sm
        fixed
        w-full
        z-40
        duration-300
        bg-primary
        ${detectScroll === "up" ? "translate-y-0" : "-translate-y-full"}
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
          <div className={`${oswald.className} text-color1 text-2xl font-bold`}>khaituonq</div>

          <div
            onClick={handleToggleNavBarMB}
            className="text-color1 cursor-pointer sm:hidden block"
          >
            <FaBars size={20} />
          </div>

          <NavbarMobile showed={showNavbarMB} onClick={handleToggleNavBarMB} />

          <div className="flex-row gap-16 sm:flex hidden">
            {navLinks.map((item) => (
              <NavButton key={item.id} label={item.title} redirect={item.id} />
            ))}
          </div>
        </div>
      </Container>
      <hr className="text-border border-t-2" />
    </div>
  );
};

export default Navbar;
