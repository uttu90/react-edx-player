import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

class Line extends Component {
  constructor(props) {
    super(props);

    this.handleAdd = this.handleAdd.bind(this);
    this.handleTime = this.handleTime.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.setText = this.setText.bind(this);
  }

  render() {
    const { 
      lyric: {time, text}, 
    } = this.props;
    return (
      <div className="line">
        <button 
          className="line__btn"
          onClick={this.handleTime}
        >
          {
            !!time ? time : (
              <FontAwesome name='clock-o' size="2x" />
            )
          }
        </button>
        <input
          className="line__input"
          ref={input => this.input = input}
          value={text}
          onChange={this.setText}
        />
        <button
          className="line__btn"
          onClick={this.handlePlay}
          
        >
          <FontAwesome name='play' size="2x" />
        </button>
        
        <button 
          className="line__btn"
          onClick={this.handleAdd}
        >
          <FontAwesome name='plus' size="2x" />
        </button>
        <button
          className="line__btn"
          onClick={this.handleRemove}
        >
          <FontAwesome name='trash' size="2x" />
        </button>
      </div>
    );
  }

  handleTime() {
    const { index, currentTime, setTime } = this.props;
    setTime(index, currentTime.toFixed(2));
  }

  handleAdd() {
    const { index, addLine } = this.props;
    addLine(index  , '');
  }

  setText(event) {
    const { index, setText } = this.props;
    setText(index, event.target.value);
  }

  handlePlay() {
    const { lyric: { time }, playerRef } = this.props;
    playerRef.seekTo(parseFloat(time));
  }

  handleRemove() {
    const { index, removeLine } = this.props;
    removeLine(index);
  }
}

export default Line;