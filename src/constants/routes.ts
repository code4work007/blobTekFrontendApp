export const ROUTES = {
  // Public
  LANDING: '/',
  HOME: '/',

  // Auth
  LOGIN: '/login',
  REGISTER: '/register',
  FORGOT_PASSWORD: '/forgot-password',

  // App
  DASHBOARD: '/dashboard',
  PROFILE: '/profile',
  SETTINGS: '/settings',
  USERS: '/users',
} as const;

export type AppRoute = (typeof ROUTES)[keyof typeof ROUTES];
