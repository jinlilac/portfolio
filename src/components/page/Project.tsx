import ProjectTemplate from "@/components/templates/Project.template";
import { ProjectQuery } from "@/hooks/useProject";
import { ProjectType } from "@/types/project";
import { useQuery } from "@tanstack/react-query";

export default function Project() {
  const { data, isLoading } = useQuery<ProjectType[]>(ProjectQuery());
  if (isLoading) return <div>Loading...</div>;

  const sortedData = [...(data || [])].sort(
    (a, b) => (a.order ?? 0) - (b.order ?? 0)
  );

  return (
    <div className="h-screen px-32">
      <ProjectTemplate data={sortedData} />
    </div>
  );
}
