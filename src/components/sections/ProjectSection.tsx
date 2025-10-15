// src/pages/ProjectsPage.tsx
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/sections/SectionHeading";
import { ProjectType } from "@/types/project";
import { ProjectListQuery } from "@/hooks/useProject";
import { mergeDesignItem } from "@/types/mergeDesignItem";
import { ProjectCard } from "@/components/ui/ProjectCard";

const ProjectsPage = () => {
  const { data, isLoading, error } =
    useQuery<ProjectType[]>(ProjectListQuery());
  if (isLoading) return <div>Loading...</div>;

  const merged = mergeDesignItem(data || []);
  const sortedData = merged.sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

  return (
    <>
      <Helmet>
        <title>Projects | 김수현 Portfolio</title>
        <meta name="description" content="김수현의 프로젝트 목록입니다." />
      </Helmet>

      <Container className="py-24" id="projects">
        <SectionHeading
          id="projects"
          title="Projects"
          className="text-center"
        />

        {isLoading ? (
          <div className="flex justify-center py-16">
            <p>Loading projects...</p>
          </div>
        ) : error ? (
          <div className="text-center text-red-600">
            Failed to load projects.
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
            {sortedData!.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        )}
      </Container>
    </>
  );
};

export default ProjectsPage;
