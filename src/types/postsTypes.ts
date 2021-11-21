export interface IPost {
  id: number,
  title: string,
  body: string
}

export interface IPostsState {
  posts: any[],
  isLoading: boolean,
  error: null | string,
}

export interface IPostsAction {
  type: string,
  payload?: any
}

export enum PostsActionTypes {
  SET_LOADING = 'SET_LOADING',
  SET_ERROR = 'SET_ERROR',
  SET_POSTS = 'SET_POSTS',
  SET_TOTAL_COUNT_POSTS = 'SET_TOTAL_COUNT_POSTS',
  REMOVE_POST = 'REMOVE_POST',
  SET_PAGE = 'SET_PAGE',
  ADD_POST = 'ADD_POST',
  EDIT_POST = 'EDIT_POST'
}

export interface SetLoadingAction {
  type: PostsActionTypes.SET_LOADING,
  payload: boolean
}
export interface SetErrorAction {
  type: PostsActionTypes.SET_ERROR,
  payload: string | null
}
export interface SetPageAction {
  type: PostsActionTypes.SET_PAGE,
  payload: number
}
export interface SetTotalCountPosts {
  type: PostsActionTypes.SET_TOTAL_COUNT_POSTS,
  payload: number
}
export interface SetPostsAction {
  type: PostsActionTypes.SET_POSTS,
  payload: any[]
}
export interface RemovePostAction {
  type: PostsActionTypes.REMOVE_POST,
  payload: string
}
export interface AddPostAction {
  type: PostsActionTypes.ADD_POST,
  payload: Object
}
export interface EditPostAction {
  type: PostsActionTypes.EDIT_POST,
  payload: IPost
}

export type PostsActions =
  SetLoadingAction
  | SetErrorAction
  | SetPostsAction
  | RemovePostAction
  | AddPostAction
  | EditPostAction
