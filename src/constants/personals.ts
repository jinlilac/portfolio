import {
  PersonalInfo,
  Experience,
  Education,
  Achievement,
  ContactInfo,
} from "@/types/portfolio";

// 개인 정보
export const personalInfo: PersonalInfo = {
  name: "김수현",
  birth: "1999.02.19",
  email: "coduit.99@gmail.com",
  title: "Frontend Developer",
  subtitle: "React Specialist • UI/UX Enthusiast",
  introduction:
    "사용자 접근성을 최우선으로 하는 프론트엔드 개발자입니다. 다양한 직군과의 협업 경험과 글로벌 커뮤니케이션 역량으로 팀과 함께 성장합니다.",
  description:
    "안녕하세요! 배우는 걸 멈추지 않는 신입 프론트엔드 개발자입니다. 새로운 기술에 대한 호기심이 많아 React와 TypeScript를 빠르게 익혔고, 웹 접근성과 사용자 경험을 항상 최우선으로 생각합니다. 협업을 즐겨 동료의 의견을 경청하며, 때로는 완벽을 추구하는 성향이 코드 품질을 끌어올리는 원동력이 되기도 합니다. 4년간의 해외 경험을 바탕으로 글로벌 시각을 갖추었으며, 앞으로도 모두가 쉽게 사용할 수 있는 의미 있는 서비스를 만들어 나가고 싶습니다.",
  location: "서울, 대한민국",
  goals:
    "개발자로서의 여정은 이제 시작입니다. 매일 새로운 것을 배우며 성장하는 과정에서 느끼는 설렘과 성취감이 저를 더욱 발전시키는 원동력이 됩니다. 함께 성장할 수 있는 팀에서 협업하며, 의미 있는 프로젝트를 만들어가고 싶습니다. 새로운 기회나 협업 제안이 있으시면 언제든 연락주세요!",
};

// 경력 정보
export const experiences: Experience[] = [
  {
    id: 1,
    period: "2025.03 ~ 2025.05",
    company: "스티치(STITCH)",
    position: "프론트엔드 개발 사원",
    description: "React 기반 웹 애플리케이션 개발 및 UI/UX 개선",
    achievements: [
      "React + TypeScript 기반 신규 기능 개발",
      "사용자 인터페이스 성능 최적화",
      "반응형 웹 디자인 구현",
    ],
    type: "work",
  },
  {
    id: 2,
    period: "2024.08 ~ 2025.01",
    company: "(주) 세레머니",
    position: "프론트엔드 개발 사원",
    description: "Webview기반 웹/앱 UI/UX 개선 및 신규 기능 개발",
    achievements: [
      "레거시 코드 리팩토링으로 성능 30% 개선",
      "사용자 경험 개선으로 만족도 25% 증가",
      "크로스 브라우저 호환성 구현",
    ],
    type: "work",
  },
  {
    id: 3,
    period: "2021.12 ~ 2022.03",
    company: "LG CNS",
    position: "재무 및 경영지원 인턴",
    description: "데이터 분석 및 업무 프로세스 개선",
    achievements: [
      "엑셀 자동화 시스템 구축으로 업무 효율성 40% 향상",
      "데이터 시각화 대시보드 개발",
      "업무 프로세스 표준화 문서 작성",
    ],
    type: "work",
  },
];

// 교육 정보
export const education: Education[] = [
  {
    id: 1,
    period: "2023.10 ~ 2024.03",
    institution: "이젠 아카데미",
    program: "UI/UX 웹 퍼블리셔 프론트엔드 양성과정",
    achievement: "우수상 수료",
    description: "HTML, CSS, JavaScript, React를 활용한 웹 개발 전문 과정",
  },
  {
    id: 2,
    period: "2018.08 ~ 2022.06",
    institution: "북경과학기술대학교",
    program: "국제무역학",
    achievement: "졸업",
    description: "글로벌 비즈니스 환경에서의 국제무역 이론과 실무",
  },
];

// 성과 지표
export const achievements: Achievement[] = [
  {
    label: "완료한 프로젝트",
    value: 7,
    suffix: "+",
    description: "성공적으로 완료한 웹 개발 프로젝트",
  },
  {
    label: "개발 경험",
    value: 1,
    suffix: "년+",
    description: "실무 프론트엔드 개발 경험",
  },
  {
    label: "사용 기술",
    value: 15,
    suffix: "+",
    description: "능숙하게 다루는 기술 스택",
  },
  {
    label: "클라이언트 만족도",
    value: 95,
    suffix: "%",
    description: "프로젝트 완료 후 클라이언트 만족도",
  },
];

// 연락처 정보
export const contactInfo: ContactInfo = {
  email: "coduit.99@gmail.com",
  location: "서울, 대한민국",
  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/jinlilac",
      icon: "Github",
      color: "#333",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/suhyun-kim-coduit",
      icon: "Linkedin",
      color: "#0077B5",
    },
    {
      name: "Email",
      url: "mailto:coduit.99@gmail.com",
      icon: "Mail",
      color: "#EA4335",
    },
    {
      name: "Blog",
      url: "https://velog.io/@kimcode99/posts",
      icon: "NotebookPen",
      color: "#2dd4bf",
    },
  ],
};
