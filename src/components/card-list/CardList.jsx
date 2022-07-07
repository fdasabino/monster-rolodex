import React from "react";
import Card from "../card/Card";
import "./CardList.css";

const CardList = ({ monsters }) => {
  console.log("render from card-list");

  return (
    <div className="card-list">
      {monsters.map((monster) => {
        const { name, email, id } = monster;
        return <Card key={id} id={id} email={email} name={name} />;
      })}
    </div>
  );
};

export default CardList;
