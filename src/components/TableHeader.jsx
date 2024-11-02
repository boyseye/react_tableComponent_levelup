// src/components/TableHeader.js
import React from 'react';

const TableHeader = ({ tableConfig }) => {
  const { col1, col2, colConfig } = tableConfig;

  return (
    <thead>
      <tr>
        {colConfig.map((header, index) => (
          <th
            key={index}
            rowSpan={header.rowspan}
            colSpan={header.colspan}
          >
            {header.name}
          </th>
        ))}
      </tr>

      {/* Conditionally render col2 if it exists */}
      {col2 && col2.length > 0 && (
        <>
          <tr>
            {col2.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </>
      )}
    </thead>
  );
};

export default TableHeader;
