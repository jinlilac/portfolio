// src/pages/ProjectDetailPage.tsx
import { useQuery } from "@tanstack/react-query";
import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Modal from "@/components/ui/Modal";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import { ProjectType } from "@/types/project";
import { ExternalLink, Github, Figma, Notebook } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/navigation";
// @ts-ignore
import "swiper/css/pagination";
// @ts-ignore
import "swiper/css/scrollbar";
import { ProjectDetailQuery } from "@/hooks/useProject";

export const designItem: ProjectType = {
  id: 999,
  title: "포스터 디자인",
  sub_title: "Photoshop, Illustrator로 주제에 맞는 포스터 디자인",
  created_at: new Date().toISOString(),
  contribution: "개인(100%)",
  project_name: "포스터 디자인",
  project_term: "",
  project_range: "",
  project_description: "다양한 주제의 포스터를 디자인했습니다.",
  tool: ["Photoshop", "Illustrator"],
  imgs: ["/public/src/assets/imgs/design_2.png"],
  img_url: "/public/src/assets/imgs/design.jpg",
  site_link: "",
  git_link: "",
  figma_link: "",
  velog_link: "",
  order: 0,
  show: true,
};

const ProjectDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const projectId = parseInt(id || "0", 10);

  const {
    data: project,
    isLoading,
    error,
    isError,
  } = useQuery<ProjectType>(ProjectDetailQuery(projectId));

  return (
    <Modal
      isOpen={true}
      onClose={() => navigate("/projects")}
      title={project?.project_name || "Loading..."}
    >
      <Container className="space-y-6">
        {isLoading && (
          <div className="flex justify-center py-16">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-500"></div>
          </div>
        )}

        {isError && (
          <div className="text-center text-red-600 py-8">
            <p>프로젝트를 불러올 수 없습니다.</p>
            <p className="text-sm mt-2">Error: {error?.message}</p>
          </div>
        )}

        {project && (
          <>
            <Helmet>
              <title>{project.project_name} | 김수현 Portfolio</title>
              <meta name="description" content={project.project_description} />
            </Helmet>

            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              loop
              spaceBetween={20}
              slidesPerView={1}
              className="w-full h-96 rounded-lg overflow-hidden"
            >
              {project.imgs && project.imgs.length > 0 ? (
                project.imgs.map((url, idx) => (
                  <SwiperSlide
                    key={idx}
                    className="flex items-center justify-center"
                  >
                    <img
                      src={url}
                      alt={`${project.project_name} screenshot ${idx + 1}`}
                      className="w-full h-full object-contain"
                    />
                  </SwiperSlide>
                ))
              ) : (
                <SwiperSlide className="flex items-center justify-center">
                  <img
                    src={project.img_url}
                    alt={project.project_name}
                    className="w-full h-full object-cover"
                  />
                </SwiperSlide>
              )}
            </Swiper>

            <div className="space-y-2">
              <div className="flex flex-wrap gap-4 py-2 px-2 dark:bg-primary-900 bg-primary-100 rounded-md">
                <div className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                  <span className="font-semibold mr-1">기간:</span>
                  <span>{project.project_term || project.project_range}</span>
                </div>
                <div className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                  <span className="font-semibold mr-1">기여도:</span>
                  <span>{project.contribution}</span>
                </div>
                {project.operate && (
                  <div className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                    <span className="font-semibold mr-1">서비스 운영:</span>
                    <span>{project.operate}</span>
                  </div>
                )}
              </div>

              <div className="pt-2">
                <h3 className="text-lg font-semibold mt-2">프로젝트 설명</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {project.project_description}
                </p>
              </div>
              {project.features && (
                <div className="pt-4">
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
                    주요 기능
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                    {project.features.map((feat, i) => (
                      <li key={i}>{feat}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="pt-4">
                <h3 className="text-lg font-semibold mb-2">사용 기술</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tool?.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
              {project.site_link && (
                <Button
                  as="a"
                  href={project.site_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  size="sm"
                >
                  <ExternalLink size={16} className="mr-1" />
                  Web link
                </Button>
              )}
              {project.git_link && (
                <Button
                  as="a"
                  href={project.git_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  size="sm"
                >
                  <Github size={16} className="mr-1" />
                  GitHub
                </Button>
              )}
              {project.velog_link && (
                <Button
                  as="a"
                  href={project.velog_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  size="sm"
                >
                  <Notebook size={16} className="mr-1" />
                  Blog
                </Button>
              )}
              {project.figma_link && (
                <Button
                  as="a"
                  href={project.figma_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  size="sm"
                >
                  <Figma size={16} className="mr-1" />
                  Figma
                </Button>
              )}
            </div>
          </>
        )}
      </Container>
    </Modal>
  );
};

export default ProjectDetailPage;
