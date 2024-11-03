// src/components/Calendar.js
import React, { useState } from 'react';
import './TableComponent.css';
import useFetchData from '../hooks/useFetchData'; // Import the API function

const Calendar = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const { data, loading, error, fetchData } = useFetchData();

  const handleSearch = (e) => {
    e.preventDefault();
    fetchData(startDate, endDate); // Call fetchData with the selected dates
  };

  return (
    <div className="calendar">
      {/* Search form for start and end dates */}
      <form onSubmit={handleSearch} className="search-form">
        <label>
          Start Date:
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
        </label>
        <label>
          End Date:
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
          />
        </label>
        <button type="submit">Search</button>
      </form>

      {/* Display loading, error, or table */}
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}


    </div>
  );
};

export default Calendar;