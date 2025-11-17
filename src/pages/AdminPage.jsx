import { AppBar, Toolbar, Typography, Box, Button, IconButton, Stack } from "@mui/material";
import SvgIcon from "@mui/material/SvgIcon";
import * as React from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import {  InputLabel, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material';
import { TableBar } from '@mui/icons-material';
import { useState } from 'react';
import Footer from "../components/Footer";
import { AllUsers, DeleteuserAdmin, issueviewAdmin, updateuserAdmin, updateUserStatusAPI } from "../services/allAPIs";
import { useEffect } from "react";
import IssueResolve from "../components/IssueResolve";
import Swal from 'sweetalert2'




function AdminPage() {


  // usestae for all user data
  const [allUserData,SetAllUserData]=useState([])
  const [reportIssue,SetReportIssue]=useState([])
  

  const newDonors = allUserData.filter(item => item.userStatus === 0);
  const activeDonors = allUserData.filter(item => item.userStatus === 1);
  const inactiveDonors = allUserData.filter(item => item.userStatus === 2);
  const filterissue = reportIssue.filter(item => item.userCode)
  

  
 
      // Select box 


  // Api function and other logic

  // api for all users
  const alluserview = async()=>{
      const response = await AllUsers()
      // console.log(response.data);
      SetAllUserData(response.data)
      
  }

  // Api for issue view 

  const issueview = async() =>{
    const response = await issueviewAdmin()
    // console.log(response);
    SetReportIssue(response.data)
  }
    //  handleApprovalChange

     const [value, setValue] = useState('1');
  const handleChange = (event, newValue) => {
    console.log(newValue);
    
    setValue(newValue);
      };


const updateUserStatus2 = async (userId, value) => {
  const response = await updateUserStatusAPI(userId, { userStatus: value });
  console.log(response);
  if(response.status == 201){
     Swal.fire({
      title: 'Updated!',
      text: ' sucessfull',
      icon: 'success',
      confirmButtonText: 'Okay'
    })
  }
else{
     Swal.fire({
      title: 'error!',
      text: ' Try again',
      icon: 'error',
      confirmButtonText: 'Okay'
    })
}

  alluserview();

};

    
useEffect(() => {
  alluserview();
  issueview();
}, []);


// activateUser user

const activateUser = async(userdata)=>{

   const  updatestatus = { ...userdata,userStatus:1 }
  
  // //  alert(updatestatus)
  // console.log(updatestatus);
  
  const response = await updateuserAdmin(userdata.id, updatestatus)
  console.log(response);
 if(response.status == 201){
     Swal.fire({
      title: 'Updated!',
      text: ' sucessfull',
      icon: 'success',
      confirmButtonText: 'Okay'
    })
  }
else{
     Swal.fire({
      title: 'error!',
      text: ' Try again',
      icon: 'error',
      confirmButtonText: 'Okay'
    })
}

  alluserview();
}

const deleteUser = async(id)=>{

  const response = await DeleteuserAdmin(id)
  console.log(response);
  
 if(response.status == 201){
     Swal.fire({
      title: 'Deleted!',
      text: ' sucessfull',
      icon: 'success',
      confirmButtonText: 'Okay'
    })
  }
else{
     Swal.fire({
      title: 'error!',
      text: ' Try again',
      icon: 'error',
      confirmButtonText: 'Okay'
    })
}

  alluserview();
}



// Share option 

const handleShare = (donor) => {
  const message = `Donor Info:\nName: ${donor.fullName}\nBlood: ${donor.bloodType}\nPlace: ${donor.city}, ${donor.district}\nPhone: ${donor.phone}`;
  const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
};

  return (
    <>
    {/* header */}

  <AppBar 
  position="sticky" 
  color="inherit" 
  elevation={5}
  sx={{ top: 0, zIndex: 100 }}
>
  <Toolbar
    sx={{
      maxWidth: "1200px",
      mx: "auto",
      width: "100%",
      px: { xs: 2, sm: 4 },
      py: 1,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    }}
  >
    {/* Logo + Title */}
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      <SvgIcon
        sx={{
          color: "error.main",
          fontSize: 40,
          animation: "pulse 2s infinite",
          transition: "transform .3s",
          cursor: "pointer",
          "&:hover": { transform: "scale(1.15)" },

          "@keyframes pulse": {
            "0%": { transform: "scale(1)", opacity: 1 },
            "50%": { transform: "scale(1.12)", opacity: 0.75 },
            "100%": { transform: "scale(1)", opacity: 1 },
          },
        }}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10 2a8 8 0 00-8 8c0 3.235 1.55 6.136 4 7.915V14a2 2 0 012-2h4a2 2 0 012 2v3.915c2.45-1.779 4-4.68 4-7.915a8 8 0 00-8-8z"
        />
      </SvgIcon>

      <Typography
        variant="h6"
        sx={{
          fontWeight: 800,
          letterSpacing: ".05em",
          color: "text.primary",
          userSelect: "none",
          display: { xs: "none", sm: "block" }
        }}
      >
        LifeDrop Admin Panel
      </Typography>
    </Box>

    {/* Right Side Buttons (sample) */}
    <Box sx={{ display: "flex", gap: 2 }}>
      <Button variant="outlined" color="error">Logout</Button>
    </Box>

  </Toolbar>
</AppBar>


    {/* Body */}

 <div>
        <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value} >
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example" centered>
            <Tab label="All users" value="1" />
            <Tab label="New Users" value="2" />
            <Tab label="InActive user" value="3" />
            <Tab label=" user" value="4" />
          </TabList>
        </Box>
        {/*All Users  */}
        <TabPanel value="1">
          {/* Heading */}
        <Typography variant='h3'  className='text-center m-4' >Active User</Typography>
        {/* Download Button */}
      <div className='text-end p-2'>  
        <Button className='btn btn-info '>Download</Button>
        </div>
        {/* Table */}
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
      <Table className='w-full'>
        
        <TableHead className='bg-light '>
       <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Place</TableCell>
          <TableCell>District</TableCell>
          <TableCell>BloodGroup</TableCell>
          <TableCell>Contact Number</TableCell>
          <TableCell>Share</TableCell>
       </TableRow>
        </TableHead>

        <TableBody>
         {/* <TableRow>
            <TableCell>Tinu</TableCell>
            <TableCell>Ayoor</TableCell>
            <TableCell>Kollam</TableCell>
            <TableCell>0+</TableCell>
            <TableCell>8113044487</TableCell>
            <TableCell><Button className='btn btn-info'>Share</Button></TableCell>
         </TableRow>        */}
{
  activeDonors.length > 0 ? (activeDonors.map((item,index)=>(
<TableRow key={index}>
            <TableCell>{item.fullName}</TableCell>
            <TableCell>{item.city}</TableCell>
            <TableCell>{item.district}</TableCell>
            <TableCell>{item.bloodType}</TableCell>
            <TableCell>{item.phone}</TableCell>
                       <TableCell  className='text-center'><Button className='btn btn-info'onClick={() => handleShare(item)}>Share</Button></TableCell>
         
         </TableRow>  

  ))):(<p>Data loading</p>)
}

        </TableBody>

      </Table>
      </TableContainer>
      </Paper>
   
        </TabPanel>
        
       {/* New Users */}
        <TabPanel value="2">
     {/* Heading */}
        <Typography variant='h3'  className='text-center m-4' >New User</Typography>
        {/* Download Button */}
      <div className='text-end p-2'>  
        <Button className='btn btn-info '>Download</Button>
        </div>
        {/* Table */}
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
      <Table className='w-full'>
        
        <TableHead className='bg-light '>
       <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Place</TableCell>
          <TableCell>District</TableCell>
          <TableCell>BloodGroup</TableCell>
          <TableCell>Contact Number</TableCell>
          <TableCell>Approvel</TableCell>
       </TableRow>
        </TableHead>

        <TableBody>
       {
  newDonors.length > 0 ? (newDonors.map((item,index)=>(
<TableRow key={index}>
            <TableCell>{item.fullName}</TableCell>
            <TableCell>{item.city}</TableCell>
            <TableCell>{item.district}</TableCell>
            <TableCell>{item.bloodType}</TableCell>
            <TableCell>{item.phone}</TableCell>

                  <TableCell>
             <Select
  value={item.userStatus}
  onChange={(e) => updateUserStatus2(item.id, Number(e.target.value))}
>
  <MenuItem value={0}>Pending</MenuItem>
  <MenuItem value={1}>Approve</MenuItem>
  <MenuItem value={3}>Reject</MenuItem>
</Select>
                </TableCell>
         
         </TableRow>  

  ))):(<p>Data loading</p>)
}
               
      
      
           
         

         
        </TableBody>

      </Table>
      </TableContainer>
      </Paper>
          
        </TabPanel>
        <TabPanel value="3">

           {/* Heading */}
        <Typography variant='h3'  className='text-center m-4' >InActive User</Typography>
        {/* Download Button */}
      <div className='text-end p-2'>  
        <Button className='btn btn-info '>Download</Button>
        </div>
        {/* Table */}
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
      <Table className='w-full'>
        
        <TableHead className='bg-light '>
       <TableRow>
          <TableCell className="text-center">Name</TableCell>
          <TableCell className="text-center">Place</TableCell>
          <TableCell className="text-center">District</TableCell>
          <TableCell className="text-center">BloodGroup</TableCell>
          <TableCell className="text-center">Contact Number</TableCell>
          <TableCell className="text-center">Approvel</TableCell>
          <TableCell className="text-center">Delete</TableCell>
       </TableRow>
        </TableHead>

        <TableBody>
        {
  inactiveDonors.length > 0 ? (inactiveDonors.map((item,index)=>(
<TableRow key={index}>
            <TableCell className="text-center">{item.fullName}</TableCell>
            <TableCell className="text-center">{item.city}</TableCell>
            <TableCell className="text-center">{item.district}</TableCell>
            <TableCell className="text-center">{item.bloodType}</TableCell>
            <TableCell className="text-center">{item.phone}</TableCell>
            <TableCell  className='text-center'><Button variant="outlined"  onClick={() => activateUser(item)}>Activate</Button></TableCell>
            <TableCell  className='text-center'><Button variant="outlined" color="error" onClick={()=>deleteUser(item.id)}>Delete</Button></TableCell>
         
         </TableRow>  

  ))):(<p>Data loading</p>)
}

            
        </TableBody>

      </Table>
      </TableContainer>
      </Paper>
        </TabPanel>

         <TabPanel value="4">

           {/* Heading */}
        <Typography variant='h3'  className='text-center m-4' >Issues User</Typography>
        {/* Download Button */}
      <div className='text-end p-2'>  
        <Button className='btn btn-info '>Download</Button>
        </div>
        {/* Table */}
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
      <Table className='w-full'>
        
        <TableHead className='bg-light '>
       <TableRow>
          <TableCell className="text-center">Name</TableCell>
          <TableCell className="text-center">id</TableCell>
          <TableCell className="text-center">Reson</TableCell>
          <TableCell className="text-center">Action</TableCell>
          {/* <TableCell>BloodGroup</TableCell>
          <TableCell>Contact Number</TableCell>
          <TableCell>Approvel</TableCell> */}
       </TableRow>
        </TableHead>

        <TableBody>
         {
  filterissue.length > 0 ? (filterissue.map((item,index)=>(
<TableRow key={index}>
            <TableCell className="text-center">{item.userName}</TableCell>
            <TableCell className="text-center">{item.userCode}</TableCell>
            <TableCell className="text-center">{item.reason}</TableCell>
            <TableCell  className='text-center'><IssueResolve userid={item.userCode}/></TableCell>
         
         </TableRow>  

  ))):(<p>Data loading</p>)
}

          

        </TableBody>

      </Table>
      </TableContainer>
      </Paper>
        </TabPanel>
      </TabContext>
    </Box>

    </div>


{/* footer */}

<Footer/>


    </>
  )
}

export default AdminPage