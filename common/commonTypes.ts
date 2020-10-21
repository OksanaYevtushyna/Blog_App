export interface PostsType {
    id: number
    postId: number
    body: string
}

export interface PostInfoType {
    id: number
    title: string | null
    body: string | null
    comments: Array<PostsType>
}

export interface PostData {
    id: number | null
    title: string | null
    body: string | null
}

export interface NewPostType {
    title: string | null
    body: string | null
}