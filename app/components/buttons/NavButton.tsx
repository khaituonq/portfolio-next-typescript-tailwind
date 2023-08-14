"use client";

import { useRouter } from "next/navigation";
import { IconType } from "react-icons";

interface NavButtonProps {
  label: string;
  redirect?: string;
  icon?: IconType;
  onClick?: () => void;
}

const NavButton: React.FC<NavButtonProps> = ({
  label,
  redirect,
  icon: Icon,
  onClick,
}) => {
  const router = useRouter();

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    router.push(`/#${redirect}`);
  };

  return (
    <div className="flex items-center md:gap-2 gap-4 cursor-pointer hover:opacity-75 duration-300">
      {Icon && <Icon size={24} className="text-color1" />}
      <div
        onClick={handleClick}
        className="
          text-color1 
          text-lg 
          font-normal 
        "
      >
        {label}
      </div>
    </div>
  );
};

export default NavButton;
