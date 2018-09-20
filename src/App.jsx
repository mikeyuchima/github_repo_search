import React, { Component } from "react";
import "./App.css";
import SearchList from "./SearchList.jsx";

const API = "https://api.github.com/search/repositories?q=";
const TOKEN = "4a5203d182af7404ebc8f32944d8a588aabda641";
const API2 = `https://api.github.com/repos/${full_name}/releases/latest`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
      favourites: "",
      query: []
    };
  }

  handleChange = evt => {
    this.setState({ search: evt.target.value });
    console.log(this.state.search);
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const url = API + this.state.search;
    const rows = ["full_name", "html_url", "language"];
    fetch(url, {
      headers: {
        Authorization: `token ${TOKEN}`
      },
      credentials: "same-origin"
    })
      .then(response => response.json())
      .then(data => {
        let query = JSON.stringify(data.items, rows);
        query = JSON.parse(query);
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
