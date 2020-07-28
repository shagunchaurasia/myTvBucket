import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import CardList from "./components/CardList/CardList.component";
import SearchBox from "./components/SearchBox/SearchBox.component";
const axios = require("axios");

class App extends Component {
  constructor() {
    super();
    this.state = {
      toDos: [],
      searchString: "",
    };
  }

  componentDidMount() {
    const headers = {
      "Content-Type": "application/json;charset=utf-8",
      Authorization:
        "Bearer " +
        "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMWIxMDEyODU2MGIzZTRmYTJiMWUzMTY1OTQ4YmQ1MyIsInN1YiI6IjVkNTUyYTBiYmM4NjU3NGIzNjJiZTMyMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HUWPGPqnJbEdM1smasewVvnNBk87Ii9BG7OjVcNQl5g",
    };

    axios
      .get("https://api.themoviedb.org/3/tv/37854/similar", {
        headers: headers,
      })
      .then((response) => {
        console.log(response);
        this.setState({ toDos: response.data.results });
      });
  }

  changeHandler = (event) => {
    this.setState({ searchString: event.target.value }, () =>
      console.log(this.state.searchString)
    );
  };
  render() {
    const { toDos, searchString } = this.state;

    const filteredData = toDos.filter((toDo) =>
      toDo.name.toLowerCase().includes(searchString.toLowerCase())
    );
    return (
      <div>
        <h1 className="mainHeading">Watched List </h1>
        <SearchBox changeHandler={this.changeHandler}></SearchBox>
        <CardList data={filteredData}></CardList>
      </div>
    );
  }
}

export default App;
