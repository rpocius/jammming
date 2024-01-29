import React, { useState, useEffect } from "react";
import "./SearchBar.css";

export default function SearchBar(props) {
  const [term, setTerm] = useState("");

  useEffect(() => {
    props.onSearch(term);
  }, [term, props]);

  function handleChange(event) {
    setTerm(event.target.value);
  }

  return (
    <div className="SearchBar">
      <input
        type="text"
        name="search"
        placeholder="Search for music"
        value={term}
        onChange={handleChange}
        autoFocus
      />
    </div>
  );
}