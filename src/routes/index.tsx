import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { ROUTES } from '@/constants';
import { ProtectedRoute } from './ProtectedRoute';
import { PublicRoute } from './PublicRoute';
import { AuthLayout } from '@/layouts/AuthLayout';
import { DashboardLayout } from '@/layouts/DashboardLayout';
import { withSuspense } from './SuspenseWrapper';

// Lazy-loaded page components
const Landing = lazy(() => import('@/pages/Landing'));
const Login = lazy(() => import('@/pages/auth/Login'));
const Register = lazy(() => import('@/pages/auth/Register'));
const ForgotPassword = lazy(() => import('@/pages/auth/ForgotPassword'));
const Dashboard = lazy(() => import('@/pages/Dashboard'));
const Profile = lazy(() => import('@/pages/Profile'));
const Settings = lazy(() => import('@/pages/Settings'));
const Users = lazy(() => import('@/pages/Users'));
const NotFound = lazy(() => import('@/pages/NotFound'));

export const router = createBrowserRouter([
  // Landing page — public, no layout wrapper
  { path: ROUTES.LANDING, element: withSuspense(Landing) },

  // Public (auth) routes
  {
    element: <PublicRoute />,
    children: [
      {
        element: <AuthLayout />,
        children: [
          { path: ROUTES.LOGIN, element: withSuspense(Login) },
          { path: ROUTES.REGISTER, element: withSuspense(Register) },
          { path: ROUTES.FORGOT_PASSWORD, element: withSuspense(ForgotPassword) },
        ],
      },
    ],
  },

  // Protected (app) routes
  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <DashboardLayout />,
        children: [
          { path: ROUTES.DASHBOARD, element: withSuspense(Dashboard) },
          { path: ROUTES.USERS, element: withSuspense(Users) },
          { path: ROUTES.PROFILE, element: withSuspense(Profile) },
          { path: ROUTES.SETTINGS, element: withSuspense(Settings) },
        ],
      },
    ],
  },

  // 404
  { path: '*', element: withSuspense(NotFound) },
]);
