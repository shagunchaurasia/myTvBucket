import React, { Component } from "react";
import "./SearchBox.component.css";
function SearchBox(props) {
  return (
    <div className="searchBox">
      <input
        type="search"
        className="searchInput"
        placeholder="Search TV show"
        onChange={props.changeHandler}
      ></input>
    </div>
  );
}
export default SearchBox;
