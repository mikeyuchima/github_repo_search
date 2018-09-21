import React, { Component } from "react";
import Search from "./Search";

const SearchList = props => (
  <section>
    {props.searchData.map((search, index) => (
      <Search
        name={search.name}
        language={search.language}
        latest_tag={search.latest_tag}
        remove_fave={props.remove_fave}
        index={index}
      />
    ))}
  </section>
);

export default SearchList;
