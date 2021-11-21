import React, { FC, useEffect, useState } from 'react'
import { Grid, Typography } from '@mui/material'
import PostItem from './PostItem'
import CustomModal from './ui/CustomModal'
import EditForm from './ui/EditForm'
import Loader from './ui/Loader'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { useDispatch } from 'react-redux'
import { fetchPosts } from '../store/reducers/posts/actions'
import { IPost } from '../types/postsTypes'

const PostsList: FC = () => {
  const { posts, isLoading, error } = useTypedSelector(state => state.posts)
  const dispatch = useDispatch()

  const [isShowModal, setIsShowModal] = useState(false)
  const [editPost, setEditPost] = useState(null)

  const handleEdit = (post: IPost) => {
    setIsShowModal(true)
    setEditPost(post)
  }

  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])

  if (isLoading) {
    return <Loader />
  }
  
  if (error) {
    return <h1 style={{ color: 'red' }}>{error}</h1>
  }
  
  if (!posts.length) {
    return (
      <Typography
        variant="h3"
        component="span">
        Список пуст
      </Typography>
    )
  }

  return (
    <>
      {
        <Grid
          container
          spacing={4}
          sx={{
            mb: 3,
          }}
        >
          {posts.map(post => (
            <PostItem
              key={post.id}
              post={post}
              onEdit={() => handleEdit(post)}
            />
          ))}
        </Grid>
      }
      {/* {!posts.length > 0 && } */}
      <CustomModal
        isShowModal={isShowModal}
        setIsShowModal={setIsShowModal}
      >
        <EditForm
          post={editPost}
          setIsShowModal={setIsShowModal}
        />
      </CustomModal>
    </>
  )
}

export default PostsList
