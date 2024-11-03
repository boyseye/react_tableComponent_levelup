// src/components/TableBody.js
import React from 'react';
import { useTableConfig } from '../contexts/TableConfigContext';

const TableBody = ({data}) => {
  const { HEADER_ROW_2, api } = useTableConfig();

  return (
    <tbody>
    {data.map((item, rowIndex) => (
      <tr key={rowIndex}>
        {HEADER_ROW_2 ? (
          HEADER_ROW_2.map((col, colIndex) => (
            <td key={colIndex}>
             {item.title} :::  {item[col] || `${api} Data ${colIndex + 1}`}
            </td>
          ))
        ) : (
          <td colSpan="3">No additional data available</td>
        )}
      </tr>
    ))}
  </tbody>
  );
};

export default TableBody;