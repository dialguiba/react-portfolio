import React, { useState, useEffect } from "react";
/* import axios from "axios"; */
import "./Cards.css";
import CardItem from "./CardItem";
import LoadingSvg from "../images/rings.svg";
import sanityClient from "../client.js";
/* import imageUrlBuilder from "@sanity/image-url"; */

/* const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
} */

function Cards() {
  const [projects, setProjects] = useState([]);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    /* axios.get("https://portfolio-api-six.vercel.app/api/projects")
      .then((res) => {
        console.log(res.data.projects);
        setProjects(res.data.projects);
        setLoad(true);
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
        setLoad(true);
      }); */
    sanityClient
      .fetch(
        `*[_type == 'project'] {
        title,
        url,
        mainImage{
          asset -> {
        _id,
        url}
        }
        }`
      )
      .then((data) => {
        console.log(data);
        console.log(data[0].mainImage.url);
        /*  console.log(urlFor(data[0]).url()); */

        setProjects(data);
        setLoad(true);
      })
      .catch((err) => {
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
            <CardItem key={project.mainImage.asset._id} text={project.title} label={project.title} path={project.url} src={project.mainImage.asset.url} />
          ))
        )}
      </>
    );
  } else {
    return <img className="loading-svg" src={LoadingSvg} alt="loading-svg"></img>;
  }
}

export default Cards;
