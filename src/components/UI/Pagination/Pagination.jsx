import React, { useState } from "react";
import "./Pagination.scss";

const Pagination = ({ setPage, selectedPage }) => {
  const handlePageClick = (pageNumber) => {
    setPage(pageNumber);
  };

  const totalPages = [1, 2, 3, 4];

  return (
    <div className="pagination-block">
      {totalPages.map((page) => (
        <div
          key={page}
          className={`pagination-el ${selectedPage === page ? "active" : ""}`}
          onClick={() => handlePageClick(page)}
        >
          {page}
        </div>
      ))}
      <div className="pagination-el">
        <img src="../../../../public/icons/shape.svg" alt="" />
      </div>
    </div>
  );
};

export default Pagination;
