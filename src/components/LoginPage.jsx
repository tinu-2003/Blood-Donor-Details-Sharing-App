import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Input } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
function LoginPage() {


     const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

//   admin login
  const [userName,setUserName]=useState('')
  console.log(userName);
  
  const [userPassword,setUserPassword]=useState('')
  console.log(userPassword);
  
//   navigation

  const navigate = useNavigate() 

const loginAdmin =()=>{
if(userName && userName=="admin@123" && userPassword && userPassword=="0000"){
    navigate("/adminpage")
  

    Swal.fire({
  title: 'login sucessFull!',
  text: '.',
  icon: 'success',
  confirmButtonText: 'Okay'
})
}
else{
     Swal.fire({
  title: 'login UnsucessFull!',
  text: '.',
  icon: 'error',
  confirmButtonText: 'Cool'
})
}
}


  return (
    <div>

       <div>
      <Button onClick={handleOpen} variant="outlined" color="error">Login</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
       <Box
      sx={{
        width: { xs: "90%", sm: 400 },
        mx: "auto",
        mt: 8,
        p: 4,
        bgcolor: "background.paper",
        borderRadius: 3,
        boxShadow: 3,
        display: "flex",
        flexDirection: "column",
        gap: 3,
        textAlign: "center",
      }}
    >
      <Typography variant="h5" sx={{ fontWeight: 700 }}>
       Admin Login
      </Typography>

      {/* Username Field */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <Typography variant="body1" sx={{ fontWeight: 500 }}>
          Username
        </Typography>
        <Input
          type="text"
          placeholder="Enter your username"
          onChange={(e)=>{setUserName(e.target.value)}}
          sx={{
            px: 2,
            py: 1,
            border: "1px solid",
            borderColor: "grey.400",
            borderRadius: 2,
            "&:focus": {
              borderColor: "primary.main",
              boxShadow: "0 0 5px rgba(25, 118, 210, 0.5)",
            },
          }}
        />
      </Box>

      {/* Password Field */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <Typography variant="body1" sx={{ fontWeight: 500 }}>
          Password
        </Typography>
        <Input
          type="password"
          placeholder="Enter your password"
           onChange={(e)=>{setUserPassword(e.target.value)}}
          sx={{
            px: 2,
            py: 1,
            border: "1px solid",
            borderColor: "grey.400",
            borderRadius: 2,
            "&:focus": {
              borderColor: "primary.main",
              boxShadow: "0 0 5px rgba(25, 118, 210, 0.5)",
            },
          }}
        />
      </Box>

      <Button
        variant="contained"
        color="primary"
        onClick={loginAdmin}
        sx={{
          py: 1.5,
          fontWeight: 600,
          borderRadius: 2,
          textTransform: "none",
          "&:hover": { boxShadow: 4 },
        }}
      >
        Login
      </Button>
    </Box>
      </Modal>
    </div>
    </div>
  )
}

export default LoginPage