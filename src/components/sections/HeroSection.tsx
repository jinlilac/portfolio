// src/components/sections/HeroSection.tsx
import { useState } from "react";
import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import { useTypewriter } from "@/hooks/useTypewriter";
import { Github, Mail } from "lucide-react";
import { personalInfo } from "@/constants/personals";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  // 타이핑 애니메이션 훅
  const { text } = useTypewriter({
    words: [personalInfo.subtitle],
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 2000,
  });

  // 파티클 배열
  const [particles] = useState(
    Array.from({ length: 50 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 3 + Math.random() * 2,
      size: Math.random() * 4 + 2,
    }))
  );

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-gray-50 dark:bg-gray-900"
    >
      {/* 배경 그라데이션 + 파티클 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-secondary-500/10" />
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute bg-primary-400 rounded-full"
            style={{
              width: p.size,
              height: p.size,
              left: `${p.x}%`,
              top: `${p.y}%`,
            }}
            animate={{
              y: ["0%", "20%", "0%"],
              opacity: [0.3, 0.8, 0.3],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
            }}
          />
        ))}
      </div>

      <Container className="relative z-10 text-center space-y-6">
        <motion.h1
          className="text-4xl md:text-6xl md:leading-[1.2] font-extrabold text-gray-900 dark:text-gray-100"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          사용자 접근성을 최우선으로 하는, <br />
          <span className="gradient-text text-primary-500">
            프론트엔드 개발자 {personalInfo.name}
          </span>
          입니다.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <span className="text-xl md:text-2xl font-medium text-primary-400">
            {text}
          </span>
          <span className="animate-blink text-xl md:text-2xl font-medium text-primary-400">
            |
          </span>
        </motion.div>

        <motion.p
          className="max-w-xl mx-auto text-lg text-gray-700 dark:text-gray-300"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {personalInfo.introduction}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <button
            onClick={() => navigate("/projects")}
            className="inline-flex items-center px-6 py-3 bg-primary-500 text-white rounded-lg shadow hover:bg-primary-600 transition"
          >
            프로젝트 보기
          </button>
          <button
            onClick={() => navigate("/contact")}
            className="inline-flex items-center px-6 py-3 border-2 border-primary-500 text-primary-500 rounded-lg hover:bg-primary-500 hover:text-white transition"
          >
            연락하기
            <Mail className="ml-2" size={20} />
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex justify-center gap-6"
        >
          <a
            href="https://github.com/jinlilac"
            target="_blank"
            rel="noopener"
            aria-label="GitHub"
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-primary-500 hover:text-white transition"
          >
            <Github size={24} />
          </a>
          <a
            href={`mailto:${personalInfo.email}?subject=문의&body=안녕하세요!`}
            aria-label="Email"
            rel="noopener noreferrer"
            target="_self"
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-primary-500 hover:text-white transition"
          >
            <Mail size={24} />
          </a>
        </motion.div>
      </Container>
    </section>
  );
};

export default HeroSection;
