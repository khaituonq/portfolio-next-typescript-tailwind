"use client";

import { navLinks } from "@/app/constants";
import NavButton from "./navbar/buttons/NavButton";
import { socialMedias } from "@/app/constants";
import SocialButton from "./navbar/buttons/SocialButton";

const Footer = () => {
  return (
    <div
      className="
      flex
      flex-col
      gap-16
      items-center
      pt-20
      pb-20
    "
    >
      <div className="flex md:flex-row flex-col md:gap-16 gap-4">
        {navLinks.map((item) => (
          <NavButton
            key={item.id}
            label={item.title}
            icon={item.icon}
            redirect={item.id}
          />
        ))}
      </div>
      <div className="flex flex-row gap-6">
        {socialMedias.map((item) => (
          <SocialButton key={item.id} icon={item.icon} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default Footer;
