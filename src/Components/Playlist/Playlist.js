import React from 'react';
import './Playlist.css';
import TrackList from '../TrackList/TrackList';


class Playlist extends React.Component {
    render() {
        return (
            <div>
                <TrackList/>
                <input className="playlistInput" type="submit" value="Save to Spotify"/>
            </div>

        )
    }
}

export default Playlist;