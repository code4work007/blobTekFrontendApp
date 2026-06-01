import axios, { type AxiosError, type InternalAxiosRequestConfig } from 'axios';
import { toast } from 'sonner';
import { getAuthToken, useAuthStore } from '@/store/auth.store';
import type { ApiError } from '@/types';

const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://api.example.com/v1';

export const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  timeout: 15000,
});

/** Attach bearer token to every outgoing request */
apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = getAuthToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

/** Normalize errors and handle 401 logout */
apiClient.interceptors.response.use(
  (response) => response,
  (error: AxiosError<ApiError>) => {
    const status = error.response?.status;
    const message =
      error.response?.data?.message ||
      error.message ||
      'An unexpected error occurred';

    if (status === 401) {
      useAuthStore.getState().logout();
      // Redirect to login without React Router dependency
      if (window.location.pathname !== '/login') {
        window.location.href = '/login';
      }
      return Promise.reject(createApiError('Session expired. Please log in again.', 401));
    }

    if (status === 403) {
      toast.error('You do not have permission to perform this action.');
    } else if (status === 404) {
      // 404s are handled by the consuming component
    } else if (status && status >= 500) {
      toast.error('Server error. Please try again later.');
    }

    return Promise.reject(createApiError(message, status ?? 0));
  }
);

function createApiError(message: string, statusCode: number): Error & { statusCode: number } {
  const err = new Error(message) as Error & { statusCode: number };
  err.statusCode = statusCode;
  return err;
}

export default apiClient;
