import axios from 'axios'
import { Dispatch } from 'redux'
import { NewPostType, PostData, PostInfoType } from '../../common/commonTypes'
import { AppStateType } from '../reducers/rootReducer'
import * as type from '../types'

export type ActionTypes = setPostType | getPostType | createPostType

type setPostType = {
    type: typeof type.SET_POSTS
    payload: PostData
} 
const setPosts = (posts: PostData): setPostType => ({type: type.SET_POSTS, payload: posts})

type getPostType = {
    type: typeof type.GET_POST_DETAIL
    payload: PostInfoType
}
const getPostInfo = (postInfo: PostInfoType): getPostType => ({type: type.GET_POST_DETAIL, payload: postInfo})

type createPostType = {
    type: typeof type.CREATE_POST
}

const createPost = (): createPostType => ({type: type.CREATE_POST})

export const setPostsDataThunk = () => async (dispatch: Dispatch<ActionTypes>, getState: () => AppStateType) => {
    let response = await axios.get<PostData>('https://simple-blog-api.crew.red/posts')
    if(response){
        dispatch(setPosts(response.data))
    }
}


export const getPostInfoThunk = (id: string) => async (dispatch: Dispatch<ActionTypes>, getState: () => AppStateType) => {
    let postId = parseFloat(id)
    let response = await axios.get<PostInfoType>(`https://simple-blog-api.crew.red/posts/${postId}?_embed=comments`)
    if(response){
        dispatch(getPostInfo(response.data))
    }
}

export const createPostThunk = (data: NewPostType) => async (dispatch: Dispatch<ActionTypes>, getState: () => AppStateType) => {
    let {title, body } = data
    let response = await axios.post<PostData>('https://simple-blog-api.crew.red/posts', {
        title, body
    })
    if(response.status === 201){
        dispatch(createPost())
    }
    
}