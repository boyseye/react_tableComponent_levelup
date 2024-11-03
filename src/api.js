// src/api.js

export const fetchDataByMenuCode = async (menuCode) => {
  try {
    // const response = await fetch(`https://api.example.com/data/${menuCode}`);
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};