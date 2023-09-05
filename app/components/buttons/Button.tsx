"use client";

import { IconType } from "react-icons";

interface ButtonProps {
  label?: string | number;
  color?: boolean;
  icon?: IconType;
  category?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  label,
  color,
  icon: Icon,
  disabled,
  onClick,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`
        flex 
        flex-row 
        items-center
        justify-center
        gap-2 
        rounded-3xl 
        sm:px-8
        px-6
        py-3
        text-color1
        cursor-pointer
        duration-300
        disabled:opacity-70
        disabled:cursor-not-allowed
        ${color ? "  hover:opacity-100" : "  hover:opacity-75"}
        ${color ? "bg-secondary" : "bg-button"}
      `}
    >
      {label && <div className="sm:text-lg text-sm font-bold">{label}</div>}
      {Icon && <Icon size={24} />}
    </button>
  );
};

export default Button;
