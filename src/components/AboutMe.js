import React from "react";
import "./AboutMe.css";
import NameIcon from "../images/name-icon.svg";
import AgeIcon from "../images/age-icon.svg";
import LocationIcon from "../images/location-icon.svg";
import StudiesIcon from "../images/studies-icon.svg";
import MoreAboutMe from "../images/more-about-me-icon.svg";
import LanguagesIcon from "../images/languages-icon.svg";
import SpanishIcon from "../images/spanish-icon.svg";
import EnglishIcon from "../images/english-icon.svg";
import JapaneseIcon from "../images/japanese-icon.svg";

function AboutMe() {
  return (
    <div id="description-container">
      <h1 id="title">ABOUT ME</h1>
      <ul id="description-list">
        <li>
          <img className="icons" src={NameIcon} alt="" />
          <p>My name is Diego Aguirre</p>
        </li>
        <li>
          <img src={AgeIcon} className="icons" alt="" />
          <p>26 years old</p>
        </li>
        <li>
          <img src={LocationIcon} className="icons" alt="" />
          <p>Perú</p>
        </li>
        <li>
          <img src={StudiesIcon} className="icons" alt="" />
          <p>Electronic engineering at National University of San Marcos</p>
        </li>
        <li>
          <img src={MoreAboutMe} className="icons" alt="" />
          <p>
            I consider myself as a person who really love learning new things. Actually, I am improving my knowledges of high level programming but I also have knowledges
            about low level programming. I really enjoy doing projects. One of my hobbies is doing exercises like running or swimming
          </p>
        </li>
        <li>
          <img src={LanguagesIcon} className="icons" alt="" />
          <ul>
            <li>
              <img src={SpanishIcon} className="icons" alt="" />
            </li>
            <li>
              <img src={EnglishIcon} className="icons" alt="" />
            </li>
            <li>
              <img src={JapaneseIcon} className="icons" alt="" />
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default AboutMe;
