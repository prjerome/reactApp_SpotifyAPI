import React from 'react';
import './Searchbar.css';

class SearchBar extends React.Component {
    constructor(props) {
        super (props);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearch(e) {
        const userSearchQuery = e.target.value;
    }

    render() {
        return(
            <div>
                <input onChange={this.handleSearch} type="text" placeholder="Enter a song title"/>
                <input type= "submit"  value= "SEARCH" /> 
            </div>
        )
    }
}

export default SearchBar;