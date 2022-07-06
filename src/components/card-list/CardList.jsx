import React, { Component } from "react";
import "./CardList.css";
import Card from "../card/Card";
export default class CardList extends Component {
  render() {
    const { monsters } = this.props;

    console.log("render from card-list");

    return (
      <div className="card-list">
        {monsters.map((monster) => {
          const { name, email, id } = monster;
          return <Card key={id} id={id} email={email} name={name} />;
        })}
      </div>
    );
  }
}
