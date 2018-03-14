import React, { Component } from 'react';
import Player from './containers/Player';
import Lyrics from './containers/Lyrics';


class App extends Component {  
  render() {
    return (
      <div className="container">
        <Player
          url="https://www.youtube.com/watch?v=JGwWNGJdvx8"
          controls
          width="70%"
          height="50%"
        />
        <Lyrics />
      </div>
    );
  }
}

export default App;
