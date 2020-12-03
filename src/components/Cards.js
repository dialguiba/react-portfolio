import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Cards.css";
import CardItem from "./CardItem";
import LoadingSvg from "../images/rings.svg";

function Cards() {
  const [projects, setProjects] = useState([]);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://portfolio-api-six.vercel.app/api/projects")
      .then((res) => {
        console.log(res.data.projects);
        setProjects(res.data.projects);
        setLoad(true);
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
        setLoad(true);
      });
  }, []);

  if (load) {
    return (
      <>
        {error ? (
          <p>{error.message}</p>
        ) : (
          projects.map((project) => (
            <CardItem key={project._id} text={project.name} label={project.name} path={project.url} src={`${process.env.PUBLIC_URL}/images/projects/${project.image}`} />
          ))
        )}
      </>
    );
  } else {
    return <img className="loading-svg" src={LoadingSvg} alt="loading-svg"></img>;
  }
}

export default Cards;
