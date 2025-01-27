import { supabase } from "@/supabaseClient";
import { ProjectType } from "@/types/project";
import { queryOptions } from "@tanstack/react-query";

export const ProjectQuery = () =>
  queryOptions<ProjectType[]>({
    queryKey: ["project"],
    queryFn: async () => {
      const { data } = await supabase.from("project").select("*");
      return data as ProjectType[];
    },
  });
