import React, { useState, useEffect } from "react";
import CardList from "./components/card-list/CardList";
import SearchBox from "./components/search-box/SearchBox";
import "./App.css";

const App = () => {
  //state
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);

  // effect - runs after render
  useEffect(() => {
    console.log("useEffect fired!!!");

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  // function to handle input change
  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  // filter monsters based on search field
  const filteredMonsters = monsters.filter((monster) => {
    return monster.name.toLocaleLowerCase().includes(searchField);
  });

  // console.logs
  // console.log(searchField);
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
};

export default App;
