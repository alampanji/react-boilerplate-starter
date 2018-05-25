import {
    DETAIL_USER,
    DETAIL_POST_USER
} from './action';

const initialState = {
    detail:{},
    posts:[]
}

export default (state = initialState, action) => {
    switch(action.type){
        case DETAIL_USER:
            const newState = Object.assign({}, state);
            newState.detail = action.payload;  
            newState.posts = state.posts;  
            return newState;  
        case DETAIL_POST_USER:   
            const newData = Object.assign({}, state);
            newData.detail = state.detail;  
            newData.posts = action.payload;  
            return newData;   
        default:
            return state;
    }
}