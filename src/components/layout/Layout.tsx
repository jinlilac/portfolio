import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useApp } from "@/contexts/AppContext";
import SkipLink from "@/components/common/SkipLink";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";

const Layout = () => {
  const { isMobileMenuOpen, closeMobileMenu } = useApp();

  // 모바일 메뉴 외부 클릭 시 닫기
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as Element;
      if (
        isMobileMenuOpen &&
        !target.closest(".mobile-menu") &&
        !target.closest(".mobile-menu-trigger")
      ) {
        closeMobileMenu();
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [isMobileMenuOpen, closeMobileMenu]);

  // 모바일 메뉴 열려있을 때 스크롤 방지
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* 접근성: Skip to content 링크 */}
      <SkipLink />

      {/* 헤더 (모바일용) */}
      <Header />

      {/* 사이드바 (데스크톱용) */}
      <Sidebar />

      {/* 메인 콘텐츠 */}
      <main
        id="main-content"
        role="main"
        className={`
          lg:ml-80 flex flex-col h-dvh 
          transition-all duration-300 ease-in-out 
          ${isMobileMenuOpen ? "lg:ml-80" : ""}
        `}
        tabIndex={-1}
      >
        <div className="flex-1 pt-16 lg:pt-0 h-[calc(100dvh-69px)] overflow-scroll">
          <Outlet />
        </div>

        {/* 푸터 */}
        <Footer />
      </main>

      {/* 모바일 메뉴 오버레이 */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={closeMobileMenu}
          aria-hidden="true"
        />
      )}
    </div>
  );
};

export default Layout;
