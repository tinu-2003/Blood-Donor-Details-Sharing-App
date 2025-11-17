import React, { useState } from "react";
import { Button, Modal, Box, Typography } from "@mui/material";
import { getuserbyid } from "../services/allAPIs";

function IssueResolve({userid}) {
 console.log(userid);

 const getuser = async(userid)=>{
        const response =getuserbyid(userid)
        console.log(response);
        
 }
 
    const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: 2,
  boxShadow: 24,
  p: 3,
};

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);







  return (
    <>
   <Button
  variant="outlined"
  color="error"
  onClick={() => {
    getuser(); 
    handleOpen();    
  }}
>
  Resolve Now
</Button>

      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography variant="h6" mb={2}>
            Resolve User
          </Typography>

          {/* {user ? (
            <>
              <Typography><b>Name:</b> {user.fullName}</Typography>
              <Typography><b>Phone:</b> {user.phone}</Typography>
              <Typography><b>Blood Type:</b> {user.bloodType}</Typography>
              <Typography><b>District:</b> {user.district}</Typography>
              <Typography><b>City:</b> {user.city}</Typography>
              <Typography><b>Age:</b> {user.age}</Typography>
              <Typography><b>Status:</b> {user.userStatus}</Typography>
            </>
          ) : (
            <Typography>No user data available</Typography>
          )} */}

          <Button
            variant="contained"
            color="error"
            fullWidth
            sx={{ mt: 3 }}
            onClick={() => {
              alert("User resolved!"); 
              handleClose();
            }}
          >
            Confirm Resolve
          </Button>
        </Box>
      </Modal>
    </>
  )
}

export default IssueResolve