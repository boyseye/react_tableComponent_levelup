// src/components/TableBody.js
import React from 'react';

const TableBody = ({ tableConfig, data, currentPage, itemsPerPage }) => {
  // Calculate the data to display on the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = data.slice(startIndex, startIndex + itemsPerPage);


  
  return (
    <tbody>
      {currentData.map((row, rowIndex) => (
        <div>
          {row.title} :::: {tableConfig.API}
        </div>
      ))}
    </tbody>
  );
};

export default TableBody;
