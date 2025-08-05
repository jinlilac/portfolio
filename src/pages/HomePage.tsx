import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import HeroSection from "@/components/sections/HeroSection";
import ProjectsSection from "@/components/sections/ProjectSection";
import SkillsSection from "@/components/sections/SkillsSection";
import { Helmet } from "react-helmet-async";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>김수현 - Frontend Developer Portfolio</title>
        <meta
          name="description"
          content="React, TypeScript 전문 프론트엔드 개발자 김수현의 포트폴리오입니다. 혁신적인 웹 경험을 만들어갑니다."
        />
        <meta
          name="keywords"
          content="프론트엔드, React, TypeScript, 개발자, 포트폴리오, 웹개발, 김수현"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="김수현 - Frontend Developer Portfolio"
        />
        <meta
          property="og:description"
          content="React, TypeScript 전문 프론트엔드 개발자의 포트폴리오"
        />
        <meta
          property="og:url"
          content="https://portfolio-coduit-projects.vercel.app/"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="김수현 - Frontend Developer Portfolio"
        />
        <meta
          name="twitter:description"
          content="React, TypeScript 전문 프론트엔드 개발자"
        />

        <link
          rel="canonical"
          href="https://portfolio-coduit-projects.vercel.app/"
        />
      </Helmet>

      <div className="space-y-0">
        {/* Hero Section */}
        <section id="home" aria-labelledby="hero-heading">
          <HeroSection />
        </section>

        {/* About Section */}
        <section id="about" aria-labelledby="about-heading">
          <AboutSection />
        </section>

        {/* Skills Section */}
        <section id="skills" aria-labelledby="skills-heading">
          <SkillsSection />
        </section>

        {/* Projects Section */}
        <section id="projects" aria-labelledby="projects-heading">
          <ProjectsSection />
        </section>

        {/* Contact Section */}
        <section id="contact" aria-labelledby="contact-heading">
          <ContactSection />
        </section>
      </div>
    </>
  );
};

export default HomePage;
