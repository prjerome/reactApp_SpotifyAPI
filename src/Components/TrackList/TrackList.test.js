import React from 'react';
import ReactDOM from 'react-dom';
import TrackList from './TrackList';

it('TrackList component renders without throwing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TrackList />, div);
})