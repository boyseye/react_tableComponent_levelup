// src/components/TableComponent.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setType } from '../redux/tableSlice';
import TableHeader from './TableHeader';
import { TableConfigurations } from '../redux/tableColumn'; // Import table configurations
import "./TableComponent.css"
import TableBody from './TableBody';

const TableComponent = ({ menuCode }) => {
  const dispatch = useDispatch();
  const tableConfig = TableConfigurations[menuCode]; // Get the configuration based on tableMenuCode

  useEffect(() => {
    dispatch(setType(menuCode)); // Update type in Redux if needed
    // dispatch(renderHeaders());
  }, [menuCode, dispatch]);

  return (
    <div>
      <table>
        <TableHeader tableConfig={tableConfig} /> 
        <TableBody tableConfig={tableConfig} /> {/* Pass tableConfig to TableBody */}
      </table>
    </div>
  );
};

export default TableComponent;
