import { motion } from "framer-motion";

const experiences = [
  {
    role: "Backend Developer – Freelance",
    company: "Freelance",
    duration: "Dec 2025 – Present · 2 mos",
    location: "Kolkata, West Bengal, India · Remote",
    points: [
      "Designed and implemented a Spring Boot–based microservice architecture for managing master and lookup data.",
      "Built REST APIs using GET and POST methods with soft-delete functionality (is_active flag).",
      "Implemented global exception handling using @ControllerAdvice.",
      "Integrated Hazelcast with Spring Cache to improve API performance.",
      "Designed clean layered architecture (Controller, Service, Repository, DTO, Entity).",
      "Configured PostgreSQL schemas and managed database integration using Spring Data JPA.",
      "Followed versioned API design (/api/v1) and context-path–based routing.",
      "Worked with Git and followed professional code structuring practices."
    ],
  },
  {
    role: "Summer Trainee",
    company: "Eastern Railway",
    duration: "Jul 2025 – Jul 2025 · 1 mo",
    location: "Kolkata, West Bengal, India · On-site",
    points: [
      "Worked with rule-based configuration systems to define and validate interlocking tables and route logic using Invensys Rail software.",
      "Assisted senior engineers in verifying control logic and validating safety constraints.",
      "Analyzed communication protocols, control sequences, and event logging mechanisms for system reliability and fault handling."
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="Experience"
      className="w-full bg-[#030014] px-[5%] md:px-[10%] py-20"
    >
      {/* SECTION HEADER */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
          Experience
        </h2>
        <p className="text-slate-400 mt-3 max-w-2xl mx-auto">
          My professional journey and hands-on experience in software engineering and systems.
        </p>
      </div>

      {/* TIMELINE */}
      <div className="relative max-w-4xl mx-auto">
        {/* vertical line */}
        <div className="absolute left-3 top-0 h-full w-[2px] bg-gradient-to-b from-indigo-500/60 to-purple-500/60" />

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative pl-14 mb-14"
          >
            {/* dot */}
            <div className="absolute left-[7px] top-2 w-3 h-3 rounded-full bg-purple-500 shadow-[0_0_12px_#a855f7]" />

            {/* CARD */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm hover:border-purple-500/40 transition">
              <h3 className="text-xl font-semibold text-white">
                {exp.role}
              </h3>

              <p className="text-purple-400 font-medium mt-1">
                {exp.company}
              </p>

              <p className="text-sm text-slate-400 mt-1">
                {exp.duration}
              </p>

              <p className="text-sm text-slate-500 mt-1">
                {exp.location}
              </p>

              <ul className="mt-4 space-y-2 text-slate-300 text-sm list-disc list-inside">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
