import "./App.css";
import Layout from "./components/layout/Layout";
import { useTheme } from "./context/ThemeContext";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Education from "./pages/eduction/Education";
import Project from "./pages/projects/Project";
import Techstack from "./pages/tech-stack/Techstack";
import WorkExperience from "./pages/works-Ex/WorkExperience";
import ScrollToTop from "react-scroll-to-top";
import MobileNav from "./components/mobileNav/MobileNav";

function App() {
  const [theme] = useTheme();
  return (
    <>
      <div id={theme}>
        <MobileNav />
        <Layout />
        <div className="container">
          <About />
          <Education />
          <Techstack />
          <Project />
          <WorkExperience />
          <Contact />
        </div>
        {/* <Tada> */}
        <div className="footer pb-3 d-flex justify-content-center align-item-center">
          <h5 className="ms-5">Made With ❤ Keshav Singh @ 2024</h5>
        </div>
        {/* </Tada> */}
      </div>
      <ScrollToTop
        color="#f29f67"
        smooth
        style={{ backgroundColor: "#1e1e2c", borderRadius: "80px" }}
      />
    </>
  );
}

export default App;
