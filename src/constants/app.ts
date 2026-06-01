export const APP_CONFIG = {
  name: import.meta.env.VITE_APP_NAME || 'SaaS Platform',
  defaultPageSize: 10,
  pageSizeOptions: [10, 20, 50, 100],
  debounceDelay: 300,
  toastDuration: 4000,
  tokenKey: 'auth-storage',
} as const;

export const USER_ROLES = {
  admin: 'Admin',
  manager: 'Manager',
  user: 'User',
} as const;

export const USER_STATUSES = {
  active: 'Active',
  inactive: 'Inactive',
  pending: 'Pending',
} as const;
