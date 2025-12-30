import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Container from "@/components/layout/Container";
import { skillsByCategory, categoryLabels } from "@/constants/skills";

type CategoryKey = keyof typeof categoryLabels;

const ReSkillsSection = () => {
  const categories = Object.keys(categoryLabels) as CategoryKey[];
  const [activeTab, setActiveTab] = useState<CategoryKey>(categories[0]);

  const activeSkills = skillsByCategory[activeTab];

  return (
    <section
      id="skills"
      className="min-h-screen bg-slate-50 dark:bg-slate-900 py-20"
    >
      <Container className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              {/* Skills & */}
              Tech Stack
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              실무 경험과 지속적인 학습을 통해 기술 트렌드를 학습하고 적용하고
              있습니다
            </p>
          </motion.div>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white dark:bg-slate-800 rounded-2xl p-2 shadow-lg border border-slate-200 dark:border-slate-700">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`relative px-6 py-3 text-sm font-semibold rounded-xl transition-all duration-300 whitespace-nowrap min-w-[120px] ${
                  activeTab === category
                    ? "text-white shadow-lg"
                    : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-700"
                }`}
              >
                {activeTab === category && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <span className="text-base">{getCategoryIcon(category)}</span>
                  {categoryLabels[category]}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {activeSkills.map((skill, idx) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: idx * 0.08,
                    ease: "easeOut",
                  }}
                  className="group relative bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-xl border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-500 transition-all duration-300 hover:-translate-y-2"
                >
                  {/* Skill Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <span className="text-xl font-bold text-blue-600 dark:text-blue-400">
                          {getSkillIcon(skill.name)}
                        </span>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {skill.name}
                        </h4>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                          {getExperienceYears(skill.level)} 경험
                        </p>
                      </div>
                    </div>
                    <div
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${getSkillLevelBadge(skill.level)}`}
                    >
                      {getSkillLevelText(skill.level)}
                    </div>
                  </div>

                  {/* Skill Description */}
                  <p className="text-sm text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                    {getSkillDescription(skill.name)}
                  </p>

                  {/* Proficiency Level */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                        숙련도
                      </span>
                      <span className="text-sm font-bold text-slate-900 dark:text-white">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="relative h-3 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                      <motion.div
                        className={`absolute top-0 left-0 h-full rounded-full ${getProgressColor(skill.level)}`}
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{
                          duration: 1.2,
                          delay: idx * 0.1 + 0.3,
                          ease: "easeOut",
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
                    </div>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  );
};

// Enhanced Helper Functions
function getCategoryIcon(category: CategoryKey): string {
  const iconMap: Record<CategoryKey, string> = {
    frontend: "💻",
    backend: "📊",
    styling: "🎨",
    stateManagement: "🔄",
    tools: "🛠️",
  };
  return iconMap[category]; // 모든 CategoryKey가 보장됨
}

function getSkillIcon(skillName: string): string {
  const icons: Record<string, string> = {
    React: "⚛️",
    TypeScript: "TS",
    JavaScript: "JS",
    "Next.js": "▲",
    "Vue.js": "V",
    HTML5: "H5",
    CSS3: "C3",
    TailwindCSS: "🌊",
    "Styled Components": "💎",
    Sass: "🎨",
    "Node.js": "V8",
    Python: "🐍",
    Java: "☕",
    Spring: "🍃",
    Express: "🚀",
    Vite: "⚡",
    MongoDB: "🍃",
    Supabase: "🐘",
    MySQL: "🗄️",
    Recoil: "🟢",
    Zustand: "⚡️",
    "React Query": "🔷",
    Git: "🌳",
    Docker: "🐳",
    AWS: "☁️",
    Vercel: "▲",
    Figma: "🎨",
    Photoshop: "PS",
    Webpack: "💎",
  };
  return icons[skillName] || "💻";
}

function getSkillLevelBadge(level: number): string {
  if (level >= 85)
    return "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300";
  if (level >= 70)
    return "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300";
  if (level >= 50)
    return "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300";
  return "bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300";
}

function getSkillLevelText(level: number): string {
  if (level >= 85) return "전문가";
  if (level >= 70) return "고급";
  if (level >= 50) return "중급";
  return "초급";
}

function getProgressColor(level: number): string {
  if (level >= 85) return "bg-gradient-to-r from-emerald-500 to-teal-500";
  if (level >= 70) return "bg-gradient-to-r from-blue-500 to-indigo-500";
  if (level >= 50) return "bg-gradient-to-r from-amber-400 to-orange-500";
  return "bg-gradient-to-r from-slate-400 to-slate-500";
}

function getSkillDescription(skillName: string): string {
  const descriptions: Record<string, string> = {
    React:
      "컴포넌트 재사용성과 상태 관리 흐름을 최적화하여, ‘마이레저’, ‘House-Connect’ 의 코드 중복을 30% 줄이고 리렌더링 효율 및 확장성을 높임",
    TypeScript:
      "API 타입 가드를 적용해 런타임 오류를 예방하고 안정적인 데이터 렌더링 구현",
    JavaScript:
      "모던 ES6+ 문법과 비동기 프로그래밍을 활용한 인터랙티브 웹 개발",
    "Next.js": "SSR/SSG 최적화와 성능 향상을 위한 풀스택 React 프레임워크 활용",
    // 🎨 스타일링 & 마크업
    HTML5: "시맨틱 마크업과 웹 표준을 준수한 접근성 높은 웹 구조 설계",
    CSS3: "Grid, Flexbox와 애니메이션을 활용한 반응형 레이아웃 및 인터랙션 구현",
    "Styled Components":
      "컴포넌트별 스타일을 모듈화하여 재사용 가능한 스타일 시스템을 구축해, 디자인 수정 시 코드 일관성과 유지보수 효율 높은 구현에 강점",
    "Tailwind CSS":
      "유틸리티 클래스 기반 스타일링으로 일관성 있고 반응형 UI의 디자인 시스템 구축, 재사용 가능한 컴포넌트 스타일 구축에 강점",
    "Sass/SCSS": "변수와 믹스인을 활용한 모듈화된 CSS 아키텍처 설계",
    // ⚡ 상태 관리
    Recoil:
      "로그인·검색·필터링 등 복잡한 사용자 상태를 원자(atom) 단위로 관리하여, 페이지 이동 시에도 상태 일관성을 유지하도록 설계",
    Zustand:
      "‘드라이브 리뉴얼’ 프로젝트에서 파일 복수 선택 로직을 설계 시 미들웨어(persist, devtools)와 selector 기반 최적화를 활용해, 가볍고 직관적인 상태 관리 구현",
    "React Query":
      "REST API 기반 데이터 페칭 로직을 캐싱·동기화 중심 구조로 최적화해 API 호출 횟수를 40% 절감하고 로딩 경험 개선",

    // 🛠 빌드 도구
    Vite: "'마이레저' 초기 세팅에서 Vite를 적용해 HMR 속도를 높이고, 빌드 시간 10% 절감",
    Webpack: "모듈 번들링과 코드 스플리팅을 통한 최적화된 빌드 파이프라인 구성",

    // 🎨 디자인 도구
    Photoshop:
      "UI/UX 디자인과 이미지 최적화를 통한 웹 에셋 제작 및 브랜딩 작업",
    Illustrator:
      "벡터 기반 로고 디자인과 아이콘 제작으로 일관된 비주얼 아이덴티티 구축",

    Git: "PR 리뷰 프로세스를 도입해 코드 품질을 높이고 팀 피드백 주기를 2배 단축",
    Docker: "컨테이너 기반 개발 환경 구축과 일관된 배포 파이프라인 구현",
    AWS: "클라우드 인프라 설계와 서버리스 아키텍처를 통한 확장 가능한 서비스 구축",
    Figma:
      "디자인 시스템 구축과 개발자 핸드오프를 통한 효율적인 UI/UX 협업 주도",
    "Node.js":
      "Express 서버에서 GET, POST, PUT, DELETE 처리 등 자바스크립트로 백엔드 구현",
    Supabase:
      "포트폴리오, House-connect 프로젝트에 적용, Cors 설정으로 보안 강화",
  };
  return (
    descriptions[skillName] ||
    "실무 프로젝트를 통해 검증된 전문 기술 역량과 지속적인 학습으로 발전"
  );
}

function getExperienceYears(level: number): string {
  if (level >= 85) return "2년+";
  if (level >= 70) return "1년";
  if (level >= 50) return "6개월+";
  return "6개월";
}

export default ReSkillsSection;
