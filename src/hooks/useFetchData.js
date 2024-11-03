// src/hooks/useFetchData.js
import { useState, useCallback } from 'react';
import { fetchDataByMenuCode } from '../api'; // Adjust the import based on your API function

const useFetchData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async (startDate, endDate) => {
    setLoading(true);
    setError(null);

    try {
      const result = await fetchDataByMenuCode(startDate, endDate);
      setData(result);
    } catch (err) {
      setError('Failed to fetch data');
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, loading, error, fetchData };
};

export default useFetchData;
