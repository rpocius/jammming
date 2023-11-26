import React from 'react';
import "./SearchResults.css";
import Tracklist from "../Tracklist/Tracklist";

export default function SearchResults(props) {
    return (
        <div className="SearchResults">
        <h2>Results</h2>
        <Tracklist onAdd={props.onAdd} tracks={props.searchResults} />
      </div>
    );
};