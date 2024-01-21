import React, {useState} from "react";
import "./SearchBar.css";

export default function SearchBar() {
    const [term, setTerm] = useState('');

    function handleChange(e) {
        e.preventDefault();
        setTerm(e.target.value);
    }

    function search(props) {
        props.onSearch(term);
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
            <button onClick={() => setTerm} >SEARCH</button>
        </div>
    )
};