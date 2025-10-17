import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there's a hash (like #summerlin), don't scroll to top
    // This preserves the local selector accordion behavior
    if (hash) {
      return;
    }

    // Scroll to top for normal page navigation
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
};

