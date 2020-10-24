import React from 'react';
import './Track.css'

class Track extends React.Component {
    render() {
        return (
        <div>
          <section>
              <h4>Song Name 1</h4>
              <p>Artist | Album</p>
              <hr/>  
          </section>
        
          <section>
              <h4>Song Name 2</h4>
              <p>Artist 2 | Album 3</p>
              <hr/>  
          </section>
        </div>
         
        )
    }
        
    
}

export default Track;