import { combineReducers } from 'redux';
import posts from './post';
import user from './user';
import user_list from './user_list';

export default combineReducers({
    user,
    posts,
    user_list
});