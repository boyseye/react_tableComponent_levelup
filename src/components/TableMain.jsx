// src/components/TableComponent.js
import React, { useState,useEffect } from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import { TableConfigProvider } from '../contexts/TableConfigContext';
import { getTableConfig } from '../redux/tableColumn';
import usePagination from '../hooks/usePagination.js';
import { fetchDataByMenuCode } from '../api';
import './TableComponent.css'; // Import the CSS file
import Pagination from './Pagination.js';

const ITEMS_PER_PAGE = 5;

const TableMain = ({ menuCode }) => {

  const [data, setData] = useState([]);
  const tableConfig = getTableConfig(menuCode);

  // Fetch data when menuCode changes
  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await fetchDataByMenuCode(menuCode);
      setData(fetchedData);
    };

    fetchData();
  }, [menuCode]);

  // Use pagination on the fetched data
  const { currentPage, totalPages, paginatedData, setCurrentPage } = usePagination(data, ITEMS_PER_PAGE);


  return (
    <TableConfigProvider menuCode={menuCode}>
     
      <table>
        <TableHeader />
        <TableBody data={paginatedData} />
      </table>
     
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </TableConfigProvider>
  );
};

export default TableMain;