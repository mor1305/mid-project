import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useData } from "../../../../context/Context";
import "./searchBar.css"

export default function SearchBar() {
  const { setInputValue } = useData()
  
  return (
    <div className="SearchBar">
      <form>
        <input
          type="text"
          className="input-search"
          placeholder="Search..."
          onChange={({ target: { value } }) => setInputValue(value)}
        />

        <Link to={"/search-results"}>
          <button className="search">Go</button>
        </Link>
      </form>
    </div>
  );
};
