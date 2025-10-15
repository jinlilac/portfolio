import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye } from "lucide-react";
import { ProjectType } from "@/types/project";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export const ProjectCard = ({ project }: { project: ProjectType }) => {
  const [expanded, setExpanded] = useState(false);
  const tools = project.tool || [];
  const visibleTools = expanded ? tools : tools.slice(0, 3);
  const hiddenCount = tools.length - 3;

  return (
    <Card className="flex flex-col justify-between hover:shadow-lg transition-shadow">
      <div>
        {project.title && (
          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        )}
        {project.project_name && (
          <p className="text-sm text-primary-400 mb-4">
            {project.project_name}
          </p>
        )}
        {project.sub_title && (
          <p className="text-sm text-gray-400 mb-4">{project.sub_title}</p>
        )}
        {project.project_term && (
          <p className="text-sm text-gray-400 mb-4">{project.project_term}</p>
        )}
        {project.contribution && (
          <p className="text-sm text-gray-400 mb-4">{project.contribution}</p>
        )}

        {/* 기술 스택 배지 영역 */}
        <div className="flex flex-wrap gap-2 mb-6 items-center">
          {visibleTools.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 dark:bg-gray-700 bg-gray-300 rounded-full text-xs"
            >
              {tech}
            </span>
          ))}

          {!expanded && hiddenCount > 0 && (
            <button
              onClick={() => setExpanded(true)}
              className="px-3 py-1 bg-gray-400 text-xs rounded-full hover:bg-gray-500 transition"
            >
              +{hiddenCount} 더보기
            </button>
          )}

          {expanded && tools.length > 3 && (
            <button
              onClick={() => setExpanded(false)}
              className="px-3 py-1 bg-gray-400 text-xs rounded-full hover:bg-gray-500 transition"
            >
              접기
            </button>
          )}
        </div>
      </div>

      <Link
        className="mb-1"
        to={`/projects/${project.id === 999 ? "design" : project.id}`}
      >
        <Button variant="primary" leftIcon={<Eye size={16} />} size="sm">
          자세히 보기
        </Button>
      </Link>
    </Card>
  );
};
