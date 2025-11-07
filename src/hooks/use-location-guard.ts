import { useLocationContext } from "@/contexts/LocationContext";
import { useCallback } from "react";

/**
 * Hook to guard navigation that requires location selection
 * Returns a handler function that checks if location is selected before allowing navigation
 */
export function useLocationGuard() {
  const { requireLocationSelection } = useLocationContext();

  const guard = useCallback((callback?: () => void) => {
    const blocked = requireLocationSelection();
    if (!blocked && callback) {
      callback();
    }
    return !blocked;
  }, [requireLocationSelection]);

  return guard;
}

