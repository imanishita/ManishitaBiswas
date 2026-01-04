import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

/* ---------------- BACKGROUND ---------------- */

const BackgroundEffect = () => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 blur-3xl animate-pulse" />
    <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/10 via-transparent to-purple-600/10 blur-2xl animate-float" />
  </div>
);

/* ---------------- STATUS LINE ---------------- */

const OpportunityLine = () => (
  <div
    data-aos="fade-up"
    data-aos-delay="300"
    className="relative inline-flex items-center gap-3 px-6 py-3 rounded-full 
               bg-white/5 backdrop-blur-xl border border-white/10"
  >
    <span className="relative flex h-2.5 w-2.5">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-70"></span>
      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-indigo-400"></span>
    </span>

    <span className="text-sm sm:text-base text-gray-200 tracking-wide">
      Full-time • Freelance • Collaborations
    </span>
  </div>
);

/* ---------------- MAIN SCREEN ---------------- */

const WelcomeScreen = ({ onLoadingComplete }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
    });

    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => onLoadingComplete?.(), 700);
    }, 3600);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-50 bg-[#030014]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.05,
            filter: "blur(10px)",
            transition: { duration: 0.8, ease: "easeInOut" },
          }}
        >
          <BackgroundEffect />

          <div className="relative min-h-screen flex items-center justify-center px-4">
            <div className="w-full max-w-4xl mx-auto text-center space-y-10">

              {/* WELCOME TEXT */}
              <div data-aos="fade-up">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                  <span className="block bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
                    Welcome • স্বাগতম • स्वागत है
                  </span>
                  <span className="block mt-2 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    Bienvenue • Bienvenido
                  </span>
                </h1>

                <p className="mt-4 text-sm sm:text-base text-gray-400 tracking-wide">
                  Open to opportunities
                </p>
              </div>

              {/* STATUS */}
              <OpportunityLine />

            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeScreen;
