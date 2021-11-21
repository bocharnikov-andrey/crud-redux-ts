import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import { Backdrop } from '@mui/material'

interface CustomModalProps {
  isShowModal: boolean,
  setIsShowModal(setIsShowModal: boolean): void,
  children: React.ReactNode
}

const CustomModal: FC<CustomModalProps> = ({ isShowModal, setIsShowModal, children }) => {
  return (
    <div>
      <Modal
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 700,
        }}
        disableEscapeKeyDown={true}
        open={isShowModal}
        onClose={() => setIsShowModal(false)}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4
          }}
        >
          {children}
        </Box>
      </Modal>
    </div>
  )
}

export default CustomModal
