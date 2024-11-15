// src/services/api.js
import axios from 'axios';

// Base URL of your backend
const API_URL = 'http://localhost:5000';

// Set up an Axios instance
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add authentication token to the request headers
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token'); // or from cookies/local storage
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Export default api instance
export default api;

// Specific API functions

// Function to handle login
export const login = async (email, password) => {
  try {
    const response = await api.post('/login', { email, password });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Function to handle signup
export const signup = async (name, email, password) => {
  try {
    const response = await api.post('/signup', { name, email, password });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Function to create a new car
export const createCar = async (carData) => {
  try {
    const response = await api.post('/cars', carData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
