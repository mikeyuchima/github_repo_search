import React, { Component } from "react";
import Search from "./Search.jsx";

const SearchList = props => (
  <section>
    {props.searchData.map((search, index) => (
      <Search
        name={search.name}
        language={search.language}
        latest_tag={search.latest_tag}
        add_fave={props.add_fave}
        index={index}
      />
    ))}
  </section>
);

export default SearchList;
