import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Container from "@/components/layout/Container";
import Card from "@/components/ui/Card";
import {
  achievements,
  education,
  experiences,
  personalInfo,
} from "@/constants/personals";

// Timeline 아이템 통합 타입
interface TimelineItem {
  id: number;
  title: string;
  subtitle: string;
  period: string;
  description: string;
  type: "work" | "education";
}

const AboutSection = () => {
  // 경력과 교육을 통합한 타임라인 생성
  const timeline: TimelineItem[] = [
    ...experiences.map((exp) => ({
      id: exp.id,
      title: exp.position,
      subtitle: exp.company,
      period: exp.period,
      description: exp.description,
      type: "work" as const,
    })),
    ...education.map((edu) => ({
      id: edu.id + 100, // ID 중복 방지
      title: edu.program,
      subtitle: edu.institution,
      period: edu.period,
      description: edu.description || "",
      type: "education" as const,
    })),
  ].sort((a, b) => {
    // 최신순으로 정렬 (2025가 2024보다 먼저)
    const getYear = (period: string) => {
      const match = period.match(/(\d{4})/g);
      return match ? Math.max(...match.map(Number)) : 0;
    };
    return getYear(b.period) - getYear(a.period);
  });

  return (
    <Container className="py-24">
      <SectionHeading
        id="about"
        title="About Me"
        className="text-center text-gray-900 dark:text-gray-100"
      />

      {/* 프로필 카드 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <Card className="p-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* 프로필 이미지/이니셜 */}
            <div
              className="w-24 h-24 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 
                            flex items-center justify-center text-white text-2xl font-bold flex-shrink-0"
            >
              <img
                className="rounded-full"
                src="/src/assets/imgs/my-notion-face-portrait.png"
                alt="프로필 이미지"
              />
            </div>

            {/* 기본 정보 */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                {personalInfo.name}
              </h3>
              <p className="text-primary-500 font-medium mb-1">
                {personalInfo.title}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                {personalInfo.birth}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {personalInfo.email}
              </p>
            </div>
          </div>

          {/* 소개글 */}
          <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-800">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {personalInfo.description}
            </p>
          </div>
        </Card>
      </motion.div>

      {/* 성과 지표 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
      >
        {achievements.map((achievement, index) => (
          <motion.div
            key={achievement.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="text-3xl font-bold text-primary-500 mb-2">
                {achievement.value}
                {achievement.suffix}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {achievement.label}
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* 타임라인 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-8 text-center">
          Experience & Education
        </h3>

        <div className="relative">
          {/* 타임라인 선 */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-secondary-500" />

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <motion.div
                key={`${item.type}-${item.id}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-12"
              >
                {/* 타임라인 점 */}
                <div
                  className="absolute left-2 top-2 w-4 h-4 bg-primary-500 rounded-full 
                               shadow-lg border-2 border-white dark:border-gray-900"
                />

                <Card className="p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3">
                    <Clock
                      size={18}
                      className="text-primary-500 mt-1 flex-shrink-0"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
                        {item.title}
                      </h4>
                      <p className="text-primary-500 font-medium text-sm mb-1">
                        {item.subtitle}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                        {item.period}
                      </p>
                      {item.description && (
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </Container>
  );
};

export default AboutSection;
