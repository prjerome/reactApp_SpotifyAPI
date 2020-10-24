import React from 'react';
import './Playlist.css';
import TrackList from '../TrackList/TrackList';


class Playlist extends React.Component {
    render() {
        return (
            <div>
                <TrackList/>
                <button>Save to Spotify</button>
            </div>

        )
    }
}

export default Playlist;