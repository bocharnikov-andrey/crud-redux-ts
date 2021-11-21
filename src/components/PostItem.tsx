import React, { FC } from 'react'
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material"
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import { useDispatch } from 'react-redux'
import { removePost } from '../store/reducers/posts/actions'
import { IPost } from '../types/postsTypes'

interface PostItemProps {
  post: IPost,
  onEdit(): void
}

const PostItem: FC<PostItemProps> = ({ post, onEdit }) => {
  const dispatch = useDispatch()

  const handleRemove = (id: number) => {
    if (window.confirm('Are you sure?')) {
      dispatch(removePost(id))
    }
  }

  return (
    <>
      <Grid item xs={12} sm={6} md={4} xl={3} >
        <Card
          sx={{
            border: '1px solid gray',
          }}
        >
          <CardMedia
            component="img"
            alt="green iguana"
            height="200"
            image={`https://picsum.photos/200/300?random=${post.id}`}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div" sx={{ height: '80px', lineHeight: '25px', mb: 3 }}>
              {post.title}
            </Typography>
            <Typography variant="body1" component="p" color="text.secondary"
              sx={{ height: '160px', overflowY: 'auto' }} className='body-post'>
              {post.body}
            </Typography>
          </CardContent>
          <CardActions
            sx={{
              display: 'flex',
              justifyContent: 'center',
              backgroundColor: '#f6f6f6'
            }}>
            <Button
              size="small"
              onClick={onEdit}
            >
              <EditIcon />
            </Button>
            <Button
              size="small"
              color='error'
              onClick={() => handleRemove(post.id)}
            >
              <DeleteIcon />
            </Button>
          </CardActions>
        </Card>
      </Grid >
    </>
  )
}

export default PostItem
