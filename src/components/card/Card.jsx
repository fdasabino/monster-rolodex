import React from "react";
import "./Card.css";

const Card = ({ name, email, id }) => {
  return (
    <div className="card-container" key={id}>
      <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt={`monster ${id}`} />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
