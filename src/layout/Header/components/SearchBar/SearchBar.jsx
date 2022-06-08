import { useState, useEffect } from "react";
import "./searchBar.css"

export default function SearchBar() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="SearchBar">
      <input
        type="text"
        className="input-search"
        placeholder="Search..."
        onChange={({ target: { value } }) => setInputValue(value)}
      />
    </div>
  );
};
