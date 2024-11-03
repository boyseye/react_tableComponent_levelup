// src/components/Pagination.js
import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const MAX_PAGE_BUTTONS = 5; // Maximum number of page buttons to display at once

  // Helper function to generate page numbers to display
  const getPageNumbers = () => {
    const half = Math.floor(MAX_PAGE_BUTTONS / 2);
    let start = Math.max(1, currentPage - half);
    let end = Math.min(totalPages, currentPage + half);

    if (end - start + 1 < MAX_PAGE_BUTTONS) {
      if (start === 1) {
        end = Math.min(totalPages, start + MAX_PAGE_BUTTONS - 1);
      } else if (end === totalPages) {
        start = Math.max(1, end - MAX_PAGE_BUTTONS + 1);
      }
    }

    return Array.from({ length: end - start + 1 }, (_, idx) => start + idx);
  };

  // Navigation handlers
  const goToFirst = () => onPageChange(1);
  const goToLast = () => onPageChange(totalPages);
  const goToPrevious = () => onPageChange(Math.max(1, currentPage - 1));
  const goToNext = () => onPageChange(Math.min(totalPages, currentPage + 1));

  return (
    <div className="pagination">
      <button onClick={goToFirst} disabled={currentPage === 1}>
        &laquo;
      </button>
      <button onClick={goToPrevious} disabled={currentPage === 1}>
        &lsaquo;
      </button>
      
      {getPageNumbers().map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={page === currentPage ? 'active' : ''}
        >
          {page}
        </button>
      ))}

      <button onClick={goToNext} disabled={currentPage === totalPages}>
        &rsaquo;
      </button>
      <button onClick={goToLast} disabled={currentPage === totalPages}>
        &raquo;
      </button>
    </div>
  );
};

export default Pagination;
