import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com'; // Example API

export const fetchData = async (endpoint: string) => {
  const response = await axios.get(`${API_URL}/${endpoint}`);
  return response.data;
};
