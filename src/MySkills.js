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


export function MySkills() {
  return (
    <div className="mySkills" id="skills">
      <div className="topic" data-aos="zoom-in">
        <span>My</span>
        <span style={{ paddingLeft: "08px", color: "#3b82f6" }}>Skills</span>
      </div>
      <div>
        <div className="row" data-aos="zoom-in">
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
        <div className="row" data-aos="zoom-in">
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
            <p style={{ paddingLeft: "13px", paddingTop: "10px" }}>Bootstrap</p>
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
            <img className="skillsLogo" src={firebaseLogo} alt="firebaseLogo" />
            <p style={{ paddingLeft: "13px", paddingTop: "10px" }}>Firebase</p>
          </div>
          <div className="col-sm-1 logoWithTag" style={{ marginTop: "70px" }}>
            <img className="skillsLogo" src={awsLogo} alt="awsLogo" />
            <p style={{ paddingLeft: "13px", paddingTop: "10px" }}>AWS</p>
          </div>
        </div>
      </div>
      
    </div>
  );
}
