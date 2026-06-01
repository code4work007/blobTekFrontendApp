import type { UserRole } from './auth';

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: UserRole;
  status: UserStatus;
  phone?: string;
  department?: string;
  location?: string;
  bio?: string;
  createdAt: string;
  updatedAt: string;
}

export type UserStatus = 'active' | 'inactive' | 'pending';

export interface UpdateProfilePayload {
  name?: string;
  phone?: string;
  department?: string;
  location?: string;
  bio?: string;
}

export interface UpdatePasswordPayload {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export interface CreateUserPayload {
  name: string;
  email: string;
  role: UserRole;
  department?: string;
}
