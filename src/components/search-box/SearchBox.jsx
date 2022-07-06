import React, { Component } from "react";
import "./SearchBox.css";

export default class SearchBox extends Component {
  render() {
    return (
      <div>
        <input
          type="search"
          className={this.props.className}
          placeholder={this.props.placeholder}
          // onChange search function
          onChange={this.props.onChangeHandler}
        />
      </div>
    );
  }
}
