import React from "react";
import './style.css'

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  return (
    <div
    className="pagination-container"
    >
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Previous
      </button>
      <>
        {pageNumbers.map((number) => (
          <p
            style={{
              cursor: number !== currentPage && "pointer",
            }}
            key={number}
            onClick={() => onPageChange(number)}
          >
            {number === currentPage ? (
              <strong
                className="current-page"
              >
                {number}
              </strong>
            ) : (
              number
            )}
          </p>
        ))}
      </>
      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;