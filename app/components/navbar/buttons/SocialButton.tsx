"use client";

import { IconType } from "react-icons";

interface SocialButtonProps {
  icon: IconType;
  link: string;
}

const SocialButton: React.FC<SocialButtonProps> = ({ icon: Icon, link }) => {
  const handleClick = () => {
    window.open(link, "_blank");
  };

  return (
    <div
      onClick={handleClick}
      className="
      w-12
      h-12
      rounded-full
      bg-button2
      flex
      items-center
      justify-center
      text-color2
      hover:-translate-y-[10px] 
      hover:text-color1
      duration-300
      cursor-pointer
    "
    >
      <Icon size={24} />
    </div>
  );
};

export default SocialButton;
