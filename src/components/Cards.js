import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("https://portfolio-api-six.vercel.app/api/projects")
      .then((res) => {
        console.log(res.data.projects);
        setProjects(res.data.projects);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="cards">
      <div className="cards__container">
        <div className="cards__wrapper">
          {/*  <ul className="cards__items">
            <CardItem
              src={process.env.PUBLIC_URL + "/images/img-9.jpg"}
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path="/services"
            />
            <CardItem src={"/images/img-2.jpg"} text="Travel through the Islands of Bali in a Private Cruise" label="Luxury" path="/services" />
          </ul> */}
          {/* <ul className="cards__items"> */}
          {projects.map((project) => (
            <CardItem key={project._id} text={project.name} label={project.name} path={project.url} src={`${process.env.PUBLIC_URL}/images/projects/${project.image}`} />
          ))}

          {/* <CardItem
              src={process.env.PUBLIC_URL + "/images/img-3.jpg"}
              text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
              label="Mystery"
              path="/services"
            />
            <CardItem
              src={process.env.PUBLIC_URL + "/images/img-4.jpg"}
              text="Experience Football on Top of the Himilayan Mountains"
              label="Adventure"
              path="/products"
            />
            <CardItem
              src={process.env.PUBLIC_URL + "/images/img-8.jpg"}
              text="Ride through the Sahara Desert on a guided camel tour"
              label="Adrenaline"
              path="/sign-up"
            /> */}
          {/* </ul> */}
        </div>
      </div>
    </div>
  );
}

export default Cards;
