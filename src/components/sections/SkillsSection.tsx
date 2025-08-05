// src/components/sections/SkillsSection.tsx
import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import SectionHeading from "./SectionHeading";
import { skillsByCategory, categoryLabels } from "@/constants/skills";

type CategoryKey = keyof typeof categoryLabels;

const SkillsSection = () => (
  <section id="skills" className="py-24 bg-gray-50 dark:bg-gray-900">
    <Container>
      <SectionHeading
        id="skills"
        title="Skills"
        className="text-center text-gray-900 dark:text-gray-100"
      />

      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 mt-12">
        {(Object.keys(skillsByCategory) as CategoryKey[]).map((key, idx) => {
          const skills = skillsByCategory[key];
          return (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow"
            >
              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
                {categoryLabels[key]}
              </h3>
              <ul className="space-y-4">
                {skills.map((skill) => (
                  <li key={skill.name}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded overflow-hidden">
                      <motion.div
                        className="h-full bg-primary-500"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </Container>
  </section>
);

export default SkillsSection;
