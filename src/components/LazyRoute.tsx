import { Suspense, ComponentType, lazy } from 'react';

interface LazyRouteProps {
  loader: () => Promise<{ default: ComponentType<any> }>;
}

/**
 * LazyRoute component for code-splitting routes
 * Automatically wraps lazy-loaded components with Suspense
 */
export const LazyRoute = ({ loader }: LazyRouteProps) => {
  const LazyComponent = lazy(loader);
  
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      }
    >
      <LazyComponent />
    </Suspense>
  );
};

/**
 * Helper function to create lazy route components
 * Usage: const LazyAboutPage = createLazyRoute(() => import('./pages/AboutUs'));
 */
export const createLazyRoute = (loader: () => Promise<{ default: ComponentType<any> }>) => {
  return () => <LazyRoute loader={loader} />;
};

