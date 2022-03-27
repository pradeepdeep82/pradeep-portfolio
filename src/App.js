import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CodeIcon from "@mui/icons-material/Code";
import HandymanIcon from "@mui/icons-material/Handyman";
import SchoolIcon from "@mui/icons-material/School";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import AOS from "aos";
import { ContactMe } from "./ContactMe";
import { Footer } from "./Footer";
import { MyEducation } from "./MyEducation";
import { ProjectWork } from "./ProjectWork";
import { MySkills } from "./MySkills";
import { HashLink as Link } from "react-router-hash-link";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

AOS.init();

function App() {
  return (
    <div className="Container-fluid">
      <div className="aboutMe" id="#">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark navBar">
          <div style={{ marginLeft: "3vw" }}>
            <span className="name">Pradeep Ganapathi</span>
            <p style={{ color: "#3b82f6" }}>Full Stack Web Developer</p>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse menu"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              {/* <Link path="/skills" style={{color:"whitesmoke", textDecoration:"none"}}><div className="menuData">
              <HandymanIcon />
                <span> Skills</span>
              </div></Link> */}
              <Link
                smooth
                to={"#skills"}
                style={{ color: "whitesmoke", textDecoration: "none" }}
                className="menuData"
              >
                <HandymanIcon />
                <span> Skills</span>
              </Link>
              <Link
                smooth
                to={"#projects"}
                style={{ color: "whitesmoke", textDecoration: "none" }}
                className="menuData"
              >
                <CodeIcon />
                <span> Projects</span>
              </Link>
              <Link
                smooth
                to={"#education"}
                style={{ color: "whitesmoke", textDecoration: "none" }}
                className="menuData"
              >
                <SchoolIcon />
                <span>Education</span>
              </Link>
              
                <a
                  href="https://drive.google.com/file/d/1wuZHwFv7SCpXPlLubl2sFGF7wCKWRKIK/view?usp=sharing"
                  rel="noreferrer"
                  target="_blank"
                  className="menuData"
                  style={{ color: "whitesmoke", textDecoration: "none" }}
                >
                  <InsertDriveFileIcon />
                  <span> Resume</span>
                </a>
             
              <Link
                smooth
                to={"#contact"}
                style={{
                  color: "whitesmoke",
                  textDecoration: "none",
                  marginRight: "5vw",
                }}
                className="menuData"
              >
                <EmailIcon />
                <span> Contact</span>
              </Link>
            </div>
          </div>
        </nav>
        <div className="row selfIntro">
          <span className="intro">
            Hi, I'm <span className="pardeep">Pradeep</span>
          </span>
          <p>I enjoy to build responsive Web Applications</p>
        </div>
        <div className="projectGitBtn">
          <Link smooth to={"#projects"}>
            <button type="button" class="btn btn-primary btn">
              <CodeIcon />
              Projects
            </button>
          </Link>
          <a
            href="https://github.com/pradeepdeep82"
            target="_blank"
            rel="noreferrer"
          >
            <button type="button" class="btn btn-outline-primary btn gitbtn">
              <GitHubIcon />
              Github
            </button>
          </a>
        </div>
        <Link smooth to={"#"}>
          <KeyboardArrowUpIcon sx={{ fontSize: 40 }} className="upIcon" />
        </Link>
      </div>
      <MySkills />
      <ProjectWork />
      <MyEducation />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
