// src/pages/DesignDetail.tsx
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Modal from "@/components/ui/Modal";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import { ProjectType } from "@/types/project";
import { ExternalLink, Github, Figma } from "lucide-react";
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

export const designItem: ProjectType = {
  id: 999,
  title: "포스터 디자인",
  sub_title: "Photoshop, Illustrator로 주제에 맞는 포스터 디자인",
  created_at: new Date().toISOString(),
  contribution: "개인(100%)",
  project_name: "포스터 디자인",
  project_term: "2023.11",
  project_range: "",
  project_description:
    "포스터의 목적에 따라 디자인 컨셉을 정하고, Photoshop, Illustrator를 사용하여 시각적 요소를 만들었습니다. 포스터 레이아웃과 구성, 헤드라인, 텍스트 배치 등에 대한 이미지 배치, 컬러 스키마 등을 바탕으로 시작적요소를 조직하여, 완성도 높고 시선을 사로잡을 수 있도록 설계했습니다.",
  tool: ["Photoshop", "Illustrator"],
  imgs: [
    "/public/src/assets/imgs/design.jpg",
    "/public/src/assets/imgs/design_2.png",
  ],
  img_url: "/public/src/assets/imgs/design.jpg",
  site_link: "",
  git_link: "",
  figma_link: "",
  order: 0,
  show: true,
};

const DesignDetail = () => {
  const navigate = useNavigate();
  const project = designItem;
  console.log("project", project);

  return (
    <Modal
      isOpen={true}
      onClose={() => navigate("/projects")}
      title={project?.project_name || "Loading..."}
    >
      <Container className="space-y-6">
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
              className="w-full h-64 rounded-lg overflow-hidden"
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
                      className="w-full h-64 object-contain"
                    />
                  </SwiperSlide>
                ))
              ) : (
                <SwiperSlide className="flex items-center justify-center">
                  <img
                    src={project.img_url}
                    alt={project.project_name}
                    className="w-full h-64 object-cover"
                  />
                </SwiperSlide>
              )}
            </Swiper>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">프로젝트 설명</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {project.project_description}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">기여도</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {project.contribution}
                </p>
              </div>

              <div>
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
                  Live Demo
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

export default DesignDetail;
