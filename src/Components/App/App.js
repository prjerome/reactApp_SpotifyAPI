import React from 'react';
import './App.css';
import Searchbar from '../SearchBar/Searchbar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

function App() {
  return (
    <div className="App">
      <h1>Songs Search</h1>
      <Searchbar/>
      <SearchResults/>
      <Playlist />
    </div>
  );
}

export default App;
