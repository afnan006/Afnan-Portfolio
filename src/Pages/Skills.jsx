import React from "react";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TechStackIcon from "../components/TechStackIcon";
import AOS from "aos";
import "aos/dist/aos.css";

const techStacks = [
  { icon: "python.svg", language: "Python" },
  { icon: "mysql.svg", language: "MySQL" },
  { icon: "django.svg", language: "Django" },
  { icon: "flask.svg", language: "Flask" },
  { icon: "reactjs.svg", language: "React" },
  { icon: "javascript.svg", language: "JavaScript" },
  { icon: "html.svg", language: "HTML" },
  { icon: "css.svg", language: "CSS" },
  { icon: "restapi.svg", language: "RESTful API" },
  { icon: "postgresql.svg", language: "PostgreSQL" },
  { icon: "github.svg", language: "GitHub" },
  { icon: "firebase.svg", language: "Firebase" },
  { icon: "netlify.svg", language: "Netlify" },
  { icon: "postman.svg", language: "Postman" },
  { icon: "linux.svg", language: "Linux" },
  { icon: "pandas.svg", language: "Pandas" },
  { icon: "numpy.svg", language: "NumPy" },
  { icon: "matplotlib.svg", language: "Matplotlib" },
];

export default function Skills() {
  const theme = useTheme();

  React.useEffect(() => {
    // Initialize AOS once
    AOS.init({
      once: false, // This will make animations occur only once
    });
  }, []);

  return (
    <div className="md:px-[10%] px-[5%] w-full sm:mt-0 mt-[3rem] bg-[#030014] overflow-hidden" id="Skills">
      {/* Header section */}
      <div className="text-center pb-10" data-aos="fade-up" data-aos-duration="1000">
        <h2 className="inline-block text-3xl md:text-5xl font-bold text-center mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
          <span
            style={{
              color: "#6366f1",
              backgroundImage: "linear-gradient(45deg, #6366f1 10%, #a855f7 93%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Skills
          </span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base mt-2">
          Here are the technologies and tools I work with to bring ideas to life. Each icon represents a skill I've mastered and applied in real-world projects.
        </p>
      </div>

      {/* Tech Stack Grid */}
      <Box sx={{ width: "100%" }}>
        <div className="container mx-auto flex justify-center items-center overflow-hidden pb-[5%]">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:gap-8 gap-5">
            {techStacks.map((stack, index) => (
              <div
                key={index}
                data-aos={index % 3 === 0 ? "fade-up-right" : index % 3 === 1 ? "fade-up" : "fade-up-left"}
                data-aos-duration={index % 3 === 0 ? "1000" : index % 3 === 1 ? "1200" : "1000"}
              >
                <TechStackIcon TechStackIcon={stack.icon} Language={stack.language} />
              </div>
            ))}
          </div>
        </div>
      </Box>
    </div>
  );
}