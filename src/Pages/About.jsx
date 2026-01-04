import React, { useEffect, memo, useMemo } from "react";
import { FileText, Code, Award, GraduationCap, Sparkles } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

/* ---------------- HEADER ---------------- */

const Header = memo(() => (
  <div className="text-center mb-14 px-[5%]">
    <h2
      className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]"
      data-aos="fade-up"
    >
      About Me
    </h2>
    <p
      className="mt-3 text-gray-400 max-w-2xl mx-auto flex items-center justify-center gap-2"
      data-aos="fade-up"
      data-aos-delay="150"
    >
      <Sparkles className="w-5 h-5 text-purple-400" />
      Engineer by skill, builder by mindset
      <Sparkles className="w-5 h-5 text-purple-400" />
    </p>
  </div>
));

/* ---------------- PROFILE IMAGE (UNCHANGED) ---------------- */

const ProfileImage = memo(() => (
  <div className="flex justify-end items-center sm:p-12 p-0">
    <div className="relative group" data-aos="fade-left">
      <div className="absolute -inset-6 opacity-[25%] z-0 hidden sm:block">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-indigo-500 to-purple-600 rounded-full blur-2xl animate-spin-slower" />
        <div className="absolute inset-0 bg-gradient-to-l from-fuchsia-500 via-rose-500 to-pink-600 rounded-full blur-2xl opacity-50 animate-pulse-slow" />
      </div>

      <div className="relative">
        <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-[0_0_40px_rgba(120,119,198,0.3)] transition-transform duration-700 group-hover:scale-105">
          <div className="absolute inset-0 border-4 border-white/20 rounded-full z-20 group-hover:border-white/40 transition-all" />
          <img
            src="/Photo.png"
            alt="Profile"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>
      </div>
    </div>
  </div>
));

/* ---------------- STAT CARD ---------------- */

const StatCard = memo(({ icon: Icon, value, label, description, animation }) => (
  <div data-aos={animation}>
    <div className="bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:scale-[1.03] transition-all duration-300 h-full">
      <div className="flex items-center justify-between mb-4">
        <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center">
          <Icon className="w-7 h-7 text-white" />
        </div>
        <span className="text-4xl font-bold text-white">{value}</span>
      </div>
      <p className="text-sm uppercase tracking-wider text-gray-300 mb-1">
        {label}
      </p>
      <p className="text-xs text-gray-400">{description}</p>
    </div>
  </div>
));

/* ---------------- MAIN ABOUT PAGE ---------------- */

const AboutPage = () => {
  const { totalProjects, totalCertificates } = useMemo(() => {
    const projects = JSON.parse(localStorage.getItem("projects") || "[]");
    const certs = JSON.parse(localStorage.getItem("certificates") || "[]");
    return { totalProjects: projects.length, totalCertificates: certs.length };
  }, []);

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <section
      id="About"
      className="text-white px-[5%] lg:px-[10%] pb-[10%]"
    >
      <Header />

      {/* TOP GRID */}
      <div className="grid lg:grid-cols-2 gap-14 items-center">
        {/* LEFT CONTENT */}
        <div className="space-y-6" data-aos="fade-right">
          <h3 className="text-3xl sm:text-4xl font-bold">
            Hello, I’m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
              Manishita Biswas
            </span>
          </h3>

          {/* TECH-FOCUSED INTRO */}
          <p className="text-gray-400 leading-relaxed text-justify">
            I’m a <span className="text-white">full-stack developer</span> with
            strong foundations in backend engineering and modern frontend
            frameworks. I enjoy designing scalable APIs, building clean system
            architectures, and crafting intuitive user experiences.
          </p>

          <p className="text-gray-400 leading-relaxed text-justify">
            My core strengths include <span className="text-white">Spring Boot microservices</span>,
            REST API design, database modeling, and React-based interfaces. I
            focus on writing maintainable, production-ready code that scales
            well and stays readable.
          </p>

          {/* EDUCATION BLOCK */}
          <div
            className="mt-6 p-5 rounded-xl bg-white/5 border border-white/10"
            data-aos="fade-up"
          >
            <div className="flex items-center gap-3 mb-2">
              <GraduationCap className="w-5 h-5 text-purple-400" />
              <h4 className="text-lg font-semibold">Education</h4>
            </div>
            <p className="text-gray-300 text-sm">
              <span className="font-medium text-white">
                B.Tech in Electronics & Communication Engineering
              </span>
              <br />
              University of Calcutta (Institute of Radio Physics and Electronics)
            </p>
          </div>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="https://drive.google.com/drive/folders/1zFq4Ax90TUKBA6TQeMcSSaqmEhXu2_oO"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#6366f1] to-[#a855f7] hover:scale-105 transition-all flex items-center gap-2">
                <FileText className="w-4 h-4" /> Download CV
              </button>
            </a>

            <a href="#Portofolio">
              <button className="px-6 py-3 rounded-lg border border-[#a855f7]/50 text-[#a855f7] hover:bg-[#a855f7]/10 transition-all flex items-center gap-2">
                <Code className="w-4 h-4" /> View Projects
              </button>
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <ProfileImage />
      </div>

      {/* STATS */}
      <div className="grid md:grid-cols-2 gap-6 mt-20">
        <StatCard
          icon={Code}
          value={totalProjects}
          label="Projects"
          description="Production-ready applications & systems"
          animation="fade-up"
        />
        <StatCard
          icon={Award}
          value={totalCertificates}
          label="Certificates"
          description="Validated technical expertise"
          animation="fade-up"
        />
      </div>
    </section>
  );
};

export default memo(AboutPage);
