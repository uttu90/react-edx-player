import { combineReducers } from 'redux';
import playerReducer from './playerReducer';
import lyricComposerReducer from './lyricComposerReducer';


export default combineReducers({
  player: playerReducer,
  composer: lyricComposerReducer
});