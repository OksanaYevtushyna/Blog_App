import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import {getPostInfoThunk} from '../../redux/actions/main'
import Link from 'next/link'
import { PostInfoType } from '../../common/commonTypes';
import { AppStateType } from '../../redux/reducers/rootReducer';
import styled, { css } from 'styled-components'


interface PostType {
    postInfo: PostInfoType
    getPostInfoThunk: (postId: string | string[]) => void
}
const Post = ({postInfo, getPostInfoThunk}: PostType) => {
    const routes = useRouter()
    useEffect(() => {
        if(routes.query.postId !== undefined){
            let postIdStr = routes.query.postId
            let postId = postIdStr.slice(1)
            getPostInfoThunk(postId)
        }
    }, [])
    return(
        <div>
            {!postInfo && <div>loading...</div>}
            {postInfo && <div>
                <h3>{postInfo.title}</h3>
                <p>{postInfo.body}</p>
                </div>}
            
            <div>
               <Link href="/">
                 <a><Button>Back to home</Button></a>
               </Link>
            </div>
        </div>
    )
}

const mapStateToProps = (state: AppStateType) => {
    return{
        postInfo: state.main.postInfo
    }
}



const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
`;
export default connect(mapStateToProps, {getPostInfoThunk})(Post)
