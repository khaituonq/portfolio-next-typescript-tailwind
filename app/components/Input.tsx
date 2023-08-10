"use client";

import { UseFormRegister, FieldValues, FieldErrors } from "react-hook-form";

interface InputProps {
  id: string;
  label: string;
  placeholder: string;
  disabled?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  message?: boolean;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  placeholder,
  disabled,
  required,
  register,
  errors,
  message,
}) => {

  return (
    <div className="w-full">
      <div className="text-lg font-bold text-color1 mb-1">{label}</div>
      {message ? (
        <textarea
          id={id}
          disabled={disabled}
          {...register(id, { required })}
          placeholder={placeholder}
          className={`
            w-full
            h-80
            p-4
            font-light
            rounded-lg
            outline-none
            transition
            disabled:opacity-70
            disabled:cursor-not-allowed
            bg-card
            text-color3
            border-2
            ${errors[id] ? "border-error" : "border-card"}
            ${errors[id] ? "focus:border-error" : "border-card"}
          `}
        />
      ) : (
        <input
          id={id}
          disabled={disabled}
          {...register(id, { required })}
          autoComplete="off"
          type="text"
          placeholder={placeholder}
          className={`
            w-full
            p-4
            font-light
            rounded-lg
            outline-none
            transition
            disabled:opacity-70
            disabled:cursor-not-allowed
            bg-card
            text-color3
            border-2
            ${errors[id] ? "border-error" : "border-card"}
            ${errors[id] ? "focus:border-error" : "focus:border-card"}
          `}
        />
      )}
    </div>
  );
};

export default Input;
