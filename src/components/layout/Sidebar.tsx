import Logo from "@/components/common/Logo";
import Navigation from "@/components/common/Navigation";
import ThemeToggle from "@/components/common/ThemeToggle";
import SocialLinks from "@/components/common/SocialLinks";

const Sidebar = () => (
  <aside
    className="fixed left-0 top-0 hidden h-screen w-80 flex-col
               border-r border-gray-100 bg-white px-8 py-6 dark:border-gray-800
               dark:bg-gray-900 lg:flex"
  >
    <div className="mb-12 flex items-center gap-2">
      <Logo size={32} />
      <ThemeToggle />
    </div>

    <Navigation vertical />

    <div className="mt-auto">
      <SocialLinks className="justify-start" />
    </div>
  </aside>
);

export default Sidebar;
