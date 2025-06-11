import React from "react";
import "../Styles/Card.css";

const Card = (props) => {
  return (
    <div className="main-card">
      <div className="main-card-contents">
      <div className="image-div">
        <img src={props.image}  alt="logo" />
      </div>
      
      <div className="number-div">
        <h1>{props.number}</h1>
      </div>

      <div className="head-div">
        <h1>{props.head}</h1>
      </div>
      <div className="text-div">
        <p>{props.text}</p>
      </div>

      </div>
    </div>
  );
};

export default Card;
