import React, { FC, useState } from 'react'
import { Box, AppBar, Toolbar, Typography, Button } from '@mui/material'
import CustomModal from './ui/CustomModal'
import AddForm from './ui/AddForm'

const Header: FC = () => {
  const [isShowModal, setIsShowModal] = useState(false)

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          sx={{ mb: 8, backgroundColor: '#757de8' }}
        >
          <Toolbar>
            <Typography
              variant="h4"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              Blog
            </Typography>
            <Button
              color="inherit"
              onClick={() => setIsShowModal(true)}
            >
              Create post
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <CustomModal
        isShowModal={isShowModal}
        setIsShowModal={setIsShowModal}
      >
        <AddForm
          setIsShowModal={setIsShowModal}
        />
      </CustomModal>
    </>
  )
}

export default Header
