/**
 * Mock server bootstrap.
 * Only loaded when VITE_USE_MOCK=true.
 *
 * To enable full MSW mocking:
 *   1. npm install -D msw
 *   2. npx msw init public/ --save
 *   3. Set VITE_USE_MOCK=true in your .env
 *   4. Replace the stub below with real MSW workers
 */

export async function startMockServer(): Promise<void> {
  console.warn(
    '[Mock] VITE_USE_MOCK=true. ' +
      'Install MSW and wire src/mocks/handlers.ts to activate full request interception.'
  );
  // Placeholder: return immediately so the app boots without MSW installed.
  return Promise.resolve();
}
