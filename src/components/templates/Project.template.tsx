import ProjectCard from "@/components/organisms/ProjectCard";
import { ProjectType } from "@/types/project";
import { Swiper, SwiperSlide } from "swiper/react";

// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/navigation";
// @ts-ignore
import "swiper/css/pagination";
// @ts-ignore
import "swiper/css/scrollbar";

import { Navigation, Pagination } from "swiper/modules";

export default function ProjectTemplate({ data }: { data: ProjectType[] }) {
  return (
    <Swiper
      modules={[Pagination, Navigation]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      loop
      pagination={{ clickable: true }}
      className="project h-dvh"
    >
      {data?.map((project) => (
        <SwiperSlide className="h-full lg:px-14">
          <ProjectCard {...project} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
