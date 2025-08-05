import React, { createContext, useContext, useState, useCallback } from "react";

interface AppState {
  isLoading: boolean;
  error: string | null;
  isMobileMenuOpen: boolean;
  currentSection: string;
}

interface AppContextType extends AppState {
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  clearError: () => void;
  toggleMobileMenu: () => void;
  closeMobileMenu: () => void;
  setCurrentSection: (section: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
};

interface AppProviderProps {
  children: React.ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [state, setState] = useState<AppState>({
    isLoading: false,
    error: null,
    isMobileMenuOpen: false,
    currentSection: "home",
  });

  const setLoading = useCallback((loading: boolean) => {
    setState((prev) => ({ ...prev, isLoading: loading }));
  }, []);

  const setError = useCallback((error: string | null) => {
    setState((prev) => ({ ...prev, error }));
  }, []);

  const clearError = useCallback(() => {
    setState((prev) => ({ ...prev, error: null }));
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setState((prev) => ({ ...prev, isMobileMenuOpen: !prev.isMobileMenuOpen }));
  }, []);

  const closeMobileMenu = useCallback(() => {
    setState((prev) => ({ ...prev, isMobileMenuOpen: false }));
  }, []);

  const setCurrentSection = useCallback((section: string) => {
    setState((prev) => ({ ...prev, currentSection: section }));
  }, []);

  const value: AppContextType = {
    ...state,
    setLoading,
    setError,
    clearError,
    toggleMobileMenu,
    closeMobileMenu,
    setCurrentSection,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
