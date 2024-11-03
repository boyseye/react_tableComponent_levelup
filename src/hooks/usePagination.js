// src/hooks/usePagination.js
import { useState, useMemo } from 'react';

const usePagination = (data, itemsPerPage = 5) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the paginated data using memoization for efficiency
  const paginatedData = useMemo(() => {
    const startIdx = (currentPage - 1) * itemsPerPage;
    return data.slice(startIdx, startIdx + itemsPerPage);
  }, [data, currentPage, itemsPerPage]);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  return {
    currentPage,
    totalPages,
    paginatedData,
    setCurrentPage,
  };
};

export default usePagination;