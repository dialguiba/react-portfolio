import React, { useRef } from "react";
import "./Knowledges.css";
import useScrollPosition from "@react-hook/window-scroll";
import { TweenMax } from "gsap";
import HtmlIcon from "../images/knowledges/html-icon.svg";
import CssIcon from "../images/knowledges/css-icon.svg";
import JsIcon from "../images/knowledges/js-icon.svg";
import JqueryIcon from "../images/knowledges/jquery-icon.svg";
import AjaxIcon from "../images/knowledges/ajax-icon.svg";
import BootstrapIcon from "../images/knowledges/bootstrap-icon.svg";
import EjsIcon from "../images/knowledges/ejs-icon.svg";
import HbsIcon from "../images/knowledges/hbs-icon.svg";
import ReactIcon from "../images/knowledges/react-icon.svg";
import PhpIcon from "../images/knowledges/php-icon.svg";
import JavaIcon from "../images/knowledges/java-icon.svg";
import CIcon from "../images/knowledges/c-icon.svg";
import CPlusPlusIcon from "../images/knowledges/cplusplus-icon.svg";
import CSharpIcon from "../images/knowledges/csharp-icon.svg";
import PyIcon from "../images/knowledges/py-icon.svg";
import YamlIcon from "../images/knowledges/yaml-icon.svg";
import SqlIcon from "../images/knowledges/sql-icon.svg";
import BashIcon from "../images/knowledges/bash-icon.svg";
import VhdlIcon from "../images/knowledges/vhdl-icon.svg";
import ArduinoIcon from "../images/knowledges/arduino-icon.svg";
import DockerIcon from "../images/knowledges/docker-icon.svg";
import NodejsIcon from "../images/knowledges/nodejs-icon.svg";
import MatlabIcon from "../images/knowledges/matlab-icon.svg";

function Knowledges() {
  const sectionKnowledgesRef = useRef(null);

  const scrollY = useScrollPosition(60);

  const fadeIn = (element) => {
    TweenMax.to(element, 1, {
      opacity: 1,
      scale: 1,
      ease: "power4.out",
      stagger: {
        amount: 0.3,
      },
    });
  };
  const fadeOut = (element) => {
    TweenMax.to(element, 1, {
      opacity: 0,
      scale: 0,
      ease: "power4.out",
    });
  };

  sectionKnowledgesRef.current && sectionKnowledgesRef.current.clientHeight - scrollY < 50 ? fadeIn(".fadeInProjects") : fadeOut(".fadeInProjects");

  return (
    <div id="knowledges-section" ref={sectionKnowledgesRef}>
      <h1 id="title" className="fadeInProjects">
        KNOWLEDGES
      </h1>
      <div id="knowledges-grid-container">
        <div className="knowledge-grid-item fadeInProjects">
          <img className="icons-knowledges" src={HtmlIcon} alt="" />
        </div>
        <div className="knowledge-grid-item fadeInProjects">
          <img className="icons-knowledges" src={CssIcon} alt="" />
        </div>
        <div className="knowledge-grid-item fadeInProjects">
          <img className="icons-knowledges" src={JsIcon} alt="" />
        </div>
        <div className="knowledge-grid-item fadeInProjects">
          <img className="icons-knowledges" src={JqueryIcon} alt="" />
        </div>
        <div className="knowledge-grid-item fadeInProjects">
          <img className="icons-knowledges" src={AjaxIcon} alt="" />
        </div>
        <div className="knowledge-grid-item fadeInProjects">
          <img className="icons-knowledges" src={BootstrapIcon} alt="" />
        </div>
        <div className="knowledge-grid-item fadeInProjects">
          <img className="icons-knowledges" src={EjsIcon} alt="" />
        </div>
        <div className="knowledge-grid-item fadeInProjects">
          <img className="icons-knowledges" src={HbsIcon} alt="" />
        </div>
        <div className="knowledge-grid-item fadeInProjects">
          <img className="icons-knowledges" src={ReactIcon} alt="" />
        </div>
        <div className="knowledge-grid-item fadeInProjects">
          <img className="icons-knowledges" src={PhpIcon} alt="" />
        </div>
        <div className="knowledge-grid-item fadeInProjects">
          <img className="icons-knowledges" src={JavaIcon} alt="" />
        </div>
        <div className="knowledge-grid-item fadeInProjects">
          <img className="icons-knowledges" src={CIcon} alt="" />
        </div>
        <div className="knowledge-grid-item fadeInProjects">
          <img className="icons-knowledges" src={CPlusPlusIcon} alt="" />
        </div>
        <div className="knowledge-grid-item fadeInProjects">
          <img className="icons-knowledges" src={CSharpIcon} alt="" />
        </div>
        <div className="knowledge-grid-item fadeInProjects">
          <img className="icons-knowledges" src={PyIcon} alt="" />
        </div>
        <div className="knowledge-grid-item fadeInProjects">
          <img className="icons-knowledges" src={YamlIcon} alt="" />
        </div>
        <div className="knowledge-grid-item fadeInProjects">
          <img className="icons-knowledges" src={SqlIcon} alt="" />
        </div>
        <div className="knowledge-grid-item fadeInProjects">
          <img className="icons-knowledges" src={BashIcon} alt="" />
        </div>
        <div className="knowledge-grid-item fadeInProjects">
          <img className="icons-knowledges" src={VhdlIcon} alt="" />
        </div>
        <div className="knowledge-grid-item fadeInProjects">
          <img className="icons-knowledges" src={ArduinoIcon} alt="" />
        </div>
        <div className="knowledge-grid-item fadeInProjects">
          <img className="icons-knowledges" src={DockerIcon} alt="" />
        </div>
        <div className="knowledge-grid-item fadeInProjects">
          <img className="icons-knowledges" src={NodejsIcon} alt="" />
        </div>
        <div className="knowledge-grid-item fadeInProjects">
          <img className="icons-knowledges" src={MatlabIcon} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Knowledges;
