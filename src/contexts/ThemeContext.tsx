import React, { createContext, useContext, useEffect, useState } from "react";
import { Theme } from "@/types/portfolio";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

// 시스템 다크 모드 감지
const getSystemTheme = (): Theme => {
  if (typeof window !== "undefined" && window.matchMedia) {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }
  return "dark";
};

// 로컬 스토리지에서 테마 불러오기
const getStoredTheme = (): Theme | null => {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem("theme");
    return stored === "dark" || stored === "light" ? stored : null;
  }
  return null;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>(() => {
    // 저장된 테마가 있으면 사용, 없으면 시스템 설정 따름
    return getStoredTheme() || getSystemTheme();
  });

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem("theme", newTheme);

    // HTML 클래스 업데이트
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(newTheme);
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  useEffect(() => {
    // 초기 테마 설정
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);

    // 시스템 테마 변경 감지
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      // 사용자가 수동으로 설정한 테마가 없을 때만 시스템 테마 따름
      const storedTheme = getStoredTheme();
      if (!storedTheme) {
        const systemTheme = e.matches ? "dark" : "light";
        setThemeState(systemTheme);
        root.classList.remove("light", "dark");
        root.classList.add(systemTheme);
      }
    };

    mediaQuery.addEventListener("change", handleSystemThemeChange);
    return () =>
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
  }, [theme]);

  const value: ThemeContextType = {
    theme,
    toggleTheme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
