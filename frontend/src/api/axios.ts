import axios from "axios";

/**
 * Axios instance for API requests
 *
 * Base URL is set from environment variable VITE_API_URL
 * If not set, defaults to http://localhost:5000 (local development)
 *
 * Usage:
 * import api from '../api/axios';
 * const response = await api.get('/services');
 */
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000",
  headers: {
    "Content-Type": "application/json",
  },
});

/**
 * Request interceptor - Add auth token if available
 * This will automatically add JWT token to requests when user is logged in
 */
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/**
 * Response interceptor - Handle errors globally
 */
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Unauthorized - clear token and redirect to login
      localStorage.removeItem("token");
      // window.location.href = '/admin/login';
    }
    return Promise.reject(error);
  }
);

export default api;
