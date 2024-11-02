// src/components/TableHeader.js
import React from 'react';

const TableHeader = ({ tableConfig }) => {
  const { HEADER_SUB, HEADER_MAIN } = tableConfig;

  return (
    <thead>
      <tr>
        {HEADER_MAIN.map((header, index) => (
          <th
            key={index}
            rowSpan={header.rowspan}
            colSpan={header.colspan}
          >
            {header.name}
          </th>
        ))}
      </tr>

      {/* Conditionally render HEADER_SUB if it exists */}
      {HEADER_SUB && HEADER_SUB.length > 0 && (
        <>
          <tr>
            {HEADER_SUB.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </>
      )}
    </thead>
  );
};

export default TableHeader;
