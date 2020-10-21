import { connect } from 'react-redux'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {setPostsDataThunk} from '../redux/actions/main'
import { useEffect } from 'react'
import Link from 'next/link'
import { PostData } from '../common/commonTypes'
import {AppStateType} from '../redux/reducers/rootReducer'

interface HomeProps {
  posts: Array<PostData>
  setPostsDataThunk: () => void
}

const PostItem = ({id, title}: PostData) => {
  return(
    <div className='postItem'><Link href={`/posts/:${id}`}><a>{title}</a></Link></div>
  )
}

function Home({posts, setPostsDataThunk}: HomeProps) {
  useEffect(() => {
    setPostsDataThunk()
  }, [setPostsDataThunk])

  return (
    <div className={styles.container}>
      <Head>
        <title>Blog App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {!posts && <div>loading...</div>}
      {posts && posts.map(post => <PostItem key={post.id} id={post.id} title={post.title} body={post.body}/>)}

      <div>
        <h2><Link href="/posts/new"><a>Write a post</a></Link></h2>
      </div>
    </div>
  )
}

const mapStateToprops = (state: AppStateType) => {
  return{
    posts: state.main.posts
  }
}
export default connect(mapStateToprops, { setPostsDataThunk})(Home)
