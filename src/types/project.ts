// src/types/project.ts
export type ProjectType = {
  id: number;
  created_at: string;
  title: string;
  sub_title: string;
  order: number;
  project_name: string;
  contribution: string;
  operate?: string;
  project_range: string;
  project_term: string;
  tool: string[];
  project_description: string;
  site_link?: string;
  git_link?: string;
  velog_link?: string;
  figma_link?: string;
  img_url?: string;
  imgs?: string[];
  show: boolean;
  features?: string[];
};
