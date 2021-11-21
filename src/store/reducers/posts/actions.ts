import { IPost } from './../../../types/postsTypes';
import { Dispatch } from "redux"
import { PostData } from "../../../components/ui/AddForm"

export const SET_LOADING = 'SET_LOADING'
export const SET_ERROR = 'SET_ERROR'
export const SET_POSTS = 'SET_POSTS'
export const REMOVE_POST = 'REMOVE_POST'
export const ADD_POST = 'ADD_POST'
export const EDIT_POST = 'EDIT_POST'

export const setLoading = (status: boolean) => {
  return {
    type: SET_LOADING,
    payload: status
  }
}
export const setPosts = (posts: any[]) => {
  return {
    type: SET_POSTS,
    payload: posts
  }
}
export const setError = (error: string) => {
  return {
    type: SET_ERROR,
    payload: error
  }
}
export const fetchPosts = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(setLoading(true))
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=15`)
      const posts = await res.json()
      dispatch(setPosts(posts))
    } catch (e) {
      dispatch(setError('Ошибка при загрузке'))
    } finally {
      dispatch(setLoading(false))
    }
  }
}
export const removePost = (id: number) => {
  return {
    type: REMOVE_POST,
    payload: id
  }
}
export const addPost = (post: PostData) => {
  const id = Math.random() + post.body.length
  const image=`https://picsum.photos/200/300?random=$${post.title.length}`

  const newPost = {
    id: id,
    image: image,
    ...post
  }

  console.log(newPost)

  return {
    type: ADD_POST,
    payload: newPost
  }
}
export const editPost = (post: IPost) => {
  console.log(post)
  return {
    type: EDIT_POST,
    payload: post
  }
}