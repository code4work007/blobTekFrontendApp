/**
 * MSW request handlers for local development mocking.
 * Install MSW: npm install -D msw
 * Then run: npx msw init public/ --save
 */

import { mockAdminUser, mockUsers } from './fixtures';

const BASE = import.meta.env.VITE_API_BASE_URL || 'https://api.example.com/v1';

/**
 * Returns handlers array for MSW.
 * Import `http` and `HttpResponse` from 'msw' to activate.
 */
export function getMockHandlers() {
  // Dynamic import so this file compiles even when msw is not installed.
  // In a real project with msw installed, replace with static imports.
  return [
    // POST /auth/login
    {
      method: 'POST',
      path: `${BASE}/auth/login`,
      handler: (_req: unknown) => ({
        data: {
          user: mockAdminUser,
          tokens: { accessToken: 'mock-access-token-xyz' },
        },
        message: 'Login successful',
        success: true,
      }),
    },
    // POST /auth/register
    {
      method: 'POST',
      path: `${BASE}/auth/register`,
      handler: (_req: unknown) => ({
        data: {
          user: mockAdminUser,
          tokens: { accessToken: 'mock-access-token-xyz' },
        },
        message: 'Registration successful',
        success: true,
      }),
    },
    // POST /auth/forgot-password
    {
      method: 'POST',
      path: `${BASE}/auth/forgot-password`,
      handler: () => ({
        data: { message: 'Reset link sent' },
        message: 'Email sent',
        success: true,
      }),
    },
    // GET /users
    {
      method: 'GET',
      path: `${BASE}/users`,
      handler: (params: { page?: number; limit?: number; search?: string }) => {
        const page = Number(params?.page ?? 1);
        const limit = Number(params?.limit ?? 10);
        let filtered = mockUsers;
        if (params?.search) {
          const q = params.search.toLowerCase();
          filtered = mockUsers.filter(
            (u) => u.name.toLowerCase().includes(q) || u.email.toLowerCase().includes(q)
          );
        }
        const start = (page - 1) * limit;
        return {
          data: {
            data: filtered.slice(start, start + limit),
            total: filtered.length,
            page,
            limit,
            totalPages: Math.ceil(filtered.length / limit),
          },
          message: 'OK',
          success: true,
        };
      },
    },
  ];
}
