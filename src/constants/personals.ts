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
  subtitle: "React 전문가 • UI/UX 디자인 • 프로젝트 기획 ",
  introduction:
    "UI/UX 웹 기획부터 디자인, 화면 개발, API 연동 모두 좋아합니다.다양한 직군과 협업하여 웹·앱 출시 경험이 있으며, 유학 경험을 바탕으로 글로벌 환경에서 원활한 커뮤니케이션이 가능합니다.",
  description:
    "1인분은 확실히 해내는 개발자입니다. 주어진 역할을 성실히 해내며, 혼자보다 함께 성장하는 과정을 소중히 여깁니다. \n이 끈기와 열정적인 태도로 더 나은 해결책과 더 나은 코드를 만드는 개발자가 되겠습니다.",
  location: "서울, 대한민국",
  goals:
    "개발자로서의 여정은 이제 시작입니다. 매일 새로운 것을 배우며 성장하는 과정에서 느끼는 설렘과 성취감이 저를 더욱 발전시키는 원동력 입니다. 함께 성장할 수 있는 팀에서 협업하며, 의미 있는 프로젝트를 만들어가고 싶습니다. 새로운 기회나 협업 제안이 있으시면 언제든 연락주세요!",
};

// 경력 정보
export const experiences: Experience[] = [
  {
    id: 1,
    period: "2025.11.9 ~ 2주",
    company: "(주)가디아 소프트",
    position:
      "중국 현지 기업 클라우드 형 전산 시스템 화면 개발 QA 및 통번역 프리랜서",
    description:
      "엑셀을 활용한 데이터 라벨링, 한/중 통번역 업무, 화면 테스트 QA 작성",
    achievements: "",
    type: "work",
  },
  {
    id: 2,
    period: "2025.03 ~ 2025.05",
    company: "스티치(STITCH)",
    position: "프론트엔드 개발 사원",
    description:
      "React 기반 파일 버전 관리, 드라이브 신규 기능 웹 개발 및 UI/UX 개선 프로젝트",
    achievements: "",
    type: "work",
  },
  {
    id: 3,
    period: "2024.08 ~ 2025.01",
    company: "(주) 세레머니",
    position: "프론트엔드 개발 사원",
    description:
      "레저 장소 추천 플랫폼 '마이레저' Webview기반 웹/앱 신규 기능 개발",
    achievements: "공공데이터 활용 공모전 장려상 수상",
    type: "work",
  },
  {
    id: 4,
    period: "2021.12 ~ 2022.03",
    company: "LG CNS",
    position: "재무 및 경영지원 인턴",
    description:
      "엑셀을 활용한 사무보조 업무, 제무제표 작성, 한/중 통번역 업무",
    achievements: "",
    type: "work",
  },
];

// 교육 정보
export const education: Education[] = [
  {
    id: 1,
    period: "2023.10 ~ 2024.03",
    institution: "이젠 아카데미",
    program: "UI/UX 웹 퍼블리셔 프론트엔드 양성과정 수료",
    achievement: "UI/UX 엔지니어 우수상 수상",
    description:
      "HTML, CSS, JavaScript, React, Figma 를 활용한 웹 개발 전문 과정",
  },
  {
    id: 2,
    period: "2018.08 ~ 2022.06",
    institution: "북경과학기술대학교",
    program: "국제경제무역학",
    achievement: "4년 장학생 졸업",
    description:
      "'중국 내 현대 자동차 마케팅 전략 분석' 논문 작성, 글로벌 비즈니스 환경 국제 무역 이론과 실무 경험",
  },
];

// 성과 지표
export const performanceIndicators: Achievement[] = [
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
      name: "Blog",
      url: "https://velog.io/@kimcode99/posts",
      icon: "NotebookPen",
      color: "#2dd4bf",
    },
  ],
};
