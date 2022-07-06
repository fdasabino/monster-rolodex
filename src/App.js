import "./App.css";
import React, { Component } from "react";
import CardList from "./components/card-list/CardList";
import SearchBox from "./components/search-box/SearchBox";

export default class App extends Component {
  //initial state

  constructor() {
    super();
    this.state = { monsters: [], searchField: "" };
  }

  // fetching data
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    // Destructuring was introduced in ES6.
    // It’s a JavaScript feature that allows us to extract multiple
    // pieces of data from an array or object and assign them to their own variables.
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    //renders content
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    console.log("render from App.js");
    return (
      <div className="App">
        <h1 className="app-title">Monsters Roledex</h1>
        <SearchBox
          onChangeHandler={onSearchChange}
          placeholder="Search Monsters"
          className="search-box"
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}
