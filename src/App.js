import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CodeIcon from "@mui/icons-material/Code";
import HandymanIcon from "@mui/icons-material/Handyman";
import SchoolIcon from "@mui/icons-material/School";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import htmlLogo from "./logo/html5-without-wordmark-color.svg";
import cssLogo from "./logo/css-3-seeklogo.com.svg";
import javascriptLogo from "./logo/javascript-js-seeklogo.com.svg";
import reactLogo from "./logo/react-seeklogo.com.svg";
import materialUiLogo from "./logo/material-ui-1.svg";
import nodeLogo from "./logo/node-node-js-seeklogo.com.svg";
import gitLogo from "./logo/git-seeklogo.com.svg";
import bootstrapLogo from "./logo/bootstrap-seeklogo.com.svg";
import expressLogo from "./logo/express-js-seeklogo.com.svg";
import mongoLogo from "./logo/mongodb-icon-1.svg";
import firebaseLogo from "./logo/firebase-seeklogo.com.svg";
import awsLogo from "./logo/aws-2.svg";
import cegLogo from "./logo/CEG_main_logo.png";
import presidencyLogo from "./logo/Presidency-collegechennai.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import MenuIcon from "@mui/icons-material/Menu";

function App() {
  return (
    <div className="Container-fluid">
      <div className="aboutMe">
        <div className="row menu">
          <div className="offset-sm-2 col-sm-2">
            <span className="name">Pradeep Ganapathi</span>
            <p style={{color:"#3b82f6"}}>Full Stack Web Developer</p>
          </div>
          <div className="offset-sm-2 col-sm-1 menuData">
            <CodeIcon />
            <span>Projects</span>
          </div>
          <div className="col-sm-1 menuData">
            <HandymanIcon />
            <span>Skills</span>
          </div>
          <div className="col-sm-1 menuData">
            <SchoolIcon />
            <span>Education</span>
          </div>
          <div className="col-sm-1 menuData">
            <InsertDriveFileIcon />
            <span>Resume</span>
          </div>
          <div className="col-sm-1 menuData">
            <EmailIcon />
            <span>Contact</span>
          </div>
          <div className="col-sm-1 menuIcon">
            <MenuIcon sx={{ fontSize: 40 }} />
          </div>
        </div>
        <div className="row selfIntro">
          <span className="intro">
            Hi, I'm <span className="pardeep">Pradeep</span>
          </span>
          <p>I enjoy to build responsive Web Applications</p>
        </div>
        <div className="projectGitBtn">
          <button type="button" class="btn btn-primary btn">
            <CodeIcon />
            Projects
          </button>
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
      </div>

      <div className="mySkills">
        <div className="topic">
          <span>My</span>
          <span style={{ paddingLeft: "08px", color: "#3b82f6" }}>Skills</span>
        </div>
        <div>
          <div className="row">
            <div
              className="offset-sm-3 col-sm-1 logoWithTag"
              style={{ marginTop: "70px" }}
            >
              <img className="skillsLogo" src={htmlLogo} alt="htmlLogo" />
              <p style={{ paddingLeft: "13px", paddingTop: "10px" }}>HTML</p>
            </div>
            <div className="col-sm-1 logoWithTag" style={{ marginTop: "70px" }}>
              <img className="skillsLogo" src={cssLogo} alt="cssLogo" />
              <p style={{ paddingLeft: "13px", paddingTop: "10px" }}>CSS</p>
            </div>
            <div className="col-sm-1 logoWithTag" style={{ marginTop: "70px" }}>
              <img
                className="skillsLogo"
                src={javascriptLogo}
                alt="javascriptLogo"
              />
              <p style={{ paddingLeft: "13px", paddingTop: "10px" }}>
                JavaScript
              </p>
            </div>
            <div className="col-sm-1 logoWithTag" style={{ marginTop: "70px" }}>
              <img className="skillsLogo" src={reactLogo} alt="reactLogo" />
              <p style={{ paddingLeft: "13px", paddingTop: "10px" }}>React</p>
            </div>
            <div className="col-sm-1 logoWithTag" style={{ marginTop: "70px" }}>
              <img
                className="skillsLogo"
                src={materialUiLogo}
                alt="materialUiLogo"
              />
              <p style={{ paddingLeft: "13px", paddingTop: "10px" }}>
                Material Ui
              </p>
            </div>
            <div className="col-sm-1 logoWithTag" style={{ marginTop: "70px" }}>
              <img className="skillsLogo" src={nodeLogo} alt="nodeLogo" />
              <p style={{ paddingLeft: "13px", paddingTop: "10px" }}>Node.js</p>
            </div>
          </div>
          <div className="row">
            <div
              className="offset-sm-3 col-sm-1 logoWithTag"
              style={{ marginTop: "70px" }}
            >
              <img className="skillsLogo" src={gitLogo} alt="gitLogo" />
              <p style={{ paddingLeft: "13px", paddingTop: "10px" }}>Git</p>
            </div>

            <div className="col-sm-1 logoWithTag" style={{ marginTop: "70px" }}>
              <img
                className="skillsLogo"
                src={bootstrapLogo}
                alt="bootstrapLogo"
              />
              <p style={{ paddingLeft: "13px", paddingTop: "10px" }}>
                Bootstrap
              </p>
            </div>
            <div className="col-sm-1 logoWithTag" style={{ marginTop: "70px" }}>
              <img className="skillsLogo" src={expressLogo} alt="mongo db" />
              <p style={{ paddingLeft: "13px", paddingTop: "10px" }}>
                express.js
              </p>
            </div>
            <div className="col-sm-1 logoWithTag" style={{ marginTop: "70px" }}>
              <img className="skillsLogo" src={mongoLogo} alt="mongo db" />
              <p style={{ paddingLeft: "13px", paddingTop: "10px" }}>mongoDB</p>
            </div>
            <div className="col-sm-1 logoWithTag" style={{ marginTop: "70px" }}>
              <img
                className="skillsLogo"
                src={firebaseLogo}
                alt="firebaseLogo"
              />
              <p style={{ paddingLeft: "13px", paddingTop: "10px" }}>
                Firebase
              </p>
            </div>
            <div className="col-sm-1 logoWithTag" style={{ marginTop: "70px" }}>
              <img className="skillsLogo" src={awsLogo} alt="awsLogo" />
              <p style={{ paddingLeft: "13px", paddingTop: "10px" }}>AWS</p>
            </div>
          </div>
        </div>
      </div>
      <div className="projectsWork">
        <div className="topic">
          <span style={{ color: "white" }}>Projects &</span>
          <span style={{ paddingLeft: "8px", color: "#3b82f6" }}>Work</span>
        </div>
      </div>
      <div className="myEducation">
        <div className="topic">
          <span>My</span>
          <span style={{ paddingLeft: "8px", color: "#3b82f6" }}>
            Education
          </span>
        </div>
        <div className="colleges">
          <div className="row">
            <div className="col-sm-3 cegLogo">
              <img src={cegLogo} alt="ceg logo" />
            </div>
            <div className="col-sm-9 msc">
              <p>2018</p>
              <p>College of Engineering Guindy - Masters in Applied Geology</p>
              <strong>CGPA - 9.14/10</strong>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-sm-3 cegLogo">
              <img src={presidencyLogo} alt="prsidency logo" />
            </div>
            <div className="col-sm-9 msc">
              <p>2016</p>
              <p>Presidency College - Masters in Applied Geology</p>
              <strong>CGPA - 8.2/10</strong>
            </div>
          </div>
        </div>
      </div>
      <div className="contactMe">
        <div className="topic">
          <span style={{ color: "black" }}>Contact</span>
          <span style={{ paddingLeft: "8px", color: "#3b82f6" }}>Me</span>
        </div>
        <div className="row" style={{ textAlign: "center" }}>
          <div className="col-sm-3 email">
            <EmailIcon
              sx={{ fontSize: 70, color: "#3b82f6" }}
              className="emailIcon"
            />
            <h5>
              <strong>Email</strong>
            </h5>
            <p>pradeepdeep82@gmail.com</p>
          </div>
          <div className="col-sm-3 email">
            <GitHubIcon
              sx={{ fontSize: 70, color: "#3b82f6" }}
              className="emailIcon"
            />
            <h5>
              <strong>Github</strong>
            </h5>
            <a
              href="https://github.com/pradeepdeep82"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
            >
              pradeepdeep82
            </a>
          </div>

          <div className="col-sm-3 email">
            <LinkedInIcon
              sx={{ fontSize: 70, color: "#3b82f6" }}
              className="emailIcon"
            />
            <h5>
              <strong>LinkedIn</strong>
            </h5>
            <a
              href="https://www.linkedin.com/in/pradeep-ganapathi-010134141/"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
            >
              pradeep-ganapathi
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 sendMail">
            <div className="topic">
              <span style={{ color: "black" }}>Send</span>
              <span style={{ paddingLeft: "8px", color: "#3b82f6" }}>
                Email
              </span>
            </div>
            <div>
              <form
              // onSubmit={handleSubmit}
              >
                <TextField
                  fullWidth
                  // value={name}
                  // onChange={(event) => setName(event.target.value)}
                  label="Name"
                  id="name"
                  style={{ marginTop: "20px", marginLeft: "5px" }}
                />
                <TextField
                  fullWidth
                  // value={email}
                  // onChange={(event) => setEmail(event.target.value)}
                  label="Your email"
                  id="email"
                  style={{ marginTop: "20px", marginLeft: "5px" }}
                />
                <TextField
                  style={{ marginTop: "20px", marginLeft: "5px" }}
                  id="emailMessage"
                  label="Message"
                  multiline
                  rows={7}
                  fullWidth
                />
                <Button
                  style={{ marginTop: "20px" }}
                  variant="contained"
                  endIcon={<SendIcon />}
                >
                  Send
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="row footer">
        <div className="offset-sm-2 col-sm-2">
          <span className="name">Pradeep Ganapathi</span>
          <p style={{color:"#3b82f6"}}>Full Stack Web Developer</p>
        </div>
        <div className="offset-sm-5 col-sm-2">
          <a
            href="https://github.com/pradeepdeep82"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
          >
            <GitHubIcon
              sx={{ fontSize: 45, color: "whitesmoke" }}
              className="emailIcon"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/pradeep-ganapathi-010134141/"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
          >
            <LinkedInIcon
              sx={{ fontSize: 45, color: "whitesmoke" }}
              className="emailIcon"
            />
          </a>
          <EmailIcon sx={{ fontSize: 45 }} className="emailIcon" />
        </div>
      </div>
    </div>
  );
}

export default App;
