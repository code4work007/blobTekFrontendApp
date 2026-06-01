import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ROUTES } from '@/constants';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center text-center px-4">
      <p className="text-8xl font-black text-primary/20 select-none">404</p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight">Page not found</h1>
      <p className="mt-2 text-muted-foreground max-w-sm">
        Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <div className="mt-8 flex gap-3">
        <Button asChild>
          <Link to={ROUTES.DASHBOARD}>Go to dashboard</Link>
        </Button>
        <Button variant="outline" onClick={() => history.back()}>
          Go back
        </Button>
      </div>
    </div>
  );
}
