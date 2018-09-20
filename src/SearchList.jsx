import React, { Component } from "react";
import Search from "./Search.jsx";

const SearchList = props => (
  <section>
    {props.searchData.map(search => (
      <Search name={search.full_name} language={search.language} />
    ))}
  </section>
);

export default SearchList;
