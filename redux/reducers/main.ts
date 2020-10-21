import { PostData, PostInfoType } from './../../common/commonTypes';
import * as type from '../types'
import { ActionTypes } from '../actions/main';

type Nullable<T> = null | T

const initialState = {
    posts: null as Nullable<PostData>, 
    postInfo: null as Nullable<PostInfoType>
}

type StateType = typeof initialState

const mainReducer = (state = initialState, action: ActionTypes): StateType => {
    switch (action.type) {
        case type.SET_POSTS:
            return{
                ...state, posts: action.payload
            }
        case type.GET_POST_DETAIL: 
            return{
                ...state, postInfo: action.payload
            }
        default:
            return {...state}
    }
}


export default mainReducer