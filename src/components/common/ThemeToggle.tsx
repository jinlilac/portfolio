import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? "라이트 모드로 전환" : "다크 모드로 전환"}
      className={`
        group relative flex h-11 w-24 items-center justify-start rounded-xl
        bg-gray-200 p-1 shadow-inner transition-all duration-200 hover:shadow-md
        dark:bg-gray-800
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
      `}
    >
      <span
        className={`
          h-9 w-10 rounded-lg bg-white dark:bg-gray-200 transition-transform duration-300
          ${isDark ? "translate-x-12" : "translate-x-1"}
        `}
      >
        {isDark ? (
          <Moon size={16} className="mx-auto h-full w-full text-indigo-500" />
        ) : (
          <Sun size={16} className="mx-auto h-full w-full text-yellow-500" />
        )}
      </span>

      <span className="absolute left-2 font-medium text-xs uppercase tracking-wide">
        {isDark ? "light" : ""}
      </span>
      <span className="absolute right-2 font-medium text-xs uppercase tracking-wide">
        {!isDark ? "dark" : ""}
      </span>
    </button>
  );
};

export default ThemeToggle;
