// src/components/TableComponent.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setType } from '../redux/tableSlice';
import TableHeader from './TableHeader';
import { TableConfigurations } from '../redux/tableColumn'; // Import table configurations
import "./TableComponent.css"
import TableBody from './TableBody';
import Paging from './Paging';

const TableComponent = ({ menuCode }) => {
  const dispatch = useDispatch();
  const tableConfig = TableConfigurations[menuCode]; // Get the configuration based on menuCode
  const itemsPerPage = 10; // Number of items per page
  const [data, setData] = useState([]); // State to hold fetched data
  const [currentPage, setCurrentPage] = useState(1); // State for current page\
  const totalPages = Math.ceil(data.length / itemsPerPage);


  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/'); // Replace with actual API URL
        const result = await response.json();
        setData(result); // Set data with the fetched result
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    dispatch(setType(menuCode)); // Update type in Redux if needed
    // dispatch(renderHeaders());
  }, [menuCode, dispatch]);

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <table>
        <TableHeader tableConfig={tableConfig} /> 
        <TableBody
          tableConfig={tableConfig}
          data={data}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
         /> 
        <Paging
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={goToPage}
        />
      </table>
    </div>
  );
};

export default TableComponent;
