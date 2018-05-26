import {
    LOAD_COMMENT_POST,
    SET_EMPTY_COMMENT
} from './action';

const initialState = {
    data:{},
    comments:[]
}

export default (state = initialState, action) => {
    switch(action.type){
        case LOAD_COMMENT_POST:
            const newState = Object.assign({}, state);
            newState.data = action.post;
            newState.comments = action.comments;
            return newState;
        case SET_EMPTY_COMMENT:
            const newValue = Object.assign({}, state);
            newValue.data = {};
            newValue.comments = [];
            return newValue;  
        default:
            return state;
    }
}