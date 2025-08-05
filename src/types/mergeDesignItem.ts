// src/utils/mergeDesignItem.ts
import { ProjectType } from "@/types/project";

/**
 * 기존 프로젝트 배열 뒤에 '포스터 디자인' 항목을 추가합니다.
 * id: number;
  created_at: string;
  title: string;
  order: number;
  project_name: string;
  contribution: string;
  project_range: string;
  project_term: string;
  tool: string[];
  project_description: string;
  site_link?: string;
  git_link?: string;
  figma_link?: string;
  img_url?: string;
  show: boolean;
 */
export function mergeDesignItem(projects: ProjectType[]): ProjectType[] {
  const maxOrder = projects.length
    ? Math.max(...projects.map((p) => p.order ?? 0))
    : 0;

  const designItem: ProjectType = {
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
    order: maxOrder + 1,
    show: true,
  };

  return [...projects, designItem];
}
