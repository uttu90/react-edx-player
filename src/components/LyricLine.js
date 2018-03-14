import React from 'react';

export default function(props) {
  const { active, onClickHandler, onRef, value } = props;
  return (
    <div className="lyric-item"
      ref={onRef}
      onClick={onClickHandler}
      style={{fontWeight: active ? 'bold' : 'normal'}}
    >
      { value }
    </div>
  )
}