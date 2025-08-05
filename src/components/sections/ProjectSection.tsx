// src/pages/ProjectsPage.tsx
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/sections/SectionHeading";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { ProjectType } from "@/types/project";
import { Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { ProjectListQuery } from "@/hooks/useProject";
import { mergeDesignItem } from "@/types/mergeDesignItem";

const ProjectsPage = () => {
  const { data, isLoading, error } =
    useQuery<ProjectType[]>(ProjectListQuery());
  if (isLoading) return <div>Loading...</div>;

  // const sortedData = [...(data || [])].sort(
  //   (a, b) => (a.order ?? 0) - (b.order ?? 0)
  // );
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
              <Card
                key={p.id}
                className="flex flex-col hover:shadow-lg transition-shadow"
              >
                {p.title && (
                  <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                )}
                {p.project_name && (
                  <p className="text-sm text-primary-400 mb-4">
                    {p.project_name}
                  </p>
                )}
                {p.sub_title && (
                  <p className="text-sm text-gray-400 mb-4">{p.sub_title}</p>
                )}
                {p.project_term && (
                  <p className="text-sm text-gray-400 mb-4">{p.project_term}</p>
                )}
                {p.contribution && (
                  <p className="text-sm text-gray-400 mb-4">{p.contribution}</p>
                )}
                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tool.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 dark:bg-gray-700 bg-gray-300 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* <div className="mt-auto"> */}
                <Link to={`/projects/${p.id === 999 ? "design" : p.id}`}>
                  <Button
                    variant="primary"
                    leftIcon={<Eye size={16} />}
                    size="sm"
                  >
                    View Details
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        )}
      </Container>
    </>
  );
};

export default ProjectsPage;
