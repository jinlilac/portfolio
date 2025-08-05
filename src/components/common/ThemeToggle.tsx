import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="다크/라이트 모드 전환"
      className="rounded p-2 text-primary-500 transition hover:bg-gray-100 dark:hover:bg-gray-800"
    >
      {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};

export default ThemeToggle;
