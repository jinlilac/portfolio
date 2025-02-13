export type ProjectType = {
  id: number;
  created_at: string;
  title?: string;
  order?: number;
  project_name?: string;
  contribution?: string;
  project_range?: string;
  project_term?: string;
  tool?: string[];
  project_description?: string;
  site_link?: string;
  git_link?: string;
  figma_link?: string;
  img_url?: string;
  show?: boolean;
};
