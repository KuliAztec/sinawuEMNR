import axios from 'axios';

const API_URL = 'http://localhost:5000/api/products'; // Sesuaikan dengan URL backend Anda

export const getProducts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};