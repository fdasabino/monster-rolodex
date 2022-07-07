import React from "react";
import "./SearchBox.css";

const SearchBox = ({ className, placeholder, onChangeHandler }) => {
  return (
    <div>
      <input
        type="search"
        className={className}
        placeholder={placeholder}
        // onChange search function
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default SearchBox;
