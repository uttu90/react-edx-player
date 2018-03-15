const PLAY = 'player/play';
const PAUSE = 'player/pause';
const SET_MODE = 'player/set-mode';
const SET_DURATION = 'player/set-duration';
const SET_CURRENT_TIME = 'player/set-current-time';
const SET_PLAYER = 'player/set-player';


export function play() {
  return {
    type: PLAY
  }
}

export function pause() {
  return {
    type: PAUSE
  }
}

export function setMode(mode) {
  return {
    type: SET_MODE,
    payload: {
      mode
    }
  }
}

export function setDuration(duration) {
  return {
    type: SET_DURATION,
    payload: {
      duration
    }
  }
}

export function setCurrenTime(time) {
  return {
    type: SET_CURRENT_TIME,
    payload: {
      time
    }
  }
}

export function setPlayer(playerRef) {
  return {
    type: SET_PLAYER,
    payload: {
      playerRef
    }
  }
}

function playerReducer(state={}, action) {
  switch (action.type) {
    case PLAY:
      return { ...state, playing: true };

    case SET_PLAYER:
      return { ...state, playerRef: action.payload.playerRef };
    
    case PAUSE:
      return { ...state, playing: false };

    case SET_MODE: {
      return { ...state, mode: action.payload.mode };
    }
    
    case SET_DURATION:
      return { ...state, duration: action.payload.duration };

    case SET_CURRENT_TIME:
      return { ...state, currentTime: action.payload.time };

    default:
      return state;
  }
}

export default playerReducer;