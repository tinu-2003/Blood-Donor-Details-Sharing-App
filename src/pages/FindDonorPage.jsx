import Header from '../components/Header'
import Footer from '../components/Footer';
import { Button, Card, CardHeader, Container, FormControl, Input, InputLabel, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

import { Box, InputBase, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Directions } from '@mui/icons-material';
import { FindDonors } from '../services/allAPIs';
import { useEffect, useState } from 'react';
import ReportIssue from '../components/ReportIssue';
function FindDonorPage() {
// For filter
const [filterBlood, setFilterBlood] = useState("");
const [filterDistrict, setFilterDistrict] = useState("");
const [filterPlace, setFilterPlace] = useState("");
// sort ativeuser in filter search
const[filteruser,SettFilteruser]=useState([])
 const filterActiveDonors = filteruser.filter(item => {
  return (
    item.userStatus === 0 &&
    (filterPlace ? item.city === filterPlace : true) &&
    (filterDistrict ? item.district === filterDistrict : true) &&
    (filterBlood ? item.bloodType === filterBlood : true)
  );
});
// view all active user
  const [donors,setDonors]=useState([])

console.log(donors);
// sort active user
  const activeDonors = donors.filter(item => item.userStatus === 0);
  const viewDonors = async()=>{



    const response = await FindDonors()
    // console.log(response);
    setDonors(response.data)
   
  }

  // useEffect(()=>{
  //   viewDonors()
  // },[])

 const sortDonors = async()=>{
  if(filterBlood!=""||filterDistrict!=""||filterPlace!=""){
// console.log(filterBlood);
    const response = await FindDonors()

    SettFilteruser(response.data)
     }
    else{
      alert("fille the fill")
    }


 } 
 
//  share option

const handleShare = (donor) => {
  const message = `Donor Info:\nName: ${donor.fullName}\nBlood: ${donor.bloodType}\nPlace: ${donor.city}, ${donor.district}\nPhone: ${donor.phone}`;
  const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
};

  return (
    <>
    <Header/>

   {/* boady */}
  <Container maxWidth='lg'>

    {/* Heading */}
   <div className='text-center p-5'>
      <Typography variant='h2' sx={{color:"error.main" ,fontWeight:600,textTransform:"uppercase",display:'block'}}>Find Blood Donors</Typography>
      <Typography variant='h6' sx={{fontWeight:'600', color:'text.secondary'}}>You Can Find Donors Near To You</Typography>
   </div>

   {/* Search Option */}
   
<Box sx={{ display: 'flex', gap: 2, mt: 3, justifyContent: 'center' }}>
  
  {/* Blood Group Filter */}
  <FormControl sx={{ minWidth: 150 }}>
    <InputLabel>Blood Group</InputLabel>
    <Select
      value={filterBlood}
      label="Blood Group"
      onChange={(e) => setFilterBlood(e.target.value)}
    >
      <MenuItem value="">All</MenuItem>
      <MenuItem value="A+">A+</MenuItem>
      <MenuItem value="A-">A-</MenuItem>
      <MenuItem value="B+">B+</MenuItem>
      <MenuItem value="B-">B-</MenuItem>
      <MenuItem value="O+">O+</MenuItem>
      <MenuItem value="O-">O-</MenuItem>
      <MenuItem value="AB+">AB+</MenuItem>
      <MenuItem value="AB-">AB-</MenuItem>
    </Select>
  </FormControl>

  {/* District Filter */}
  <FormControl sx={{ minWidth: 150 }}>
    <InputLabel>District</InputLabel>
    <Select
      value={filterDistrict}
      label="District"
      onChange={(e) => setFilterDistrict(e.target.value)}
    >
      <MenuItem value="">All</MenuItem>
      <MenuItem value="Kollam">Kollam</MenuItem>
      <MenuItem value="Trivandrum">Trivandrum</MenuItem>
      <MenuItem value="Kottayam">Kottayam</MenuItem>
      <MenuItem value="Ernakulam">Ernakulam</MenuItem>
      {/* Add more districts */}
    </Select>
  </FormControl>
  {/* place filter */}

  <FormControl sx={{ minWidth: 150 }}>
    <InputLabel>Place</InputLabel>
    {/* <Select
      value={filterPlace}
      label="place"
      onChange={(e) => setFilterPlace(e.target.value)}
    >
      <MenuItem value="">All</MenuItem>
      <MenuItem value="Kollam">Kollam</MenuItem>
      <MenuItem value="Trivandrum">Trivandrum</MenuItem>
      <MenuItem value="Kottayam">Kottayam</MenuItem>
      <MenuItem value="Ernakulam">Ernakulam</MenuItem>
    </Select> */}
    <Input type='text'   value={filterPlace}
      label="place"
      onChange={(e) => setFilterPlace(e.target.value)}></Input>
  </FormControl>
  <Button variant='contained' onClick={sortDonors} >Search</Button>

</Box>

<Button variant='contained'   onClick={viewDonors}>view All</Button>



{/* Downlod Button */}
<Box className ='text-end' sx={{ textAlign: 'center', mt: 2 }}>
      <Button
        variant="contained"
        color="primary"
       
        onClick={() => alert('Download started!')}
      >
        Download
      </Button>
    </Box>


    {/* Sort field */}
 <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: { xs: 'center', sm: 'flex-start' },
        gap: 2,
        width: '100%',
        marginTop:'30px'
      }}
    >
        {/* Filter / Sort Card */}
       
      <Card sx={{ p: 2, minWidth: 250 ,maxWidth:'100%', width:'100%'}}>
        <Typography variant='h6' className='text-center p-2'>Details</Typography>

{/* Table */}
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
      <Table className='w-full'>
        
        <TableHead className='bg-light '>
       <TableRow>
          <TableCell  className='text-center'>Name</TableCell>
          <TableCell  className='text-center'>Place</TableCell>
          <TableCell  className='text-center'>District</TableCell>
          <TableCell  className='text-center'>BloodGroup</TableCell>
          <TableCell  className='text-center'>Contact Number</TableCell>
          <TableCell  className='text-center'>Share</TableCell>
          <TableCell className='text-center'>Report if details<br/> are incorrect</TableCell>
       </TableRow>
        </TableHead>

        <TableBody>
         
  {
    
    filterActiveDonors.length > 0 ? (filterActiveDonors .map((item,index) => (
  <TableRow key={index}>
              <TableCell  className='text-center'>{item.fullName}</TableCell>
              <TableCell  className='text-center'>{item.city}</TableCell>
              <TableCell  className='text-center'>{item.district}</TableCell>
              <TableCell  className='text-center'>{item.bloodType}</TableCell>
              <TableCell  className='text-center'>{item.phone}</TableCell>
              <TableCell  className='text-center'><Button className='btn btn-info'onClick={() => handleShare(item)}>Share</Button></TableCell>
              <TableCell  className='text-center'><ReportIssue/></TableCell>
          </TableRow> 
    ))):( <TableRow>
        <TableCell colSpan={7} align="center">
          <h3  className='text-center'>No Donors Active</h3>
        </TableCell>
      </TableRow>)
  }


  {
    
    activeDonors.length > 0 ? (activeDonors .map((item,index) => (
  <TableRow key={index}>
              <TableCell  className='text-center'>{item.fullName}</TableCell>
              <TableCell  className='text-center'>{item.city}</TableCell>
              <TableCell  className='text-center'>{item.district}</TableCell>
              <TableCell  className='text-center'>{item.bloodType}</TableCell>
              <TableCell  className='text-center'>{item.phone}</TableCell>
              <TableCell  className='text-center'><Button className='btn btn-info'onClick={() => handleShare(item)}>Share</Button></TableCell>
                          <TableCell  className='text-center'><ReportIssue donor={item}/></TableCell>

          </TableRow> 
    ))):( <TableRow>
        <TableCell colSpan={6} align="center">
          <h3  className='text-center'>No Donors Active</h3>
        </TableCell>
      </TableRow>)
  }
         
        </TableBody>

      </Table>
      </TableContainer>
      </Paper>

      </Card>
    </Box>
   

  </Container>


    {/* Footer */}

    <Footer/>
    </>
  )
}

export default FindDonorPage