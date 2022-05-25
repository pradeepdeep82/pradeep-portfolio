import cegLogo from "./logo/CEG_main_logo.png";
import presidencyLogo from "./logo/Presidency-collegechennai.png";
import AOS from "aos";
AOS.init();

export function MyEducation() {
  return <div className="myEducation" id="education">
    
    <div className="topic" data-aos="zoom-in">
      <span>My</span>
      <span style={{ paddingLeft: "8px", color: "#3b82f6" }}>
        Education
      </span>
    </div>
    <div className="colleges">
      <div className="row" data-aos="zoom-in">
        <div className="col-sm-3 cegLogo">
          <img src={cegLogo} alt="ceg logo" />
        </div>
        <div className="col-sm-9 msc">
          <p>2018</p>
          <p>College of Engineering Guindy - Master's in Applied Geology</p>
          <strong>CGPA - 9.14/10</strong>
        </div>
      </div>
      <hr />
      <div className="row" data-aos="zoom-in" style={{marginBottom:"10vh"}}>
        <div className="col-sm-3 cegLogo">
          <img src={presidencyLogo} alt="prsidency logo" />
        </div>
        <div className="col-sm-9 msc">
          <p>2016</p>
          <p>Presidency College - Bachelor's in Geology</p>
          <strong>CGPA - 8.2/10</strong>
        </div>
      </div>
    </div>
  </div>;
}
