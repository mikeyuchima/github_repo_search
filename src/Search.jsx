import React, { Component } from "react";

class Search extends Component {
  handleAdd = evt => {
    evt.preventDefault();
    this.props.add_fave(this.props);
  };
  render() {
    return (
      <section>
        <span>{this.props.name}</span>
        <span>{this.props.language}</span>
        <span>{this.props.latest_tag}</span>
        <span>
          <button type="button" onClick={this.handleAdd}>
            Add
          </button>
        </span>
      </section>
    );
  }
}

export default Search;
