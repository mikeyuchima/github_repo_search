import React, { Component } from "react";

class Search extends Component {
  handleAdd = evt => {
    evt.preventDefault();
    let fave_data = {
      name: this.props.name,
      language: this.props.language,
      latest_tag: this.props.latest_tag,
      index: this.props.index
    };
    this.props.add_fave(fave_data);
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
