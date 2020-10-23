import React from 'react';
import ReactDOM from 'react-dom';
import Playlist from './Playlist';

it('Playlist component renders without throwing', () => {
    const div = document.createElement("div");
    ReactDOM.render(<Playlist />, div);
})