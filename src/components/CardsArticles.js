import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Cards.css";
import CardItem from "./CardItem";
import LoadingSvg from "../images/rings.svg";
/* import sanityClient from "../client.js"; */
/* import imageUrlBuilder from "@sanity/image-url"; */

/* const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
} */

function Cards() {
  const [articles, setArticles] = useState([]);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://dev.to/api/articles?username=dialguiba")
      .then((res) => {
        console.log(res.data);
        setArticles(res.data);
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
          articles.map((article) => <CardItem key={article.id} text={article.description} label={article.title} path={article.url} src={article.cover_image} />)
        )}
      </>
    );
  } else {
    return <img className="loading-svg" src={LoadingSvg} alt="loading-svg"></img>;
  }
}

export default Cards;
