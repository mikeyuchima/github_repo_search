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
    this.props.add_favourite(fave_data);
  };
  render() {
    return (
      <tbody>
        <tr>
          <td>
            <a href={this.props.html}>{this.props.name}</a>
          </td>
          <td>{this.props.language}</td>
          <td>{this.props.latest_tag}</td>
          <td>
            <button type="button" onClick={this.handleAdd}>
              Add
            </button>
          </td>
        </tr>
      </tbody>
    );
  }
}

export default Search;
