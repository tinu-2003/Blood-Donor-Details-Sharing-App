import { Box, Typography } from '@mui/material'
import React from 'react'

function Footer() {
  return (
    <>
    
    <Box sx={{backgroundColor:' rgba(54, 54, 56, 0.88)' , width:'100%' ,height:'90px',marginTop:'40px' ,textAlign:'center',padding:5}}>

      <Typography variant='h6' sx={{fontSize:15 , fontWeight:600,color:'white'}} >
        © 2025 LifeDrop. All rights reserved. | Giving Hope, One Donation at a Time.
      </Typography>
    </Box>
    </>
  )
}

export default Footer