import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { play, pause, setCurrenTime, setDuration, setPlayer } from '../duck/playerReducer';

class Player extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    const { playing } = this.props;
    const { playing: nextPlaying } = nextProps;

    if (playing !== nextPlaying) {
      return true;
    }
    return false;    
  }

  render() {
    const { 
      currentTime, 
      play, 
      pause, 
      setCurrenTime, 
      setDuration, 
      setPlayer, 
      ...remainProps 
    } = this.props;
    return (
      <ReactPlayer
        ref={this.props.setPlayer}
        {...remainProps}
        onProgress={this.onProgress.bind(this)}
        onPause={this.onPause.bind(this)}
        onPlay={this.onPlay.bind(this)}
        onDuration={this.onDuration.bind(this)}
      />
    )
  }

  onProgress({ playedSeconds }) {
    this.props.setCurrenTime(playedSeconds);
  }

  onPause() {
    const { playing, pause } = this.props;

    if (playing){ 
      pause();
    }
  }

  onPlay() {
    const { playing, play } = this.props;
    if (!playing) {
      play();
    }
  }

  onDuration(duration) {
    this.props.setDuration(duration);
  }
}

function mapStateToProps(state) {
  return {
    playing: state.player.playing,
    currentTime: state.player.currentTime
  }
}

function mapDispatchToProps(dispatch) {
  return {
    play: compose(dispatch, play),
    pause: compose(dispatch, pause),
    setCurrenTime: compose(dispatch, setCurrenTime),
    setDuration: compose(dispatch, setDuration),
    setPlayer: compose(dispatch, setPlayer)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);