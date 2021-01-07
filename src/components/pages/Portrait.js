import React, { useRef, useEffect } from "react";
import "./Portrait.css";
import { TweenMax } from "gsap";

function Portrait(props) {
  let arrowElement = useRef(null);

  useEffect(() => {
    TweenMax.fromTo(arrowElement, 1, { y: -15, ease: "sine.inOut" }, { y: 2, repeat: -1, yoyo: true, ease: "sine.inOut" });
  });

  const executeScroll = () => props.reference.current.scrollIntoView();

  return (
    <div>
      <div className={`principal-title-container ${props.class}-page`}>
        <h1 className="principal-title">{props.name}</h1>
        <i ref={(el) => (arrowElement = el)} className="fas fa-arrow-down fa-2x portrait__arrow" onClick={executeScroll}></i>
      </div>
    </div>
  );
}

export default Portrait;
