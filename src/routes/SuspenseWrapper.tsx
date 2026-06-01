import { Suspense } from 'react';
import { Loader } from '@/components/common/Loader';

const fallback = (
  <div className="flex h-screen items-center justify-center">
    <Loader size="lg" text="Loading…" />
  </div>
);

export function withSuspense(Component: React.ComponentType) {
  return <Suspense fallback={fallback}><Component /></Suspense>;
}
