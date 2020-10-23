import React from 'react';
import ReactDOM from 'react-dom';
import SearchResults from './SearchResults';

it('SearchResults component renders without throwing', () => {
const div = document.createElement('div');
    ReactDOM.render(<SearchResults />, div );
})