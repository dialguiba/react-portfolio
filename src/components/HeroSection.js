import React, { useEffect, useRef } from "react";
import { TimelineLite, TweenMax } from "gsap";
/* import "../App.css"; */
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
  let avatarElement = useRef(null);
  let titleElement = useRef(null);
  let socialNetElement = useRef(null);
  let tl = new TimelineLite({ delay: 0.5 });

  useEffect(() => {
    let firstSocialIcon = socialNetElement.children[0].firstElementChild.firstElementChild;
    let secondSocialIcon = socialNetElement.children[1].firstElementChild.firstElementChild;
    let thirdSocialIcon = socialNetElement.children[2].firstElementChild.firstElementChild;
    let fourthSocialIcon = socialNetElement.children[3].firstElementChild.firstElementChild;

    TweenMax.fromTo(
      avatarElement,
      2,
      { y: 2, rotate: 2, transformOrigin: "center center", ease: "sine.inOut" },
      { y: -2, rotate: -2, repeat: -1, yoyo: true, ease: "sine.inOut" }
    );
    TweenMax.fromTo(titleElement, 1, { y: 5, ease: "sine.inOut" }, { y: -5, repeat: -1, yoyo: true, ease: "sine.inOut" });
    TweenMax.fromTo(firstSocialIcon, 1, { y: 5, ease: "sine.inOut" }, { y: -5, repeat: -1, yoyo: true, ease: "sine.inOut" });
    TweenMax.fromTo(secondSocialIcon, 1, { y: 5, ease: "sine.inOut" }, { y: -5, repeat: -1, yoyo: true, ease: "sine.inOut" });
    TweenMax.fromTo(thirdSocialIcon, 1, { y: 5, ease: "sine.inOut" }, { y: -5, repeat: -1, yoyo: true, ease: "sine.inOut" });
    TweenMax.fromTo(fourthSocialIcon, 1, { y: 5, ease: "sine.inOut" }, { y: -5, repeat: -1, yoyo: true, ease: "sine.inOut" });
    tl.from(avatarElement, 3, { scale: 0, ease: "sine.inOut" }, "Start")
      .from(titleElement, 3, { scale: 0, ease: "sine.inOut" }, "Start")
      .from(socialNetElement, 3, { scale: 0, ease: "sine.inOut" }, "Start");
  });

  return (
    <div className="hero-container">
      <video src={video} autoPlay loop muted />
      <div className="hero-container__content">
        <img className="hero-container__content__avatar" src={avatar} alt="" ref={(el) => (avatarElement = el)} />
        <h1 className="hero-container__content__title" ref={(el) => (titleElement = el)}>
          Welcome to my Portfolio
        </h1>
        <ul className="hero-container__content__social-network" ref={(el) => (socialNetElement = el)}>
          <li className="hero-container__content__social-network__item">
            <a href="https://github.com/dialguiba" target="_blank" rel="noopener noreferrer">
              <img className="hero-container__content__social-network__item__icon" src={github} alt="" />
            </a>
          </li>
          <li className="hero-container__content__social-network__item">
            <a href="https://dev.to/dialguiba" target="_blank" rel="noopener noreferrer">
              <img className="hero-container__content__social-network__item__icon" src={devto} alt="" />
            </a>
          </li>
          <li className="hero-container__content__social-network__item">
            <a href="https://www.linkedin.com/in/diego-aguirre-7738771a3/" target="_blank" rel="noopener noreferrer">
              <img className="hero-container__content__social-network__item__icon" src={linkedin} alt="" />
            </a>
          </li>
          <li className="hero-container__content__social-network__item">
            <a href="https://codesandbox.io/search?query=dialguiba&page=1" target="_blank" rel="noopener noreferrer">
              <img className="hero-container__content__social-network__item__icon" src={codesandbox} alt="" />
            </a>
          </li>
        </ul>
      </div>

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
