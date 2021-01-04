import React from "react";
import Cards from "../CardsArticles";
import Portrait from "./Portrait";
import "./CardsContainer.css";

function Articles() {
  return (
    <>
      {/* <div className="principal-title-container projects-page">
        <h1 className="principal-title">ARTICLES</h1>
      </div> */}
      <Portrait name="ARTICLES" class="articles" />
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

export default Articles;
