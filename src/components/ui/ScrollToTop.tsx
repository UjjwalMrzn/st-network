import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop = () => {
  const { pathname, state } = useLocation();

  useEffect(() => {
    // If navigating with a specific section scroll ID (e.g., #contact), don't override it
    const routeState = state as { scrollTo?: string } | null;
    if (!routeState?.scrollTo) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, [pathname, state]);

  return null;
};