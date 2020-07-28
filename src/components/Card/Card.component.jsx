import React from "react";
import "./Card.component.css";
const Card = (props) => {
  return (
    <div className="card">
      {props.title}
      <img
        alt={props.title}
        src={`https://image.tmdb.org/t/p/original/${props.posterPath}`}
        className="imageCard"
      ></img>
    </div>
  );
};

export default Card;
