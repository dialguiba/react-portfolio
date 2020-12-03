import React from "react";
import "../../App.css";
import Cards from "../Cards";
/* import CodingVideo from "../../videos/coding-video.mp4"; */

function Projects() {
  return (
    <>
      {/* <video src={CodingVideo} autoPlay loop muted /> */}
      <h1 className="principal-title projects-page">PROJECTS</h1>
      <div className="cards">
        <div className="cards__container">
          <div className="cards__wrapper">
            <Cards />
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
