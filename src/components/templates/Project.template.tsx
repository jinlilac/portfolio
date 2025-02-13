import Container from "@/components/atoms/Container";
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
import Typography from "@/components/atoms/Typography";

export default function ProjectTemplate({ data }: { data: ProjectType[] }) {
  return (
    <Swiper
      modules={[Pagination, Navigation]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      className="project h-dvh"
    >
      {data?.map((project) => (
        <SwiperSlide className="h-full lg:px-14">
          <ProjectCard {...project} />
        </SwiperSlide>
      ))}
      <SwiperSlide className="h-full w-full lg:px-12">
        <Container.FlexCol className="lg:h-screen justify-center gap-2">
          <Typography.Head2>포스터 디자인</Typography.Head2>
          <Container.FlexRow className="items-center gap-3 w-full">
            <img
              src="/src/assets/imgs/design.jpg"
              className="lg:flex-1 w-1/2 h-[340px] lg:max-h-[580px] lg:h-full object-contain"
            />
            <img
              src="/src/assets/imgs/design_2.png"
              className="lg:flex-1 w-1/2 h-[340px] lg:max-h-[580px] lg:h-full object-contain"
            />
          </Container.FlexRow>
          <Container.FlexCol className="gap-2">
            <Typography.SubTitle1>OVERVIEW:</Typography.SubTitle1>
            <Typography.P1 className="whitespace-pre-wrap">
              포스터의 목적에 따라 디자인 컨셉을 정하고, Photoshop과
              Illustrator를 사용하여 시각적 요소를 만들었습니다. 포스터의
              레이아웃과 구성은 헤드라인, 부제목, 본문 텍스트 등에 대한 폰트
              선택과 이미지의 배치, 컬러 스키마 등 시각적 요소를 조직하여,
              포스터가 시선을 사로잡고 정보를 명확하게 전달할 수 있도록
              설계했습니다.
            </Typography.P1>
          </Container.FlexCol>
        </Container.FlexCol>
      </SwiperSlide>
    </Swiper>
  );
}
