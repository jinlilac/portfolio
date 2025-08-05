// src/hooks/useProject.ts
import { supabase } from "@/supabaseClient";
import { ProjectType } from "@/types/project";
import { queryOptions } from "@tanstack/react-query";

// 전체 프로젝트 목록 가져오는 옵션
export const ProjectListQuery = () =>
  queryOptions<ProjectType[]>({
    queryKey: ["projects"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("project")
        .select("*")
        .order("order", { ascending: true })
        .eq("show", true);
      if (error) throw error;
      return data!;
    },
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });

// 단일 프로젝트 가져오는 옵션
export const ProjectDetailQuery = (id: number) =>
  queryOptions<ProjectType>({
    queryKey: ["project", id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("project")
        .select("*")
        .eq("id", id)
        .single();
      if (error) throw error;
      return data!;
    },
    enabled: id > 0,
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });
