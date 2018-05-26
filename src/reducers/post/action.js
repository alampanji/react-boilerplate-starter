import Constant from '../../config/constant';
export const LOAD_COMMENT_POST = 'LOAD_COMMENT_POST';
export const SET_EMPTY_COMMENT = 'SET_EMPTY_COMMENT';

export const getCommentPost = (post)=>(dispatch)=>{
    fetch(Constant.MASTER_PATH_API + Constant.URL_GET_COMMENT + '?postId=' + post.id)
    .then(response=>response.json())
    .then(data=>{
        dispatch({
            type:LOAD_COMMENT_POST,
            post:post,
            comments:data
        });
    })   
}

export const setEmptyComment = ()=>{
    return{
        type: SET_EMPTY_COMMENT
    }
}