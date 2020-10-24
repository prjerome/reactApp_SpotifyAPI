import React from 'react';
import Track from '../Track/Track';
class TrackList extends React.Component {
    render() {
        return(
            <div className="container">
                <h1 className="results">Results/ New Playlist</h1>
                <Track />
            </div>
        )
    }
}

export default TrackList;