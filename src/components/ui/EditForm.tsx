import { Button, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { FC } from 'react'
import { useForm } from "react-hook-form"
import { useDispatch } from 'react-redux'
import { editPost } from '../../store/reducers/posts/actions'
import { IPost } from '../../types/postsTypes'

export interface PostData {
  id: number
  title: string,
  body: string
}

interface EditFormProps {
  post: IPost,
  setIsShowModal(setIsShowModal: boolean): void,
}

const EditForm: FC<EditFormProps> = ({ post, setIsShowModal }) => {
  const dispatch = useDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<PostData>({
    defaultValues: {
      title: post.title,
      body: post.body
    },
    mode: 'onChange'
  })

  const onSubmit = (data: PostData) => {
    dispatch(editPost({id: post.id, ...data}))
    setIsShowModal(false)
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', width: '600px', maxWidth: '100%' }}>
      <Typography
        sx={{ mb: 4, textAlign: 'center' }}
        variant="h4"
        component="span"
      >
        Edit post
      </Typography>
      <TextField
        sx={{ mb: 2 }}
        size='small'
        label='Type post title'
        {...register('title',
          {
            required: 'Required field',
            maxLength: {
              value: 1000,
              message: 'Title must be no more than 1000 characters'
            }
          })
        }
      />
      {errors.title && <p style={{ color: 'red', marginBottom: '15px' }}>{errors.title.message}</p>}
      <TextField
        sx={{ mb: 2 }}
        label="Type post body"
        multiline
        rows={4}
        {...register('body',
          {
            required: 'Required field',
            maxLength: {
              value: 1000,
              message: 'Body must be no more than 1000 characters'
            }
          })
        }
      />
      {errors.body && <p style={{ color: 'red', marginBottom: '15px' }}>{errors.body.message}</p>}
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          variant="contained"
          onClick={handleSubmit(onSubmit)}
        >
          Edit post
        </Button>
      </Box>
    </Box>
  )
}

export default EditForm
