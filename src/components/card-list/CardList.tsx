import React from "react";
import { Monster } from "../../App";
import Card from "../card/Card";
import "./CardList.css";

type CardListProps = {
  monsters: Monster[];
};
const CardList = ({ monsters }: CardListProps) => {
  console.log("render from card-list");

  return (
    <div className="card-list">
      {monsters.map((monster) => {
        return <Card key={monster.id} monster={monster} />;
      })}
    </div>
  );
};

export default CardList;
