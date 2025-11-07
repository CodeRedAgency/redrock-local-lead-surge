import { createContext, useContext, useState, ReactNode } from "react";

interface LocationContextType {
  selectedLocation: string | null;
  setSelectedLocation: (location: string) => void;
  showPrompt: boolean;
  setShowPrompt: (show: boolean) => void;
  highlightLocation: boolean;
  setHighlightLocation: (highlight: boolean) => void;
  requireLocationSelection: () => boolean;
}

const LocationContext = createContext<LocationContextType | undefined>(undefined);

export function LocationProvider({ children }: { children: ReactNode }) {
  const [selectedLocation, setSelectedLocationState] = useState<string | null>(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [highlightLocation, setHighlightLocation] = useState(false);

  const setSelectedLocation = (location: string) => {
    setSelectedLocationState(location);
    setShowPrompt(false);
    setHighlightLocation(false);
  };

  const requireLocationSelection = (): boolean => {
    // Check if we're already on a location-specific page
    const currentPath = window.location.pathname;
    const locationPaths = ['/south-florida', '/las-vegas', '/oahu', '/maui', '/columbus-ohio', '/dallas'];
    const isOnLocationPage = locationPaths.some(path => currentPath.includes(path));
    
    if (isOnLocationPage || selectedLocation) {
      return false; // Location is already selected
    }

    // Show the prompt and highlight
    setShowPrompt(true);
    setHighlightLocation(true);

    // Auto-remove highlight after 5 seconds
    setTimeout(() => {
      setHighlightLocation(false);
    }, 5000);

    return true; // Blocked navigation
  };

  return (
    <LocationContext.Provider
      value={{
        selectedLocation,
        setSelectedLocation,
        showPrompt,
        setShowPrompt,
        highlightLocation,
        setHighlightLocation,
        requireLocationSelection,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
}

export function useLocationContext() {
  const context = useContext(LocationContext);
  if (context === undefined) {
    throw new Error("useLocationContext must be used within a LocationProvider");
  }
  return context;
}

