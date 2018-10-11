import React, { Component } from "react";
import "./App.css";
import SearchList from "./SearchList.jsx";
import FavouritesList from "./FavouritesList.jsx";

const API = "https://api.github.com/search/repositories?q=";
const TOKEN = //Your Token Here

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
      favourites: [],
      query: []
    };
  }

  handleChange = evt => {
    this.setState({ search: evt.target.value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.setState({ query: [] });
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
        this.loopQuery(query);
      });
  };

  loopQuery = data => {
    for (let index = 0; index < 10; index++) {
      const element = data[index];
      this.getTagName(element);
    }
  };

  getTagName = query => {
    const url = `https://api.github.com/repos/${
      query.full_name
    }/releases/latest`;
    const rows = ["tag_name"];
    fetch(url, {
      headers: {
        Authorization: `token ${TOKEN}`
      },
      credentials: "same-origin"
    })
      .then(response => response.json())
      .then(data => {
        let repo = JSON.stringify(data, rows);
        repo = JSON.parse(repo);
        let repoData = {
          name: query.full_name,
          language: query.language,
          latest_tag: repo.tag_name,
          html: query.html_url
        };
        if (!this.state.favourites.includes(repoData))
          this.setState({ query: [...this.state.query, repoData] });
      });
  };

  add_favourite = repo => {
    this.setState({ favourites: [...this.state.favourites, repo] });
    var array = [...this.state.query];
    array.splice(repo.index, 1);
    this.setState({ query: array });
  };

  remove_favourite = repo => {
    var array = [...this.state.favourites];
    array.splice(repo.index, 1);
    this.setState({ favourites: array });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My GitHub Favourites</h1>
        </header>
        <section className="Tables">
          <section className="Search">
            <form onSubmit={this.handleSubmit}>
              <label>
                <input
                  className="search"
                  type="text"
                  placeholder="Search"
                  onChange={this.handleChange}
                />
              </label>
              <input className="submit" type="submit" value="Search" />
            </form>
            <SearchList
              search_data={this.state.query}
              add_favourite={this.add_favourite}
            />
          </section>
          <FavouritesList
            className="Favourite"
            favourites_data={this.state.favourites}
            remove_favourite={this.remove_favourite}
          />
        </section>
      </div>
    );
  }
}

export default App;
