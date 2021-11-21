import { IPostsState, PostsActions, PostsActionTypes } from "../../../types/postsTypes"

const initialState: IPostsState = {
  posts: [],
  isLoading: false,
  error: '',
}

export default function postsReducer(state = initialState, action: PostsActions): IPostsState {
  switch (action.type) {
    case PostsActionTypes.SET_POSTS:
      return {
        ...state,
        posts: action.payload
      }
    case PostsActionTypes.SET_LOADING:
      return {
        ...state,
        isLoading: action.payload
      }
    case PostsActionTypes.SET_ERROR:
      return {
        ...state,
        error: action.payload,
      }
    case PostsActionTypes.REMOVE_POST:
      const filteredPosts = state.posts.filter(post => {
        return post.id !== action.payload
      })

      return {
        ...state,
        posts: filteredPosts,
      }
    case PostsActionTypes.ADD_POST:
      return {
        ...state,
        posts: [action.payload, ...state.posts]
      }
    case PostsActionTypes.EDIT_POST:
      const editedPosts = state.posts.filter(post =>
        post.id === action.payload.id
          ? Object.assign(post, action.payload)
          : post
      )

      return { ...state, posts: editedPosts }

    default:
      return state
  }
}
