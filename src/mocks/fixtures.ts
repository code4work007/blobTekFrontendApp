import type { User, AuthUser } from '@/types';

export const mockAdminUser: AuthUser = {
  id: 'user-1',
  name: 'Alex Donovan',
  email: 'alex@example.com',
  role: 'admin',
  createdAt: '2024-01-15T10:00:00Z',
};

export const mockUsers: User[] = [
  {
    id: 'user-1', name: 'Alex Donovan', email: 'alex@example.com',
    role: 'admin', status: 'active', department: 'Engineering',
    location: 'San Francisco, CA', createdAt: '2024-01-15T10:00:00Z', updatedAt: '2024-06-01T08:00:00Z',
  },
  {
    id: 'user-2', name: 'Priya Patel', email: 'priya@example.com',
    role: 'manager', status: 'active', department: 'Product',
    location: 'New York, NY', createdAt: '2024-02-10T09:00:00Z', updatedAt: '2024-06-01T08:00:00Z',
  },
  {
    id: 'user-3', name: 'Carlos Rivera', email: 'carlos@example.com',
    role: 'user', status: 'active', department: 'Design',
    location: 'Austin, TX', createdAt: '2024-03-05T11:00:00Z', updatedAt: '2024-06-01T08:00:00Z',
  },
  {
    id: 'user-4', name: 'Sophie Turner', email: 'sophie@example.com',
    role: 'user', status: 'pending', department: 'Marketing',
    location: 'Chicago, IL', createdAt: '2024-04-20T14:00:00Z', updatedAt: '2024-06-01T08:00:00Z',
  },
  {
    id: 'user-5', name: 'Liam Chen', email: 'liam@example.com',
    role: 'manager', status: 'inactive', department: 'Sales',
    location: 'Seattle, WA', createdAt: '2024-05-01T08:00:00Z', updatedAt: '2024-06-01T08:00:00Z',
  },
  {
    id: 'user-6', name: 'Nina Kowalski', email: 'nina@example.com',
    role: 'user', status: 'active', department: 'Support',
    location: 'Boston, MA', createdAt: '2024-05-15T12:00:00Z', updatedAt: '2024-06-01T08:00:00Z',
  },
  {
    id: 'user-7', name: 'Marcus Johnson', email: 'marcus@example.com',
    role: 'user', status: 'active', department: 'Engineering',
    location: 'Denver, CO', createdAt: '2024-05-20T10:00:00Z', updatedAt: '2024-06-01T08:00:00Z',
  },
  {
    id: 'user-8', name: 'Aisha Okonkwo', email: 'aisha@example.com',
    role: 'user', status: 'active', department: 'Finance',
    location: 'Atlanta, GA', createdAt: '2024-05-25T09:00:00Z', updatedAt: '2024-06-01T08:00:00Z',
  },
];
