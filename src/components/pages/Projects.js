import React, { useRef } from "react";
import "./CardsContainer.css";
import Cards from "../CardsProjects";
/* import CodingVideo from "../../videos/coding-video.mp4"; */
import Portrait from "./Portrait";

function Projects() {
  const projectsRef = useRef(null);

  return (
    <>
      <Portrait name="PROJECTS" class="projects" reference={projectsRef} />

      <div className="cards" ref={projectsRef}>
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
