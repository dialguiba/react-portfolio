import React, { useRef } from "react";
import Cards from "../CardsArticles";
import Portrait from "./Portrait";
import "./CardsContainer.css";

function Articles() {
  const articlesRef = useRef(null);
  return (
    <>
      <Portrait name="ARTICLES" class="articles" reference={articlesRef} />
      <div className="cards" ref={articlesRef}>
        <div className="cards__container">
          <div className="cards__wrapper">
            <Cards />
          </div>
        </div>
      </div>
    </>
  );
}

export default Articles;
