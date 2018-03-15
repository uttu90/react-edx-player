const ADD_LINE = 'player/compose/add-line';
const ADD_BULK = 'player/compose/add-bulk';
const REMOVE_LINE = 'player/compose/remove-line';
const SET_TIME = 'player/compose/set-time';
const SET_TEXT = 'player/compose/set-text';
const COMPLETE = 'player/compose/complete';

export function addLine(index, text) {
  return {
    type: ADD_LINE,
    payload: {
      index,
      text
    }
  }
}

export function addBulk(text) {
  return {
    type: ADD_BULK,
    payload: {
      text
    }
  }
}

export function removeLine(index) {
  return {
    type: REMOVE_LINE,
    payload: {
      index
    }
  }
}

export function setTime(index, time) {
  return {
    type: SET_TIME,
    payload: {
      index,
      time
    }
  }
}

export function setText(index, text) {
  return {
    type: SET_TEXT,
    payload: {
      index, 
      text
    }
  }
}

export function completeComposing() {
  return {
    type: COMPLETE
  }
}

export default function lyricComposerReducer(state = [], action) {
  switch (action.type) {
    case ADD_LINE: {
      const stateBefore = state.slice(0);
      const { index, text } = action.payload;
      stateBefore.splice(index, 0, {
        time: '',
        text
      })
      return stateBefore;
    }
    
    case ADD_BULK: {
      const { text = [] } = action.payload;
      const lyricLines = text.map(lyric => ({
        time: '',
        text: lyric
      }));
      return [
        ...state,
        ...lyricLines
      ];
    }

    case SET_TIME: {
      const { index, time } = action.payload;
      return state.map((lyric, lyricIndex) => {
        if (index !== lyricIndex) {
          return lyric;
        }
        return {
          ...lyric,
          time
        }
      });
    }

    case SET_TEXT: {
      const { index, text } = action.payload;
      return state.map((lyric, lyricIndex) => {
        if (index !== lyricIndex) {
          return lyric;
        }
        return {
          ...lyric,
          text
        }
      });
    }
    
    case REMOVE_LINE: {
      const { index } = action.payload;
      return [
        ...state.slice(0, index),
        ...state.slice(index + 1)
      ];
    }

    default:
      return state;
  }
}