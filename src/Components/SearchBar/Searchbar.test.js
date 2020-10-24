import React from 'react';  
import ReactDOM from 'react-dom';
import Searchbar from './Searchbar';

it('checks if Searchbar component renders without throwing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Searchbar/>, div);
});

