import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

import "./Menu.css";
import {
  FcHome,
  FcAbout,
  FcGraduationCap,
  FcBiotech,
  FcContacts,
  FcDocument,
} from "react-icons/fc";
import { MdWork } from "react-icons/md";
const Menu = ({ toggle }) => {
  // Animation variants
  const fadeVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };
  return (
    <>
      {toggle ? (
        <>
          {/* <Zoom> */}
          <div className="navbar-profile-pic">
            <img
              src="https://avatars.githubusercontent.com/u/61233273?v=4"
              alt="profile-pic"
            />
          </div>
          {/* </Zoom> */}
          <motion.div variants={fadeVariant} initial="hidden" animate="visible">
            <div className="nav-items">
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcHome />
                    Home
                  </Link>
                </div>
                <div className="nav-link">
                  <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcAbout />
                    About
                  </Link>
                </div>
                <div className="nav-link">
                  <Link
                    to="education"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcGraduationCap />
                    Education
                  </Link>
                </div>

                <div className="nav-link">
                  <Link
                    to="tech-stack"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcBiotech />
                    Tech Stack
                  </Link>
                </div>

                <div className="nav-link">
                  <Link
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcDocument />
                    Projects
                  </Link>
                </div>
                <div className="nav-link">
                  <Link
                    to="work-exp"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <MdWork />
                    Work Experience
                  </Link>
                </div>
                <div className="nav-link">
                  <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcContacts />
                    contact
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      ) : (
        <div className="nav-items">
          <div className="nav-item">
            <div className="nav-link">
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <FcHome />
              </Link>
            </div>
            <div className="nav-link">
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <FcAbout />
              </Link>
            </div>
            <div className="nav-link">
              <Link
                to="education"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <FcGraduationCap />
              </Link>
            </div>

            <div className="nav-link">
              <Link
                to="tech-stack"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <FcBiotech />
              </Link>
            </div>

            <div className="nav-link">
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <FcDocument />
              </Link>
            </div>
            <div className="nav-link">
              <Link
                to="work-exp"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <MdWork />
              </Link>
            </div>
            <div className="nav-link">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <FcContacts />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Menu;
