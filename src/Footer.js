import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export function Footer() {
  return <div className="row footer">
    <div className="offset-sm-2 col-sm-2">
      <span className="name">Pradeep Ganapathi</span>
      <p style={{ color: "#3b82f6" }}>Full Stack Web Developer</p>
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
          className="emailIcon" />
      </a>
      <a
        href="https://www.linkedin.com/in/pradeep-ganapathi-010134141/"
        target="_blank"
        rel="noreferrer"
        style={{ textDecoration: "none" }}
      >
        <LinkedInIcon
          sx={{ fontSize: 45, color: "whitesmoke" }}
          className="emailIcon" />
      </a>
      <EmailIcon sx={{ fontSize: 45 }} className="emailIcon" />
    </div>
  </div>;
}
