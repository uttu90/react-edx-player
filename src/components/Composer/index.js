import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import BulkLine from './BulkLine';
import Line from './Line';
import './index.css'


const TOGGLE_BUTTON = {
  'playing': {
    icon: 'chevron-down',
    text: 'expand composer'
  },
  'composing': {
    icon: 'chevron-up',
    text: 'hide composer'
  }
}


class Composer extends Component {
  constructor(props) {
    super(props);
    
    this.toggleComposing = this.toggleComposing.bind(this);
  }

  render() {
    const { addBulk, mode = 'playing', lyrics=[], ...remainProps } = this.props;
    return (
      <div className="composer">
        <div className="composer__toggle" onClick={this.toggleComposing}>
          <FontAwesome className="composer__toggle__btn" name={TOGGLE_BUTTON[mode].icon} />
          <span>{TOGGLE_BUTTON[mode].text}</span>
        </div>
        {
          mode === 'composing' && <div className="composer__editor">
            <BulkLine addBulk={addBulk} />
            {
              lyrics.map((lyric, index) => (
                <Line 
                  key={index}
                  lyric={lyric}
                  index={index}
                  {...remainProps}
                />
              ))
            }
          </div>
        }
      </div>
    );
  }

  toggleComposing() {
    const { mode, setMode } = this.props;
    if ( mode === 'composing' ) {
      setMode('playing');
    } else {
      setMode('composing');
    }
  }
}

export default Composer;