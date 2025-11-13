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

function AdminPage() {
  const [value, setValue] = React.useState('1');
 const handleChange = (event, newValue) => {
    setValue(newValue);
      };

      // Select box 
      const [aprovell ,setAprovell]= useState('cd')

       const handleChange1 = (event) => {
    setAprovell(event.target.value);
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
          </TabList>
        </Box>
        {/*All Users  */}
        <TabPanel value="1">
          {/* Heading */}
        <Typography variant='h3'  className='text-center m-4' >All User</Typography>
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
         <TableRow>
            <TableCell>Tinu</TableCell>
            <TableCell>Ayoor</TableCell>
            <TableCell>Kollam</TableCell>
            <TableCell>0+</TableCell>
            <TableCell>8113044487</TableCell>
            <TableCell><Button className='btn btn-info'>Share</Button></TableCell>
         </TableRow>

          <TableRow>
            <TableCell>Tinu</TableCell>
            <TableCell>Ayoor</TableCell>
            <TableCell>Kollam</TableCell>
            <TableCell>0+</TableCell>
            <TableCell>8113044487</TableCell>
            <TableCell><Button className='btn btn-info'>Share</Button></TableCell>
         </TableRow>

          <TableRow>
            <TableCell>Tinu</TableCell>
            <TableCell>Ayoor</TableCell>
            <TableCell>Kollam</TableCell>
            <TableCell>0+</TableCell>
            <TableCell>8113044487</TableCell>
            <TableCell><Button className='btn btn-info'>Share</Button></TableCell>
         </TableRow>

          <TableRow>
            <TableCell>Tinu</TableCell>
            <TableCell>Ayoor</TableCell>
            <TableCell>Kollam</TableCell>
            <TableCell>0+</TableCell>
            <TableCell>8113044487</TableCell>
            <TableCell><Button className='btn btn-info'>Share</Button></TableCell>
         </TableRow>

          <TableRow>
            <TableCell>Tinu</TableCell>
            <TableCell>Ayoor</TableCell>
            <TableCell>Kollam</TableCell>
            <TableCell>0+</TableCell>
            <TableCell>8113044487</TableCell>
            <TableCell><Button className='btn btn-info'>Share</Button></TableCell>
         </TableRow>
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
         <TableRow>
            <TableCell>Tinu</TableCell>
            <TableCell>Ayoor</TableCell>
            <TableCell>Kollam</TableCell>
            <TableCell>0+</TableCell>
            <TableCell>8113044487</TableCell>
            <TableCell>
               
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={aprovell}
          onChange={handleChange1} sx={{
            width:'100%'
          }}
        >
          <MenuItem value={10}>App</MenuItem>
          <MenuItem value={20}>reject</MenuItem>
        </Select>
      
            </TableCell>
         </TableRow>    

           <TableRow>
            <TableCell>Tinu</TableCell>
            <TableCell>Ayoor</TableCell>
            <TableCell>Kollam</TableCell>
            <TableCell>0+</TableCell>
            <TableCell>8113044487</TableCell>
            <TableCell>
               
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={aprovell}
          onChange={handleChange1} sx={{
            width:'100%'
          }}
        >
          <MenuItem value={10}>App</MenuItem>
          <MenuItem value={20}>reject</MenuItem>
        </Select>
      
            </TableCell>
         </TableRow>    

           <TableRow>
            <TableCell>Tinu</TableCell>
            <TableCell>Ayoor</TableCell>
            <TableCell>Kollam</TableCell>
            <TableCell>0+</TableCell>
            <TableCell>8113044487</TableCell>
            <TableCell>
               
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={aprovell}
          onChange={handleChange1} sx={{
            width:'100%'
          }}
        >
          <MenuItem value={10}>App</MenuItem>
          <MenuItem value={20}>reject</MenuItem>
        </Select>
      
            </TableCell>
         </TableRow>    

           <TableRow>
            <TableCell>Tinu</TableCell>
            <TableCell>Ayoor</TableCell>
            <TableCell>Kollam</TableCell>
            <TableCell>0+</TableCell>
            <TableCell>8113044487</TableCell>
            <TableCell>
               
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={aprovell}
          onChange={handleChange1} sx={{
            width:'100%'
          }}
        >
          <MenuItem value={10}>App</MenuItem>
          <MenuItem value={20}>reject</MenuItem>
        </Select>
      
            </TableCell>
         </TableRow>    

           <TableRow>
            <TableCell>Tinu</TableCell>
            <TableCell>Ayoor</TableCell>
            <TableCell>Kollam</TableCell>
            <TableCell>0+</TableCell>
            <TableCell>8113044487</TableCell>
            <TableCell>
               
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={aprovell}
          onChange={handleChange1} sx={{
            width:'100%'
          }}
        >
          <MenuItem value={10}>App</MenuItem>
          <MenuItem value={20}>reject</MenuItem>
        </Select>
      
            </TableCell>
         </TableRow>    
         
        </TableBody>

      </Table>
      </TableContainer>
      </Paper>
          
        </TabPanel>
        <TabPanel value="3">

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
         <TableRow>
            <TableCell>Tinu</TableCell>
            <TableCell>Ayoor</TableCell>
            <TableCell>Kollam</TableCell>
            <TableCell>0+</TableCell>
            <TableCell>8113044487</TableCell>
            <TableCell> <Button variant='contained'>Ativate</Button></TableCell>
         </TableRow>   

            <TableRow>
            <TableCell>Tinu</TableCell>
            <TableCell>Ayoor</TableCell>
            <TableCell>Kollam</TableCell>
            <TableCell>0+</TableCell>
            <TableCell>8113044487</TableCell>
            <TableCell> <Button variant='contained'>Ativate</Button></TableCell>
         </TableRow>    

            <TableRow>
            <TableCell>Tinu</TableCell>
            <TableCell>Ayoor</TableCell>
            <TableCell>Kollam</TableCell>
            <TableCell>0+</TableCell>
            <TableCell>8113044487</TableCell>
            <TableCell> <Button variant='contained'>Ativate</Button></TableCell>
         </TableRow>   

            <TableRow>
            <TableCell>Tinu</TableCell>
            <TableCell>Ayoor</TableCell>
            <TableCell>Kollam</TableCell>
            <TableCell>0+</TableCell>
            <TableCell>8113044487</TableCell>
            <TableCell> <Button variant='contained'>Ativate</Button></TableCell>
         </TableRow>   

            <TableRow>
            <TableCell>Tinu</TableCell>
            <TableCell>Ayoor</TableCell>
            <TableCell>Kollam</TableCell>
            <TableCell>0+</TableCell>
            <TableCell>8113044487</TableCell>
            <TableCell> <Button variant='contained'>Ativate</Button></TableCell>
         </TableRow>   

            <TableRow>
            <TableCell>Tinu</TableCell>
            <TableCell>Ayoor</TableCell>
            <TableCell>Kollam</TableCell>
            <TableCell>0+</TableCell>
            <TableCell>8113044487</TableCell>
            <TableCell> <Button variant='contained'>Ativate</Button></TableCell>
         </TableRow>   

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