import React, { Component } from 'react';
import Editor from '../components/Composer';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { play, pause, setMode } from '../duck/playerReducer';
import { addLine, addBulk, removeLine, setTime, setText, completeComposing } from '../duck/lyricComposerReducer';

class Composer extends Component {
  render() {
    return (
      <Editor {...this.props} />
    );
  }
}

function mapStateToProps(state) {
  return {
    lyrics: state.composer,
    currentTime: state.player.currentTime,
    playerRef: state.player.playerRef,
    mode: state.player.mode
  }
}

function mapDispatchToProps(dispatch) {
  return {
    play: compose(dispatch, play),
    pause: compose(dispatch, pause),
    setMode: compose(dispatch, setMode),
    addLine: compose(dispatch, addLine),
    removeLine: compose(dispatch, removeLine),
    addBulk: compose(dispatch, addBulk),
    setTime: compose(dispatch, setTime),
    setText: compose(dispatch, setText),
    submit: compose(dispatch, completeComposing)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Composer);