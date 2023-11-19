import React, {useState} from 'react';

export default function SearchBar() {
    const [term, setTerm] = useState('');

    function handleChange(e) {
        //e.preventDefault();
        setTerm(e.target.value);
    }

    return (
        <div className='searchbar'>
            <input 
                type='text'  
                name='search'
                placeholder='Search for music'
                value={term}
                onChange={handleChange}
            />
            <button onClick={() => setTerm} >Search</button>
            <br />
            <p>Your search (temp): {term}</p>
        </div>
    )
};