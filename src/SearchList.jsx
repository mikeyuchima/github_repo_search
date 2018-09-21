import React, { Component } from "react";
import Search from "./Search.jsx";

const SearchList = props => (
  <table>
    <colgroup>
      <col />
      <col />
      <col />
    </colgroup>
    <thead>
      <tr>
        <th>Name</th>
        <th>Language</th>
        <th>Latest Tag</th>
      </tr>
    </thead>
    {props.search_data.map((search, index) => (
      <Search
        name={search.name}
        language={search.language}
        latest_tag={search.latest_tag}
        html={search.html}
        add_favourite={props.add_favourite}
        index={index}
      />
    ))}
  </table>
);

export default SearchList;
