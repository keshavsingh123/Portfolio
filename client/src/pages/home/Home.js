import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import Resume from "../../Assets/Docs/keshav_singh_mern.pdf";
import { useTheme } from "../../context/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";
import { motion } from "framer-motion";
// import Fade from "react-reveal/Fade";

const Home = () => {
  const [theme, setTheme] = useTheme();
  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };
  // Animation variants
  const fadeVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const buttonVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.5 } },
  };
  return (
    <>
      <div className="container-fluid home-container" id="home">
        <div className="theme-btn" onClick={handleTheme}>
          {theme === "light" ? <FaMoon size={30} /> : <FaSun size={30} />}
        </div>
        <div className="container home-content">
          <motion.div variants={fadeVariant} initial="hidden" animate="visible">
            <h2>Hi 👋 I'M a</h2>
            <h1>
              <Typewriter
                options={{
                  strings: ["FullStack Developer !", "Mern Stack Developer !"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </motion.div>
          <motion.div
            className="home-btns"
            variants={buttonVariant}
            initial="hidden"
            animate="visible"
          >
            <div className="home-btns">
              <button className="btn btn-hire">Hire Me</button>
              <a className="btn btn-cv" href={Resume} download="keshav.pdf">
                my Resume
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Home;
