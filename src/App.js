import React, { Component } from 'react';
import './App.css';
import Player from './containers/Player';
import Lyrics from './containers/Lyrics';
import Composer from './containers/Composer';


class App extends Component {  
  render() {
    return (
      <div className="container">
        <div className="player">
          <Player
            url="https://www.youtube.com/watch?v=JGwWNGJdvx8"
            controls
            width="70%"
            height="100%"
          />
          <Lyrics />
        </div>
        <Composer />
      </div>
    );
  }
}

export default App;
