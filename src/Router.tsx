import ErrorBoundary from "@/components/common/ErrorBoundary";
import Layout from "@/components/layout/Layout";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import { getProjectById } from "@/constants/projects";
import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// 로딩 컴포넌트 래퍼
const SuspenseWrapper = ({ children }: { children: React.ReactNode }) => (
  <Suspense fallback={<LoadingSpinner />}>{children}</Suspense>
);
const HomePage = lazy(() => import("@/pages/HomePage"));
const AboutPage = lazy(() => import("@/components/sections/AboutSection"));
const SkillsPage = lazy(() => import("@/components/sections/SkillsSection"));
const ProjectsPage = lazy(() => import("@/components/sections/ProjectSection"));
const ProjectDetailPage = lazy(
  () => import("@/components/sections/ProjectDetailSection")
);
const DesignDetailPage = lazy(
  () => import("@/components/sections/DesignDetail")
);
const ContactPage = lazy(() => import("@/components/sections/ContactSection"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: (
          <SuspenseWrapper>
            <HomePage />
          </SuspenseWrapper>
        ),
      },
      {
        path: "about",
        element: (
          <SuspenseWrapper>
            <AboutPage />
          </SuspenseWrapper>
        ),
      },
      {
        path: "skills",
        element: (
          <SuspenseWrapper>
            <SkillsPage />
          </SuspenseWrapper>
        ),
      },
      {
        path: "projects",
        children: [
          {
            index: true,
            element: (
              <SuspenseWrapper>
                <ProjectsPage />
              </SuspenseWrapper>
            ),
          },
          {
            path: "design",
            element: (
              <SuspenseWrapper>
                <DesignDetailPage />
              </SuspenseWrapper>
            ),
          },
          {
            path: ":id",
            element: (
              <SuspenseWrapper>
                <ProjectDetailPage />
              </SuspenseWrapper>
            ),
            loader: async ({ params }) => {
              // 프로젝트 데이터 미리 로드
              const projectId = parseInt(params.id || "0", 10);
              const project = getProjectById(projectId);

              if (!project) {
                throw new Response("Project Not Found", {
                  status: 404,
                  statusText: "Project Not Found",
                });
              }

              return { project };
            },
          },
        ],
      },
      {
        path: "contact",
        element: (
          <SuspenseWrapper>
            <ContactPage />
          </SuspenseWrapper>
        ),
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
