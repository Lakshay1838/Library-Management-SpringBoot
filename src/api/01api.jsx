// import axios from "axios";
// const BASE_URL = "http://localhost:8080/api";
// export const getBooks = async () => {
//     try {
//         const response = await axios.get(`${BASE_URL}/books`);
//         return response.data;
//     } catch (error) {
//         console.error(error);
//     }
// };
import axios from 'axios';

// Set up Axios instance with a base URL
const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080', // Your Spring Boot backend URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Example: Function to fetch all books (Library Management use case)
export const fetchBooks = async () => {
  try {
    const response = await axiosInstance.get('/bookController'); // Update the endpoint as per your Spring Boot controller
    return response.data;
  } catch (error) {
    console.error('Error fetching books:', error);
    throw error;
  }
};

// Example: Function to add a new book
export const addBook = async (book) => {
  try {
    const response = await axiosInstance.post('/bookController', book); // Update endpoint
    return response.data;
  } catch (error) {
    console.error('Error adding book:', error);
    throw error;
  }
};

export default axiosInstance;
