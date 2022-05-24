import toDoAppImage from "./logo/to-do-app-screenshot.PNG";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GitHubIcon from "@mui/icons-material/GitHub";
import weatherAppImage from "./logo/weather-app-screenshot.PNG";
import movieAppImage from "./logo/Basic-movie-app-screenshot.PNG";
import covid19App from "./logo/covid-19-report-app-screenshot.PNG";

export function ProjectWork() {
  return (
    <div className="projectWork" id="projects" >
      <div className="topic" data-aos="zoom-in">
        <span style={{ color: "white" }}>Projects &</span>
        <span style={{ paddingLeft: "8px", color: "#3b82f6" }}>Work</span>
      </div>
      <div className="row" style={{ marginTop: "40px" }} data-aos="zoom-in">
        <div className="offset-sm-1 col-sm-5">
          <img src={toDoAppImage} alt="to-do-app" width="100%"></img>
        </div>
        <div className="col-sm-5" style={{ color: "whitesmoke" }}>
          <h4>To Do List App</h4>
          <p>
            <span style={{ color: "gray" }}>Mad with: </span>React, JavaScript,
            Bootstrap, Material Ui
          </p>
          <a
            href="https://to-do-list-app-pradeep.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button type="button" class="btn btn-primary btn">
              <YouTubeIcon />
              <span>Demo</span>
            </button>
          </a>
          <a
            href="https://github.com/pradeepdeep82/To-do-list-app"
            target="_blank"
            rel="noreferrer"
          >
            <button type="button" class="btn btn-outline-primary btn gitbtn">
              <GitHubIcon />
              Code
            </button>
          </a>
        </div>
      </div>
      <div className="row" style={{ marginTop: "40px" }} data-aos="zoom-in">
        <div className="offset-sm-1 col-sm-5">
          <img src={weatherAppImage} alt="weatherApp" width="100%"></img>
        </div>
        <div className="col-sm-5" style={{ color: "whitesmoke" }}>
          <h4>Weather App</h4>
          <p>
            <span style={{ color: "gray" }}>Mad with: </span>HTML, CSS,
            JavaScript, Bootstrap
          </p>
          <a
            href="https://weather-app-pradeep.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button type="button" class="btn btn-primary btn">
              <YouTubeIcon />
              <span>Demo</span>
            </button>
          </a>
          <a
            href="https://github.com/pradeepdeep82/Weather-App"
            target="_blank"
            rel="noreferrer"
          >
            <button type="button" class="btn btn-outline-primary btn gitbtn">
              <GitHubIcon />
              Code
            </button>
          </a>
        </div>
      </div>


    </div>
  );
}
