import Link from 'next/link'
import { useState } from 'react';
import { connect } from 'react-redux';
import { NewPostType } from '../../common/commonTypes';
import { createPostThunk } from '../../redux/actions/main'
import { AppStateType } from '../../redux/reducers/rootReducer';
import styled from 'styled-components'

interface newPostType {
    createPostThunk: (data: NewPostType) => void
}


const NewPost = ({createPostThunk}: newPostType) => {
    const[title, setTitle] = useState('')
    const[body, setBody] = useState('')
    const createPost = () => {
        let data: NewPostType = {title, body}
        createPostThunk(data)
    }
    
    return(
        <Flex>
            <Flex>
               <Input type="text" placeholder='Title' value={title} onChange={(e) => setTitle( e.target.value)}/>
               <Textarea name="comment" placeholder='write your post' value={body} onChange={(e) => setBody( e.target.value)}></Textarea>
               <ButtonArea onClick={createPost}>Create Post</ButtonArea>
            </Flex>

            <Link href="/">
              <Button>Back to home</Button>
            </Link>
        </Flex>
    )
}

const mapStateToProps = (state: AppStateType) => {
    return{
        posts: state.main.posts
    }
}



const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  width: 120px;
  height: 65px;
`;

const ButtonArea = styled.button`
  border-radius: 3px;
  border: 2px solid black;
  color: white;
  background-color: black;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  width: 120px;
  height: 65px;
`;

const Input = styled.input`
  color: palevioletred;
  background: papayawhip;
  border: none;
  border-radius: 3px;
  height: 40px;
  width: 200px;
  margin: 10px;
`;

const Textarea = styled.textarea`
  color: palevioletred;
  background: papayawhip;
  border: none;
  border-radius: 5px;
  height: 80px;
  width: 200px;
  margin: 10px;
`;

const Flex = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
`
export default connect(mapStateToProps, {createPostThunk})(NewPost)