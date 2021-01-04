import React from "react";
import "./CardsContainer.css";
import Cards from "../CardsProjects";
/* import CodingVideo from "../../videos/coding-video.mp4"; */
import Portrait from "./Portrait";

function Projects() {
  return (
    <>
      {/* <video src={CodingVideo} autoPlay loop muted /> */}
      {/* <div className="principal-title-container projects-page">
        <h1 className="principal-title">PROJECTS</h1>
      </div> */}
      <Portrait name="PROJECTS" class="projects" />

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
