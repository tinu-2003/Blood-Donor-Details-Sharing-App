import React, { useState } from "react";
import { Button, Modal, Box, Typography, Input } from "@mui/material";
import { getuserbyid, updateuserAdmin } from "../services/allAPIs";
import { useEffect } from "react";

function IssueResolve({userid}) {




   
   const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: { xs: "90%", sm: 500 },
    bgcolor: "background.paper",
    borderRadius: 3,
    boxShadow: 24,
    p: 4,
    maxHeight: "90vh",
    overflowY: "auto",
  };
//  console.log(userid);


  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);




const [user,setUser]=useState({
      fullName: "",
    district: "",
    phone: "",
    bloodType: "",
    gender: "",
    city: "",
    age: "",
    userStatus:0,
    issusestatus:1
    
  });

 const getuser = async(id)=>{
        const response = await getuserbyid(id)
        console.log(response);
        setUser(response.data)
 }
 useEffect(()=>{
  getuser(userid)
 },[])



const updateuser = async()=>{
const response = await updateuserAdmin(userid, user)
console.log(response);

}

const  deactivateuser = async()=>{
 const  updatestatus = { ...user,userStatus:2 }
// //  alert(updatestatus)
// console.log(updatestatus);

const response = await updateuserAdmin(userid, updatestatus)
console.log(response);

}
  return (
    <>
   <Button
  variant="outlined"
  color="error"
  onClick={() => {
    
    handleOpen();    
  }}
>
  Resolve Now
</Button>

    <Modal open={open} onClose={handleClose}>
  <Box sx={style}>
    <Typography variant="h5" mb={3} textAlign="center" color="primary">
      Resolve User Issue
    </Typography>

    {user ? (
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Box>
          <Typography variant="body1" mb={0.5}><b>Full Name:</b></Typography>
          <Input
            fullWidth
            id="fullname"
            type="text"
            value={user.fullName}
            onChange={(e) => setUser({ ...user, fullName: e.target.value })}
            sx={{ padding: 1, borderRadius: 1, border: "1px solid #ccc" }}
          />
        </Box>

        <Box>
          <Typography variant="body1" mb={0.5}><b>Phone:</b></Typography>
          <Input
            fullWidth
            id="phone"
            type="text"
            value={user.phone}
            onChange={(e) => setUser({ ...user, phone: e.target.value })}
            sx={{ padding: 1, borderRadius: 1, border: "1px solid #ccc" }}
          />
        </Box>

        <Box>
          <Typography variant="body1" mb={0.5}><b>Blood Type:</b></Typography>
          <Input
            fullWidth
            id="bloodType"
            type="text"
            value={user.bloodType}
            onChange={(e) => setUser({ ...user, bloodType: e.target.value })}
            sx={{ padding: 1, borderRadius: 1, border: "1px solid #ccc" }}
          />
        </Box>

        <Box>
          <Typography variant="body1" mb={0.5}><b>District:</b></Typography>
          <Input
            fullWidth
            id="district"
            type="text"
            value={user.district}
            onChange={(e) => setUser({ ...user, district: e.target.value })}
            sx={{ padding: 1, borderRadius: 1, border: "1px solid #ccc" }}
          />
        </Box>

        <Box>
          <Typography variant="body1" mb={0.5}><b>City:</b></Typography>
          <Input
            fullWidth
            id="city"
            type="text"
            value={user.city}
            onChange={(e) => setUser({ ...user, city: e.target.value })}
            sx={{ padding: 1, borderRadius: 1, border: "1px solid #ccc" }}
          />
        </Box>

        <Box>
          <Typography variant="body1" mb={0.5}><b>Age:</b></Typography>
          <Input
            fullWidth
            id="age"
            type="text"
            value={user.age}
            onChange={(e) => setUser({ ...user, age: e.target.value })}
            sx={{ padding: 1, borderRadius: 1, border: "1px solid #ccc" }}
          />
        </Box>
      </Box>
    ) : (
      <Typography>No user data available</Typography>
    )}

    <Box sx={{ display: "flex", justifyContent: "space-around", mt: 4 }}>
      <Button
        variant="contained"
        color="primary"
        sx={{ width: "40%" }}
        onClick={() => {
         updateuser();
          handleClose();
        }}
      >
        Resolved
      </Button>
      <Button
        variant="contained"
        color="error"
        sx={{ width: "40%" }}
        onClick={() => {
          deactivateuser();
          handleClose();
        }}
      >
        Deactivate
      </Button>
    </Box>
  </Box>
</Modal>

    </>
  )
}

export default IssueResolve