import React, {useState} from "react";
import "./SearchBar.css";

export default function SearchBar(props) {
    const [term, setTerm] = useState('');

    function handleChange(event) {
        event.preventDefault();
        setTerm(event.target.value);
    }

    return (
        <div className="SearchBar">
            <input 
                type='text'  
                name='search'
                placeholder='Search for music'
                value={term}
                onChange={handleChange}
            />
            <button onClick={() => props.onSearch(term)} >SEARCH</button>
        </div>
    )
};