import { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    id: 1,
    title: "Drive",
    subtitle: "드라이브 및 워크스페이스",
    description:
      "태그별 파일 드라이브 및 워크스페이스 데모 사이트입니다. 기획 및 프론트엔드 담당으로 파일업로드, 폴더 생성, 폴더, 파일 복수 선택 관리, 다운로드 기능을 UI/UX 설계와 구현했습니다.",
    period: "2025.03 ~ 진행중",
    contribution: "기획 및 디자인(70%), FE(100%)",
    tech: [
      "React",
      "TypeScript",
      "Styled-Components",
      "Zustand",
      "TanStack React Query",
      "Atomic Design System",
      "Bun",
    ],
    features: [
      "파일 업로드 및 다운로드",
      "폴더 생성 및 관리",
      "다중 파일/폴더 선택",
      "태그 기반 파일 분류",
      "실시간 동기화",
      "반응형 UI",
    ],
    category: "웹사이트",
    status: "in-progress",
    liveDemo: "#",
    github: "#",
    highlights: [
      "사용자 친화적인 드래그 앤 드롭 인터페이스",
      "TypeScript로 타입 안정성 확보",
      "Atomic Design System 적용",
    ],
  },
  {
    id: 2,
    title: "마이레저",
    subtitle: "웹/앱 크로스 플랫폼",
    description:
      "사용자가 레저 활동 장소를 찾을 수 있고, 취향에 맞는 레저 활동을 추천 받을 수 있는 서비스를 만들었습니다. 프론트엔드를 담당하며 비동기 처리, 폼 상태 관리 검증, 웹/앱 환경 분기처리, 앱푸시 알림 기능을 구현했습니다.",
    period: "2023.08 ~ 2024.01",
    contribution: "기획 및 디자인(20%), FE(100%)",
    tech: [
      "React",
      "TypeScript",
      "Styled-Components",
      "Recoil",
      "React-Query",
      "Atomic Design System",
      "React-Native Expo",
    ],
    features: [
      "취향 기반 레저 활동 추천",
      "지역별 레저 시설 검색",
      "실시간 예약 시스템",
      "사용자 리뷰 및 평점",
      "앱 푸시 알림",
      "소셜 로그인",
    ],
    category: "웹사이트, iOS, Android (웹뷰)",
    status: "completed",
    liveDemo: "#",
    github: "#",
    highlights: [
      "크로스 플랫폼 개발로 개발 효율성 극대화",
      "PWA 기술로 네이티브 앱과 유사한 경험 제공",
      "개인화 추천 알고리즘 구현",
    ],
  },
  {
    id: 3,
    title: "마이레저 관리자 페이지",
    subtitle: "관리자 페이지",
    description:
      "마이레저 서비스의 효율적인 운영과 데이터 관리를 위한 종합 관리자 페이지를 구현했습니다. 이 프로젝트를 통해 레저 업장 정보, 마케팅 컨텐츠, 사용자 데이터 등을 한 곳에서 통합적으로 관리할 수 있는 시스템을 구현했습니다.",
    period: "10일",
    contribution: "기획 및 디자인(100%), 프론트엔드(100%)",
    tech: [
      "React",
      "TypeScript",
      "Tailwind-CSS",
      "React-Query",
      "Shadcn-ui",
      "Recoil",
      "React-hook-form",
    ],
    features: [
      "레저 업장 정보 관리",
      "사용자 데이터 분석",
      "마케팅 컨텐츠 관리",
      "실시간 통계 대시보드",
      "권한 기반 접근 제어",
      "데이터 내보내기",
    ],
    category: "웹사이트",
    status: "completed",
    liveDemo: "#",
    github: "#",
    highlights: [
      "10일 만에 완성한 빠른 개발 속도",
      "Shadcn-ui 활용한 일관된 디자인 시스템",
      "효율적인 데이터 관리 인터페이스",
    ],
  },
  {
    id: 4,
    title: "HOUSE-CONNECT",
    subtitle: "반응형 웹 사이트",
    description:
      "룸메이트 매칭을 위해 집을 등록하고 소통할 수 있는 서비스를 구현해 본 사이드 프로젝트입니다. React Query와 Recoil을 활용하여 데이터 관리와 상태 관리를 최적화했고, Supabase를 통해 데이터베이스 및 스토리지 통합을 직접 구현했습니다.",
    period: "2024.04 ~ 2024.07",
    contribution: "기획 및 디자인(60%), 프론트엔드(70%)",
    tech: [
      "Vite",
      "React",
      "TypeScript",
      "Recoil",
      "React-Query",
      "Tailwind-CSS",
      "Supabase",
    ],
    features: [
      "집 등록 및 관리",
      "룸메이트 매칭 시스템",
      "실시간 채팅",
      "북마크 기능",
      "고급 필터링",
      "지도 기반 검색",
    ],
    category: "웹사이트",
    status: "completed",
    liveDemo: "#",
    github: "#",
    highlights: [
      "Supabase를 활용한 실시간 데이터 동기화",
      "직관적인 UI/UX로 사용자 경험 개선",
      "효율적인 매칭 알고리즘 구현",
    ],
  },
  {
    id: 5,
    title: "디즈니 플러스 앱",
    subtitle: "리액트 영화 목록 웹 만들기",
    description:
      "디즈니 플러스 클론 코딩 사이트입니다. Firebase 활용하여 사용자 인증 및 데이터베이스 관리 구현, TheMovieDB API를 axios 통해 영화 정보를 가져오고 표시하는 데 사용되었습니다.",
    period: "2일",
    contribution: "개인(100%) 인터넷 강의 참고",
    tech: [
      "React",
      "JavaScript",
      "React-Query",
      "HTML",
      "CSS",
      "Firebase",
      "TheMovieDB API",
    ],
    features: [
      "영화 상세 정보 표시",
      "메인 페이지 구성",
      "사용자 로그인",
      "영화 검색 기능",
      "반응형 디자인",
    ],
    category: "웹사이트",
    status: "completed",
    liveDemo: "#",
    github: "#",
    highlights: [
      "빠른 학습 능력과 실행력 입증",
      "API 연동 및 데이터 처리 경험",
      "Firebase 인증 시스템 구현",
    ],
  },
  {
    id: 6,
    title: "오리온 웹 리뉴얼",
    subtitle: "반응형 웹사이트",
    description:
      "기존 사이트의 사용자 경험을 개선하여 더 쉽게 정보를 찾고 기업 브랜드 이미지를 재해석하여 시각적 요소를 업데이트 시켰습니다.",
    period: "2024.01 ~ 2024.02",
    contribution: "개인(100%)",
    tech: ["HTML", "CSS", "JavaScript", "Figma", "PhotoShop"],
    features: [
      "브랜드 아이덴티티 재해석",
      "사용자 경험 개선",
      "반응형 웹 디자인",
      "성능 최적화",
      "접근성 개선",
    ],
    category: "웹사이트",
    status: "completed",
    liveDemo: "#",
    github: "#",
    highlights: [
      "기존 브랜드를 현대적으로 재해석",
      "사용자 중심의 정보 구조 설계",
      "웹 표준 및 접근성 준수",
    ],
  },
  {
    id: 7,
    title: "TODO LIST",
    subtitle: "리액트 할일 목록 만들기",
    description:
      "리액트 상태 관리와 이벤트 처리 방식을 활용하여 Todo 추가, 완료/미완료, Todo 삭제, 중요 여부 표시를 나타나도록 구현했습니다.",
    period: "2일",
    contribution: "개인 100%",
    tech: ["React", "HTML", "CSS", "JavaScript", "Figma"],
    features: [
      "Todo 추가/삭제",
      "완료 상태 관리",
      "중요도 표시",
      "로컬 스토리지 저장",
      "필터링 기능",
    ],
    category: "웹사이트",
    status: "completed",
    liveDemo: "#",
    github: "#",
    highlights: [
      "React 기본 개념 학습 및 적용",
      "상태 관리 패턴 이해",
      "사용자 인터페이스 설계 경험",
    ],
  },
];

// 프로젝트 카테고리별 필터링 함수
export const getProjectsByCategory = (category: string): Project[] => {
  if (category === "all") return projects;
  return projects.filter((project) =>
    project.category.toLowerCase().includes(category.toLowerCase())
  );
};

// 프로젝트 상태별 필터링 함수
export const getProjectsByStatus = (status: Project["status"]): Project[] => {
  return projects.filter((project) => project.status === status);
};

// 특정 기술을 사용한 프로젝트 찾기
export const getProjectsByTech = (tech: string): Project[] => {
  return projects.filter((project) =>
    project.tech.some((t) => t.toLowerCase().includes(tech.toLowerCase()))
  );
};

// 프로젝트 ID로 프로젝트 찾기
export const getProjectById = (id: number): Project | undefined => {
  return projects.find((project) => project.id === id);
};
