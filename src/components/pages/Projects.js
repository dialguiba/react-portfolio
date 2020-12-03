import React from "react";
import "../../App.css";
import Cards from "../Cards";
import CodingVideo from "../../videos/coding-video.mp4";

function Projects() {
  return (
    <>
      <video src={CodingVideo} autoPlay loop muted />
      <h1 className="principal-title">PROJECTS</h1>
      <Cards />
    </>
  );
}

export default Projects;
