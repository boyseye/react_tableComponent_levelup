// src/components/TableBody.js
import React from 'react';

const TableBody = ({ tableConfig }) => {
  return (
    <tbody>
      {/* Generate a row with as many <td> elements as in col2 */}
      <tr>
        {tableConfig.HEADER_SUB.map((col, index) => (
          <td key={index}>{` Data ${index + 1}`}</td>
        ))}
      </tr>
      <tr><td>{tableConfig.API}</td></tr>  

    </tbody>
  );
};

export default TableBody;
