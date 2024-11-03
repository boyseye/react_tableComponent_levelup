// src/components/TableHeader.js
import React from 'react';
import { useTableConfig } from '../contexts/TableConfigContext';

const TableHeader = () => {
  const { HEADER_ROW_1, HEADER_ROW_2 } = useTableConfig();

  return (
    <thead>
        <tr>
        {HEADER_ROW_1.map((header, index) => (
          <th key={index} rowSpan={header.rowspan} colSpan={header.colspan}>
            {header.name}
          </th>
        ))}
      </tr>
      <tr>
         {HEADER_ROW_2 &&   HEADER_ROW_2.map( (header,index) => (
             <th key={index} >
             {header}
           </th>
         ))}
      </tr>

    </thead>
  );
};

export default TableHeader;