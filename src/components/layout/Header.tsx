import { Menu } from "lucide-react";
import Logo from "@/components/common/Logo";
import ThemeToggle from "@/components/common/ThemeToggle";
import Navigation from "@/components/common/Navigation";
import { useApp } from "@/contexts/AppContext";

const Header = () => {
  const { isMobileMenuOpen, toggleMobileMenu } = useApp();

  return (
    <header
      className="fixed left-0 top-0 z-50 flex h-16 w-full items-center justify-between
                 border-b border-gray-100 bg-white/80 px-4 backdrop-blur
                 dark:border-gray-800 dark:bg-gray-900/80 lg:hidden"
    >
      <Logo size={28} />
      <div className="flex items-center gap-2">
        <ThemeToggle />
        <button
          onClick={toggleMobileMenu}
          aria-label="모바일 메뉴"
          className="mobile-menu-trigger rounded p-2 text-primary-500 hover:bg-gray-100
                     dark:hover:bg-gray-800"
        >
          <Menu size={22} />
        </button>
      </div>

      {/* Slide-in 메뉴 */}
      <aside
        className={`mobile-menu fixed top-0 right-0 z-60 h-screen w-4/5 max-w-xs
                    bg-white p-6 transition-transform dark:bg-gray-900
                    ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <Navigation vertical />
      </aside>
    </header>
  );
};

export default Header;
