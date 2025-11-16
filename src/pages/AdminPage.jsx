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
import { AllUsers, issueviewAdmin, updateUserStatus } from "../services/allAPIs";
import { useEffect } from "react";




function AdminPage() {


  // usestae for all user data
  const [allUserData,SetAllUserData]=useState([])
  const [reportIssue,SetReportIssue]=useState([])
  const [data,SetData]=useState({
    fullName: "",
    district: "",
    phone: "",
    bloodType: "",
    gender: "",
    city: "",
    age: "",
    userStatus:0
    })

  const newDonors = allUserData.filter(item => item.userStatus === 0);
  const activeDonors = allUserData.filter(item => item.userStatus === 1);
  const inactiveDonors = allUserData.filter(item => item.userStatus === 2);
  const filterissue = reportIssue.filter(item => item.userCode)
  // console.log(allUserData);
  
  const [value, setValue] = useState('1');
  const handleChange = (event, newValue) => {
    console.log(newValue);
    
    setValue(newValue);
      };
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
const handleApprovalChange = async (index, userId, value) => {

  const statusValue = value === "approved" ? 1 : 2;
  // alert(statusValue);
     
   const response= await updateUserStatus(userId, data);
   console.log(response);
   
};

    
 



useEffect(() => {
  alluserview();
  issueview();
}, []);

// Share option 

const handleShare = (donor) => {
  const message = `Donor Info:\nName: ${donor.fullName}\nBlood: ${donor.bloodType}\nPlace: ${donor.city}, ${donor.district}\nPhone: ${donor.phone}`;
  const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
};

  return (
    <>
    {/* header */}

     <AppBar position="sticky" color="inherit" elevation={5} sx={{ top: 0, zIndex: 10 }}>
      <Toolbar sx={{ maxWidth: "lg", mx: "auto", px: { xs: 2, sm: 4, lg: 6 }, py: 1, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        
        {/* Logo / Title */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <SvgIcon
  sx={{
    color: "error.main",
    fontSize: 40,
    animation: "pulse 2s infinite",
    "@keyframes pulse": {
      "0%": { transform: "scale(1)", opacity: 1 },
      "50%": { transform: "scale(1.1)", opacity: 0.7 },
      "100%": { transform: "scale(1)", opacity: 1 },
    },
  }}
>
  <path fillRule="evenodd" clipRule="evenodd" d="M10 2a8 8 0 00-8 8c0 3.235 1.55 6.136 4 7.915V14a2 2 0 012-2h4a2 2 0 012 2v3.915c2.45-1.779 4-4.68 4-7.915a8 8 0 00-8-8z" />
</SvgIcon>
          <Typography variant="h6" sx={{ fontWeight: 800, letterSpacing: "0.1em", color: "text.primary" }}>
            LifeDrop  Admin Panal
          </Typography>   
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

                value={data.userStatus === 0
        ? ""
        : item.userStatus === 1
        ? "approved"
        : "rejected"}
       onChange={(e)=>handleApprovalChange({...data,userStatus:e.target.value})}
    
  
    sx={{ width: '100%' }}
    displayEmpty
  >
    <MenuItem value="">Pending</MenuItem>
    <MenuItem value="approved">Approve</MenuItem>
    <MenuItem value="rejected">Reject</MenuItem>
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
  inactiveDonors.length > 0 ? (inactiveDonors.map((item,index)=>(
<TableRow key={index}>
            <TableCell>{item.fullName}</TableCell>
            <TableCell>{item.city}</TableCell>
            <TableCell>{item.district}</TableCell>
            <TableCell>{item.bloodType}</TableCell>
            <TableCell>{item.phone}</TableCell>
                       <TableCell  className='text-center'><Button variant="contented">Activate</Button></TableCell>
         
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
          <TableCell className="text-center">Place</TableCell>
          <TableCell className="text-center">District</TableCell>
          {/* <TableCell>BloodGroup</TableCell>
          <TableCell>Contact Number</TableCell>
          <TableCell>Approvel</TableCell> */}
       </TableRow>
        </TableHead>

        <TableBody>
         {
  filterissue.length > 0 ? (filterissue.map((item,index)=>(
<TableRow key={index}>
            <TableCell className="text-center">{item.userCode}</TableCell>
            <TableCell className="text-center">{item.reason}</TableCell>
            <TableCell  className='text-center'><Button variant="outlined" color="error">Resove Now</Button></TableCell>
         
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