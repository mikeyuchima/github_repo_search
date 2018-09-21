import React, { Component } from "react";
import Favourites from "./Favourites.jsx";

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
    {props.favourites_data.map((search, index) => (
      <Favourites
        name={search.name}
        language={search.language}
        latest_tag={search.latest_tag}
        html={search.html}
        remove_favourite={props.remove_favourite}
        index={index}
      />
    ))}
  </table>
);

export default SearchList;
