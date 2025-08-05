// 개인 정보 타입
export interface PersonalInfo {
  name: string;
  birth: string;
  email: string;
  title: string;
  subtitle: string;
  introduction: string;
  description: string;
  avatar?: string;
  location?: string;
  phone?: string;
  goals?: string;
}

// 경력 정보 타입
export interface Experience {
  id: number;
  period: string;
  company: string;
  position: string;
  description: string;
  achievements?: string[];
  type: "work" | "education";
}

// 교육 정보 타입
export interface Education {
  id: number;
  period: string;
  institution: string;
  program: string;
  achievement?: string;
  description?: string;
}

// 스킬 타입
export interface Skill {
  name: string;
  level: number; // 0-100
  category:
    | "frontend"
    | "styling"
    | "stateManagement"
    | "tools"
    | "backend"
    | "design";
  icon?: string;
  description?: string;
}

// 프로젝트 타입
export interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  period: string;
  contribution: string;
  tech: string[];
  features: string[];
  images?: string[];
  thumbnail?: string;
  liveDemo?: string;
  github?: string;
  category: string;
  status: "completed" | "in-progress" | "planned";
  highlights?: string[];
}

// 소셜 링크 타입
export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  color?: string;
}

// 연락처 정보 타입
export interface ContactInfo {
  email: string;
  phone?: string;
  location?: string;
  socialLinks: SocialLink[];
}

// 성과 지표 타입
export interface Achievement {
  label: string;
  value: number | string;
  suffix?: string;
  description?: string;
}

// 테마 타입
export type Theme = "light" | "dark";

// 페이지 메타데이터 타입
export interface PageMeta {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  canonical?: string;
}

// 네비게이션 아이템 타입
export interface NavItem {
  id: string;
  label: string;
  href: string;
  icon?: string;
}

// 폼 데이터 타입
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// API 응답 타입
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// 애니메이션 설정 타입
export interface AnimationConfig {
  duration: number;
  delay?: number;
  easing?: string;
  direction?: "up" | "down" | "left" | "right" | "fade";
}

// 컴포넌트 기본 props 타입
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
  id?: string;
  "aria-label"?: string;
  "aria-labelledby"?: string;
  "aria-describedby"?: string;
}
