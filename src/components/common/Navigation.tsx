// src/components/common/Navigation.tsx
import { useApp } from "@/contexts/AppContext";
import { Link, useLocation } from "react-router-dom";

const NAV = [
  { id: "home", label: "Home", path: "/" },
  { id: "about", label: "About", path: "/about" },
  { id: "skills", label: "Skills", path: "/skills" },
  { id: "projects", label: "Projects", path: "/projects" },
  { id: "contact", label: "Contact", path: "/contact" },
] as const;

const Navigation = ({ vertical = false }: { vertical?: boolean }) => {
  const { closeMobileMenu, setCurrentSection } = useApp();
  const { pathname } = useLocation();

  // "/" -> "home", "/about" -> "about", etc.
  const activeSection =
    pathname === "/" ? "home" : pathname.replace(/^\/+/, "").split("/")[0];

  const base = "px-4 py-2 text-xl font-medium transition";
  const activeCls = "text-primary-500 dark:text-primary-400";
  const normalCls =
    "text-gray-600 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400";

  return (
    <nav aria-label="메인 메뉴">
      <ul className={`flex ${vertical ? "flex-col gap-6" : "gap-2 lg:gap-4"}`}>
        {NAV.map(({ id, label, path }) => (
          <li key={id}>
            <Link
              to={path}
              onClick={() => {
                setCurrentSection(id);
                closeMobileMenu();
              }}
              className={`${base} ${
                activeSection === id ? activeCls : normalCls
              }`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
