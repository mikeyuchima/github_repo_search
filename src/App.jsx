import React, { Component } from "react";
import "./App.css";
import SearchList from "./SearchList.jsx";

const API = "https://api.github.com/search/repositories?q=";
const TOKEN = "4a5203d182af7404ebc8f32944d8a588aabda641";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
      favourites: ""
    };
  }

  handleChange = evt => {
    this.setState({ search: evt.target.value });
    console.log(this.state.search);
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const url = API + this.state.search;
    const rows = ["id", "full_name", "language"];
    fetch(url, {
      headers: {
        Authorization: `token ${TOKEN}`
      },
      credentials: "same-origin"
    })
      .then(response => response.json())
      .then(data => {
        const query = JSON.stringify(data.items, rows);
        this.setState({ query });
      });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My GitHub Faves</h1>
        </header>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              type="text"
              name="search"
              placeholder="Search"
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Search" />
        </form>
        <SearchList searchData={this.state.query} />
      </div>
    );
  }
}

export default App;
