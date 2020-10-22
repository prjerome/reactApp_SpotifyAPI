import React from 'react';
import './Searchbar.css';

class SearchBar extends React.Component {
    render() {
        return(
            <div>
                <input placeholder="Enter a song title"/> 
                <button>SEARCH</button>  
            </div>
        )
    }
}

export default SearchBar;