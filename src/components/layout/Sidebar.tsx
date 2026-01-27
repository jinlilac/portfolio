import Logo from "@/components/common/Logo";
import Navigation from "@/components/common/Navigation";
import ThemeToggle from "@/components/common/ThemeToggle";
import SocialLinks from "@/components/common/SocialLinks";

const Sidebar = () => (
  <aside
    className="fixed left-0 top-0 hidden h-screen w-80 flex-col justify-between
               border-r border-gray-100 bg-white px-8 py-10 dark:border-gray-800
               dark:bg-gray-900 lg:flex"
  >
    <div className="flex flex-col gap-10">
      <Logo size={40} />
      <Navigation vertical />
    </div>

    <div className="flex items-center justify-between">
      <SocialLinks className=" flex-1" />
      <ThemeToggle />
    </div>
  </aside>
);

export default Sidebar;
