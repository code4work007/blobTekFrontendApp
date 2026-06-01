import apiClient from './api/axiosClient';
import type {
  User,
  UpdateProfilePayload,
  UpdatePasswordPayload,
  CreateUserPayload,
  ApiResponse,
  PaginatedResponse,
  PaginationParams,
} from '@/types';

export const userService = {
  getUsers: async (params: PaginationParams): Promise<PaginatedResponse<User>> => {
    const { data } = await apiClient.get<ApiResponse<PaginatedResponse<User>>>('/users', {
      params,
    });
    return data.data;
  },

  getUserById: async (id: string): Promise<User> => {
    const { data } = await apiClient.get<ApiResponse<User>>(`/users/${id}`);
    return data.data;
  },

  createUser: async (payload: CreateUserPayload): Promise<User> => {
    const { data } = await apiClient.post<ApiResponse<User>>('/users', payload);
    return data.data;
  },

  updateProfile: async (
    id: string,
    payload: UpdateProfilePayload
  ): Promise<User> => {
    const { data } = await apiClient.patch<ApiResponse<User>>(
      `/users/${id}/profile`,
      payload
    );
    return data.data;
  },

  updatePassword: async (
    id: string,
    payload: UpdatePasswordPayload
  ): Promise<{ message: string }> => {
    const { data } = await apiClient.patch<ApiResponse<{ message: string }>>(
      `/users/${id}/password`,
      payload
    );
    return data.data;
  },

  deleteUser: async (id: string): Promise<void> => {
    await apiClient.delete(`/users/${id}`);
  },

  uploadAvatar: async (id: string, file: File): Promise<{ avatarUrl: string }> => {
    const formData = new FormData();
    formData.append('avatar', file);
    const { data } = await apiClient.post<ApiResponse<{ avatarUrl: string }>>(
      `/users/${id}/avatar`,
      formData,
      { headers: { 'Content-Type': 'multipart/form-data' } }
    );
    return data.data;
  },
};
