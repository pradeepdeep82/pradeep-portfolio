import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

export function ContactMe() {
  return <div className="contactMe" id="contact">
    <div className="topic" data-aos="zoom-in-up">
      <span style={{ color: "black" }}>Contact</span>
      <span style={{ paddingLeft: "8px", color: "#3b82f6" }}>Me</span>
    </div>
    <div className="row" style={{ textAlign: "center" }}>
      <div className="col-sm-3 email" data-aos="zoom-out-right">
        <EmailIcon
          sx={{ fontSize: 70, color: "#3b82f6" }}
          className="emailIcon" />
        <h5>
          <strong>Email</strong>
        </h5>
        <p>pradeepdeep82@gmail.com</p>
      </div>
      <div className="col-sm-3 email" data-aos="zoom-out-down">
        <GitHubIcon
          sx={{ fontSize: 70, color: "#3b82f6" }}
          className="emailIcon" />
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

      <div className="col-sm-3 email" data-aos="zoom-out-left">
        <LinkedInIcon
          sx={{ fontSize: 70, color: "#3b82f6" }}
          className="emailIcon" />
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
      <div className="col-sm-6 sendMail" data-aos="zoom-in">
        <div className="topic">
          <span style={{ color: "black" }}>Send</span>
          <span style={{ paddingLeft: "8px", color: "#3b82f6" }}>
            Email
          </span>
        </div>
        <div>
          <form
          >
            <TextField
              fullWidth
              // value={name}
              // onChange={(event) => setName(event.target.value)}
              label="Name"
              id="name"
              style={{ marginTop: "20px", marginLeft: "5px" }} />
            <TextField
              fullWidth
              // value={email}
              // onChange={(event) => setEmail(event.target.value)}
              label="Your email"
              id="email"
              style={{ marginTop: "20px", marginLeft: "5px" }} />
            <TextField
              style={{ marginTop: "20px", marginLeft: "5px" }}
              id="emailMessage"
              label="Message"
              multiline
              rows={7}
              fullWidth />
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
  </div>;
}
