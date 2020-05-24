import { combineReducers } from 'redux';
import postReducer from './postReducer';

// Combile all the reducer in the app into one
export default combineReducers({
    posts: postReducer
});