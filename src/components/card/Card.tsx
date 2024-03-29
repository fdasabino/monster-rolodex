import React from "react";
import { Monster } from "../../App";
import "./Card.css";

type CardProps = {
  monster: Monster;
};

const Card = ({ monster }: CardProps) => {
  const { id, name, email } = monster;

  return (
    <div className="card-container" key={id}>
      <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt={`monster ${id}`} />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
