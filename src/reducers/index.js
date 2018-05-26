import { combineReducers } from 'redux';
import posts from './post';
import user from './user';
import user_list from './user_list';
import albums from './albums';

export default combineReducers({
    user,
    posts,
    user_list,
    albums
});