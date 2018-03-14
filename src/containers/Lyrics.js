import React, { Component } from 'react';
import LyricLine from '../components/LyricLine';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { play, pause } from '../duck';
import lyrics from '../constants/lyrics';


class Lyrics extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 0,
      hovering: false
    }

    this.listRefs = lyrics.map(() => null);
    this.hover = this.hover.bind(this);
    this.blur = this.blur.bind(this);
    this.focus = this.focus.bind(this);
  }
  
  componentWillReceiveProps(nextProps) {
    const { currentTime } = nextProps;
    const data = lyrics.filter(lyric => parseFloat(lyric.start) < currentTime);
    this.setState({
      activeIndex: data.length
    })
    const { hovering } = this.state;
    if (hovering) {
      (data.length % 3 === 0) && this.focus(data.length);
    } else {
      this.focus(data.length);
    }
  }
  
  render() {
    const { activeIndex } = this.state;
    return (
      <div
        className="lyric"
        onMouseEnter={this.hover}
        onMouseLeave={this.blur}
      >
        {
          lyrics.map(({start, value}, index) => (
            <LyricLine
              key={index}
              active={index ===  activeIndex - 1}
              onClickHandler={this.onClickHandler(parseFloat(start))}
              onRef={item => this.listRefs[index] = item}
              value={value}
            />
          ))
        }
      </div>
    );
  }

  onClickHandler(time) {
    return () => this.props.playerRef.seekTo(time);
  }

  hover() {
    this.setState({
      hovering: true
    })
  }

  blur() {
    this.setState({
      hovering: false
    })
  }

  focus(index) {
    this.listRefs[index] && (
      this.listRefs[index].scrollIntoView({
        block: 'center'
      })
    );
  }
}


function mapStateToProps(state) {
  return {
    currentTime: state.currentTime,
    playerRef: state.playerRef
  }
}

function mapDispatchToProps(dispatch) {
  return {
    play: compose(dispatch, play),
    pause: compose(dispatch, pause),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Lyrics);