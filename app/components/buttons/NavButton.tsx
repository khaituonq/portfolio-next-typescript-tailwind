"use client";

import { useRouter } from "next/navigation";
import { IconType } from "react-icons";

interface NavButtonProps {
  label: string;
  redirect?: string;
  icon?: IconType;
  active?: boolean
  onClick?: () => void;
}

const NavButton: React.FC<NavButtonProps> = ({
  label,
  redirect,
  icon: Icon,
  active,
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
    <div className={`
      flex 
      items-center 
      md:gap-2 
      gap-4 
      cursor-pointer 
      hover:opacity-75 
      duration-300 
      border-b-2 
      ${active ? "border-color1" : "border-primary"}
    `}>
      {Icon && <Icon size={24} className="text-color1" />}
      <div
        onClick={handleClick}
        className="
        text-lg 
        font-normal 
        text-color1 
        "
      >
        {label}
      </div>
    </div>
  );
};

export default NavButton;
