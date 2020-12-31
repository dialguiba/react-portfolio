import React from "react";
import "../App.css";
/* import { Button } from "./Button"; */
import "./HeroSection.css";
import video from "../videos/video-1.mp4";
import avatar from "../images/avatar.svg";
/* import twitter from "../images/twitter-icon.svg";*/
import github from "../images/github-icon.svg";
import devto from "../images/devto-icon.svg";
/* import discord from "../images/discord-icon.svg"; */
import codesandbox from "../images/codesandbox-icon.svg";
import linkedin from "../images/linkedin-icon.svg";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src={video} autoPlay loop muted />
      <img src={avatar} alt="" />
      <h1>Welcome to my Portfolio</h1>
      {/* <p>What are you waiting for?</p> */}

      <ul className="social-networks">
        {/*  <li>
          <a
            href="https://twitter.com/Baad17"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="icons-social" src={twitter} alt="" />
          </a>
        </li> */}
        <li>
          <a href="https://github.com/dialguiba" target="_blank" rel="noopener noreferrer">
            <img className="icons-social" src={github} alt="" />
          </a>
        </li>
        <li>
          <a href="https://dev.to/dialguiba" target="_blank" rel="noopener noreferrer">
            <img className="icons-social" src={devto} alt="" />
          </a>
        </li>
        {/* <li>
          <a href="https://discord.com/channels/@me/baad1994#1926/" target="_blank" rel="noopener noreferrer">
            <img className="icons-social" src={discord} alt="" />
          </a>
        </li> */}
        <li>
          <a href="https://www.linkedin.com/in/diego-aguirre-7738771a3/" target="_blank" rel="noopener noreferrer">
            <img className="icons-social" src={linkedin} alt="" />
          </a>
        </li>
        <li>
          <a href="https://codesandbox.io/search?query=dialguiba&page=1" target="_blank" rel="noopener noreferrer">
            <img className="icons-social" src={codesandbox} alt="" />
          </a>
        </li>
      </ul>

      {/* <div className="hero-btns">
        <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">
          GET STARTED
        </Button>
        <Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large" onClick={console.log("hey")}>
          WATCH TRAILER <i className="far fa-play-circle" />
        </Button>
      </div> */}
    </div>
  );
}

export default HeroSection;
