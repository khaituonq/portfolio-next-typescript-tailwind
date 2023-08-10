"use client";

import Button from "./navbar/buttons/Button";

interface EmptyStateProps {
  title?: string;
  subtitle?: string;
  onReset?: () => void;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  title = "No exact matches",
  subtitle = "Try changing or removing some of your filters.",
  onReset,
}) => {
  return (
    <div
      className="
      w-full
      h-[50vh]
      flex
      flex-col
      items-center
      justify-center
      gap-2
    "
    >
      <div className="text-2xl text-color2 font-bold">{title}</div>
      <div className="text-sm text-color3">{subtitle}</div>
      <div className="mt-4">
        {onReset && (
          <Button onClick={onReset} color label="Remove all filters" />
        )}
      </div>
    </div>
  );
};

export default EmptyState;
