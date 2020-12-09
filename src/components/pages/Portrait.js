import React from "react";

function Portrait(props) {
  return (
    <div>
      <div className={`principal-title-container ${props.class}-page`}>
        <h1 className="principal-title">{props.name}</h1>
      </div>
    </div>
  );
}

export default Portrait;
