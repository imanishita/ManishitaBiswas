import React, { useEffect, useState, useCallback } from "react";
import { db, collection } from "../firebase";
import { getDocs } from "firebase/firestore";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";

import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import CardProject from "../components/CardProject";
import TechStackIcon from "../components/TechStackIcon";
import Certificate from "../components/Certificate";

import AOS from "aos";
import "aos/dist/aos.css";

import { Code, Award, Boxes } from "lucide-react";

/* ---------------- TOGGLE BUTTON ---------------- */

const ToggleButton = ({ onClick, isShowingMore }) => (
  <button
    onClick={onClick}
    className="mt-6 px-4 py-2 text-slate-300 hover:text-white text-sm
      bg-white/5 hover:bg-white/10 rounded-md border border-white/10
      transition-all"
  >
    {isShowingMore ? "See Less" : "See More"}
  </button>
);

/* ---------------- TAB PANEL ---------------- */

function TabPanel({ children, value, index }) {
  return value === index && (
    <Box sx={{ p: { xs: 1, sm: 3 } }}>
      <Typography component="div">{children}</Typography>
    </Box>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  value: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};

/* ---------------- TECH STACK ---------------- */

const techStacks = [
  { icon: "java.svg", language: "Java" },
  { icon: "Spring_Boot.svg.png", language: "Spring Boot" },
  { icon: "postgresql.png", language: "PostgreSQL" },
  { icon: "mysql.svg", language: "MySQL" },
  { icon: "mongodb.png", language: "MongoDB" },
  { icon: "python.svg", language: "Python" },
  { icon: "reactjs.svg", language: "React" },
  { icon: "tailwind.svg", language: "Tailwind CSS" },
  { icon: "javascript.svg", language: "JavaScript" },
  { icon: "html.svg", language: "HTML" },
  { icon: "css.svg", language: "CSS" },
  { icon: "firebase.svg", language: "Firebase" },
  { icon: "aws.svg", language: "AWS" },
  { icon: "git.png", language: "Git" },
  { icon: "docker.svg", language: "Docker" },
];

/* ================= MAIN COMPONENT ================= */

export default function Portofolio() {
  const [value, setValue] = useState(0);
  const [projects, setProjects] = useState([]);
  const [certificates, setCertificates] = useState([]);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showAllCertificates, setShowAllCertificates] = useState(false);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const initialItems = isMobile ? 4 : 6;

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  const fetchData = useCallback(async () => {
    try {
      const projectSnapshot = await getDocs(collection(db, "projects"));
      const certificateSnapshot = await getDocs(collection(db, "certificates"));

      const projectData = projectSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));

      const certificateData = certificateSnapshot.docs.map(doc => doc.data());

      setProjects(projectData);
      setCertificates(certificateData);

      // 🔑 SOURCE OF TRUTH for About page stats
      localStorage.setItem("projects", JSON.stringify(projectData));
      localStorage.setItem("certificates", JSON.stringify(certificateData));
    } catch (err) {
      console.error("Error fetching portfolio data:", err);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <section id="Portofolio" className="px-[5%] md:px-[10%] bg-[#030014] py-20">
      
      {/* HEADER */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r
          from-indigo-500 to-purple-500 text-transparent bg-clip-text">
          My Work
        </h2>
        <p className="text-slate-400 mt-2 max-w-2xl mx-auto">
          Projects, certifications, and the technologies I work with.
        </p>
      </div>

      {/* TABS */}
      <AppBar position="static" elevation={0} sx={{ bgcolor: "transparent" }}>
        <Tabs
          value={value}
          onChange={(e, v) => setValue(v)}
          variant="fullWidth"
          sx={{
            "& .MuiTab-root": {
              color: "#94a3b8",
              fontWeight: 600,
              borderRadius: "12px",
              transition: "0.3s",
              "&.Mui-selected": {
                color: "#fff",
                background:
                  "linear-gradient(135deg, rgba(99,102,241,0.25), rgba(168,85,247,0.25))",
              },
            },
            "& .MuiTabs-indicator": { display: "none" },
          }}
        >
          <Tab icon={<Code />} label="Projects" />
          <Tab icon={<Award />} label="Certificates" />
          <Tab icon={<Boxes />} label="Tech Stack" />
        </Tabs>
      </AppBar>

      {/* TAB CONTENT */}
      <AnimatePresence mode="wait">
        <motion.div
          key={value}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
        >
          {/* PROJECTS */}
          <TabPanel value={value} index={0}>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {(showAllProjects ? projects : projects.slice(0, initialItems))
                .map((p, i) => <CardProject key={i} {...p} />)}
            </div>
            {projects.length > initialItems && (
              <ToggleButton
                onClick={() => setShowAllProjects(!showAllProjects)}
                isShowingMore={showAllProjects}
              />
            )}
          </TabPanel>

          {/* CERTIFICATES */}
          <TabPanel value={value} index={1}>
            <div className="grid md:grid-cols-3 gap-5">
              {(showAllCertificates ? certificates : certificates.slice(0, initialItems))
                .map((c, i) => <Certificate key={i} ImgSertif={c.Img} />)}
            </div>
            {certificates.length > initialItems && (
              <ToggleButton
                onClick={() => setShowAllCertificates(!showAllCertificates)}
                isShowingMore={showAllCertificates}
              />
            )}
          </TabPanel>

          {/* TECH STACK */}
          <TabPanel value={value} index={2}>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {techStacks.map((t, i) => (
                <TechStackIcon key={i} TechStackIcon={t.icon} Language={t.language} />
              ))}
            </div>
          </TabPanel>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
