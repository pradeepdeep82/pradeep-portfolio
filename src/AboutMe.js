import React from "react";

export function AboutMe() {
  return (
    <div style={{ backgroundColor: "#212529" }}>
      
        <div className="topic" data-aos="zoom-in">
          <span style={{ color: "white" }}>About</span>
          <span style={{ paddingLeft: "8px", color: "#3b82f6" }}>Me</span>
        </div>
        <div>
          <p className="mySelfAbout" data-aos="zoom-in">
            I am a self-motivated and flexible person done Masters in Applied
            Geology, with my own interest I have learned about full stack web
            development and always ready to learn new technologies.
          </p>
        </div>
        <div className="topic" style={{ paddingTop: "0px" }} data-aos="zoom-in">
          <span style={{ paddingLeft: "8px", color: "#3b82f6" }}>Interest</span>
        </div>
        <div>
          <p className="mySelfAbout" data-aos="zoom-in">
            I like to play Badminton, Mobile & PC Games and like to travel.
          </p>
        </div>
        <div className="topic" style={{ paddingTop: "0px" }} data-aos="zoom-in">
        <span style={{ color: "#3b82f6" }}>Languages</span>
          <span style={{ paddingLeft: "8px", color: "white" }}>Known</span>
        </div>
        <div data-aos="zoom-in">
          <p className="mySelfAbout">
            English - Speak, Read and Write.
            <p>Tamil - Speak, Read and Write.</p>
          </p>
        </div>
    </div>
  );
}
