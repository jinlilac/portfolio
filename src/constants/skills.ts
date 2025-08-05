import { Skill } from "@/types/portfolio";

export const skills: Skill[] = [
  // Frontend
  {
    name: "React",
    level: 90,
    category: "frontend",
    icon: "React",
    description: "Component 기반 UI 라이브러리, Hooks, Context API 숙련",
  },
  {
    name: "TypeScript",
    level: 85,
    category: "frontend",
    icon: "TypeScript",
    description: "타입 안정성을 위한 정적 타입 언어, 인터페이스 설계",
  },
  {
    name: "JavaScript",
    level: 90,
    category: "frontend",
    icon: "JavaScript",
    description: "ES6+ 문법, 비동기 처리, DOM 조작 능숙",
  },
  {
    name: "HTML5",
    level: 95,
    category: "frontend",
    icon: "Html5",
    description: "시맨틱 마크업, 웹 접근성, SEO 최적화",
  },
  {
    name: "CSS3",
    level: 90,
    category: "frontend",
    icon: "Css3",
    description: "Flexbox, Grid, 애니메이션, 반응형 디자인",
  },
  {
    name: "Next.js",
    level: 40,
    category: "frontend",
    icon: "NextJs",
    description: "SSR, SSG, API Routes, 성능 최적화",
  },

  // Styling
  {
    name: "Styled Components",
    level: 85,
    category: "styling",
    icon: "StyledComponents",
    description: "CSS-in-JS, 동적 스타일링, 테마 시스템",
  },
  {
    name: "Tailwind CSS",
    level: 80,
    category: "styling",
    icon: "TailwindCss",
    description: "Utility-first CSS, 빠른 프로토타이핑, 반응형 디자인",
  },
  {
    name: "Sass/SCSS",
    level: 75,
    category: "styling",
    icon: "Sass",
    description: "변수, 중첩, 믹스인을 활용한 CSS 전처리",
  },

  // State Management
  {
    name: "Recoil",
    level: 80,
    category: "stateManagement",
    icon: "Recoil",
    description: "Facebook 개발 상태 관리 라이브러리, Atom 패턴",
  },
  {
    name: "Zustand",
    level: 75,
    category: "stateManagement",
    icon: "Zustand",
    description: "경량 상태 관리 라이브러리, 단순한 API",
  },
  {
    name: "React Query",
    level: 85,
    category: "stateManagement",
    icon: "ReactQuery",
    description: "서버 상태 관리, 캐싱, 동기화",
  },
  {
    name: "Redux Toolkit",
    level: 40,
    category: "stateManagement",
    icon: "Redux",
    description: "예측 가능한 상태 관리, 미들웨어 활용",
  },

  // Tools
  {
    name: "Vite",
    level: 80,
    category: "tools",
    icon: "Vite",
    description: "빠른 개발 서버, HMR, 번들링 최적화",
  },
  {
    name: "Webpack",
    level: 70,
    category: "tools",
    icon: "Webpack",
    description: "모듈 번들러, 설정 최적화, 플러그인 활용",
  },
  {
    name: "Git",
    level: 85,
    category: "tools",
    icon: "Git",
    description: "버전 관리, 브랜치 전략, 협업 워크플로우",
  },
  {
    name: "Figma",
    level: 75,
    category: "tools",
    icon: "Figma",
    description: "UI/UX 디자인, 프로토타이핑, 디자인 시스템",
  },
  {
    name: "Photoshop",
    level: 70,
    category: "tools",
    icon: "Photoshop",
    description: "이미지 편집, 웹 디자인, 그래픽 작업",
  },

  // Backend (기본 수준)
  // {
  //   name: "Node.js",
  //   level: 60,
  //   category: "backend",
  //   icon: "NodeJs",
  //   description: "JavaScript 런타임, API 개발 기본기",
  // },
  // {
  //   name: "Express.js",
  //   level: 55,
  //   category: "backend",
  //   icon: "Express",
  //   description: "Node.js 웹 프레임워크, RESTful API",
  // },
  {
    name: "Supabase",
    level: 65,
    category: "backend",
    icon: "Supabase",
    description: "BaaS, 실시간 데이터베이스, 인증",
  },
  {
    name: "Firebase",
    level: 65,
    category: "backend",
    icon: "Firebase",
    description: "인증, 데이터베이스, 호스팅, 클라우드 함수",
  },
];

// 카테고리별 스킬 그룹핑
export const skillsByCategory = {
  frontend: skills.filter((skill) => skill.category === "frontend"),
  styling: skills.filter((skill) => skill.category === "styling"),
  stateManagement: skills.filter(
    (skill) => skill.category === "stateManagement"
  ),
  tools: skills.filter((skill) => skill.category === "tools"),
  backend: skills.filter((skill) => skill.category === "backend"),
  // design: skills.filter((skill) => skill.category === "design"),
};

// 카테고리 라벨 매핑
export const categoryLabels = {
  frontend: "Frontend",
  styling: "Styling",
  stateManagement: "State Management",
  tools: "Tools & Build",
  backend: "Backend",
  // design: "Design",
};

// 숙련도별 스킬 분류
export const getSkillsByLevel = (minLevel: number): Skill[] => {
  return skills.filter((skill) => skill.level >= minLevel);
};

// 전문 기술 (80% 이상)
export const expertSkills = getSkillsByLevel(80);

// 숙숙한 기술 (60% 이상)
export const proficientSkills = getSkillsByLevel(60);

// 특정 카테고리의 스킬 반환
export const getSkillsByCategory = (category: Skill["category"]): Skill[] => {
  return skills.filter((skill) => skill.category === category);
};

// 스킬 검색
export const searchSkills = (query: string): Skill[] => {
  const lowercaseQuery = query.toLowerCase();
  return skills.filter(
    (skill) =>
      skill.name.toLowerCase().includes(lowercaseQuery) ||
      skill.description?.toLowerCase().includes(lowercaseQuery)
  );
};
