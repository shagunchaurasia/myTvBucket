import React from "react";
import Card from "./../Card/Card.component";
import "./CardList.component.css";

const CardList = (props) => {
  return (
    <div className="cardList">
      {props.data.map((toDo, index) => {
        return (
          <Card
            key={index}
            title={toDo.name}
            posterPath={toDo.poster_path}
          ></Card>
        );
      })}
    </div>
  );
};

export default CardList;
