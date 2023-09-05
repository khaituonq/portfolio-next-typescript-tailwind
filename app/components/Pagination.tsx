"use client";

import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

import { usePagination, DOTS } from "../hooks/usePagination";
import Button from "./buttons/Button";

interface PaginationProps {
  currentPage: number;
  totalCount: number;
  siblingCount?: number;
  pageSize: number;
  onPageChange: (value: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalCount,
  siblingCount = 1,
  pageSize,
  onPageChange,
}) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  }) as Array<number>;

  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <div className="flex justify-center">
      <div className="inline-flex flex-row gap-4 items-center">
        {/* Left navigation arrow */}
        <Button
          onClick={onPrevious}
          disabled={currentPage === 1}
          icon={MdArrowBackIosNew}
        />

        {paginationRange.map((pageNumber, index) => {
          // If pageItem is DOT, render the DOTS unicode character
          if (pageNumber === DOTS) {
            return <div key={index} className="text-lg tracking-widest text-color1">...</div>;
          }

          // Render our Page Pills
          return (
            <Button
              key={index}
              onClick={() => onPageChange(pageNumber)}
              label={pageNumber}
              color={pageNumber === currentPage}
            />
          );
        })}

        {/* Right navigation arrow */}
        <Button
          onClick={onNext}
          disabled={currentPage === lastPage}
          icon={MdArrowForwardIos}
        />
      </div>
    </div>
  );
};

export default Pagination;
