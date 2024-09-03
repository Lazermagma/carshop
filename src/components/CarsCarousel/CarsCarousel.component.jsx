"use client";

import React, { useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const CarsCarousel = () => {
  // State to track the current page
  const [page, setPage] = useState(1);

  // Handle pagination change
  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <>
      <div className="flex flex-col w-full py-16 px-14">
        {/* Conditional Rendering for Each Slide */}
        {page === 1 && (
          <div className="flex flex-row justify-center flex-wrap gap-10 w-full">
            <img
              src="assets/images/cars/BMW_X1 Road.png"
              className="w-64 h-36"
            />
            <img
              src="assets/images/cars/BMW_X1 Road.png"
              className="w-64 h-36"
            />
            <img
              src="assets/images/cars/BMW_X1 Road.png"
              className="w-64 h-36"
            />
            <img
              src="assets/images/cars/BMW_X1 Road.png"
              className="w-64 h-36"
            />
            <img
              src="assets/images/cars/BMW_X1 Road.png"
              className="w-64 h-36"
            />
            <img
              src="assets/images/cars/BMW_X1 Road.png"
              className="w-64 h-36"
            />
            <img
              src="assets/images/cars/BMW_X1 Road.png"
              className="w-64 h-36"
            />
            <img
              src="assets/images/cars/BMW_X1 Road.png"
              className="w-64 h-36"
            />
          </div>
        )}

        {page === 2 && (
          <div className="flex flex-row justify-center flex-wrap gap-10 w-full">
            <img
              src="assets/images/cars/BMW_X1 Road.png"
              className="w-64 h-36"
            />
            <img
              src="assets/images/cars/BMW interior.png"
              className="w-64 h-36"
            />
            <img
              src="assets/images/cars/BMW_X1 Road.png"
              className="w-64 h-36"
            />
            <img
              src="assets/images/cars/BMW_X1 Road.png"
              className="w-64 h-36"
            />
            <img
              src="assets/images/cars/BMW_X1 Road.png"
              className="w-64 h-36"
            />
            <img
              src="assets/images/cars/BMW_X1 Road.png"
              className="w-64 h-36"
            />
            <img
              src="assets/images/cars/BMW_X1 Road.png"
              className="w-64 h-36"
            />
            <img
              src="assets/images/cars/BMW_X1 Road.png"
              className="w-64 h-36"
            />
          </div>
        )}

        {/* Pagination Controls */}
        <div className="flex justify-center p-3">
          <Stack spacing={2}>
            <Pagination
              count={2}
              page={page}
              onChange={handlePageChange}
              size="small"
            />
          </Stack>
        </div>
      </div>
    </>
  );
};

export default CarsCarousel;
