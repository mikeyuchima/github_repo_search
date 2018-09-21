import React, { Component } from "react";

class Search extends Component {
  handleRemove = evt => {
    evt.preventDefault();
    let fave_data = {
      index: this.props.index
    };
    this.props.remove_favourite(fave_data);
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
            <button type="button" onClick={this.handleRemove}>
              Remove
            </button>
          </td>
        </tr>
      </tbody>
    );
  }
}

export default Search;
