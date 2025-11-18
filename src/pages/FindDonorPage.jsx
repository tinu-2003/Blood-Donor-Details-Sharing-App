import Header from '../components/Header'
import Footer from '../components/Footer';
import { Button, Card, CardHeader, Container, FormControl, Input, InputLabel, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import Swal from 'sweetalert2'
import { Box, InputBase, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Directions } from '@mui/icons-material';
import { FindDonors } from '../services/allAPIs';
import { useEffect, useState } from 'react';
import ReportIssue from '../components/ReportIssue';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import autoTable from "jspdf-autotable";
import { FaSearch } from "react-icons/fa";
import { FaFileDownload } from "react-icons/fa";
function FindDonorPage() {
// For filter
const [filterBlood, setFilterBlood] = useState("");
const [filterDistrict, setFilterDistrict] = useState("");
const [filterPlace, setFilterPlace] = useState("");
// sort ativeuser in filter search
const[filteruser,SettFilteruser]=useState([])
const filterActiveDonors = filteruser.filter(item => {
  return (
    item.userStatus === 1 &&
    (!filterPlace || item.city === filterPlace) &&
    (!filterDistrict || item.district === filterDistrict) &&
    (!filterBlood || item.bloodType === filterBlood)
  );
});
// view all active user
  const [donors,setDonors]=useState([])

console.log(donors);
// sort active user
  const activeDonors = donors.filter(item => item.userStatus === 1);
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
     Swal.fire({
  title: 'Error!',
  text: 'Fill the Form',
  icon: 'error',
  confirmButtonText: 'Okay'
})
    }


 } 
 
//  share option

const handleShare = (donor) => {
  const message = `Donor Info:\nName: ${donor.fullName}\nBlood: ${donor.bloodType}\nPlace: ${donor.city}, ${donor.district}\nPhone: ${donor.phoneNumber}`;
  const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
};


// PDF Downloading

const userdataDownload = async()=>{

  // console.log(document.getElementById("userData"));

  // const canvas = await html2canvas(document.getElementById("userData"),{scale:3})

  // const imgData = canvas.toDataURL('image/png');
  // console.log(imgData);
  
  const doc = new jsPDF();

  const combined =[...filterActiveDonors,...activeDonors];

    const headers = [
    ["Name", "Place", "District", "Blood Group", "Phone"]
  ];

   const rows = combined.map(item => [
    item.fullName,
    item.city,
    item.district,
    item.bloodType,
    item.phoneNumber
  ]);
  //  PDF table creation
  autoTable(doc, {
    head: headers,
    body: rows,
    theme: "grid",
    headStyles: {
      fillColor: [22, 160, 133],  
      halign: "center",
    },
    styles: {
      halign: "center",
      fontSize: 10,
    },
    startY: 20
  });

   doc.save("donor_list.pdf");

  
  
}

  return (
    <>
    <Header/>

   {/* boady */}
  <Container maxWidth='lg'>

    {/* Heading */}
   <div className='text-center p-3 mt-4'>
      <Typography variant='h4' sx={{color:"error.main" ,fontWeight:600,textTransform:"uppercase",display:'block'}}>Find Blood Donors</Typography>
      <Typography variant='h6' sx={{fontWeight:'600', color:'text.secondary'}}>You Can Find Donors Near To You</Typography>
   </div>

   {/* Search Option */}
   
<Box sx={{ display: "flex",
    flexWrap: "wrap",        // 👈 Allow wrapping
    gap: 2,
    mt: 1,
    justifyContent: "center",
    width: "100%", }}>
  
  {/* Blood Group Filter */}
  <FormControl  sx={{
      minWidth: { xs: "100%", sm: 200 },  // Full width on mobile
      flex: "1 1 auto",
    }}>
    <InputLabel>Blood Group</InputLabel>
    <Select
      value={filterBlood}
      label="Blood Group"
      onChange={(e) => setFilterBlood(e.target.value)}
    >
      
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
  <FormControl  sx={{
      minWidth: { xs: "100%", sm: 200 },  // Full width on mobile
      flex: "1 1 auto",
    }}>
    <InputLabel>District</InputLabel>
    <Select
      value={filterDistrict}
      label="District"
      onChange={(e) => setFilterDistrict(e.target.value)}
    >
     
<MenuItem value="Kasaragod">Kasaragod</MenuItem>
<MenuItem value="Kannur">Kannur</MenuItem>
<MenuItem value="Wayanad">Wayanad</MenuItem>
<MenuItem value="Kozhikode">Kozhikode</MenuItem>
<MenuItem value="Malappuram">Malappuram</MenuItem>
<MenuItem value="Palakkad">Palakkad</MenuItem>
<MenuItem value="Thrissur">Thrissur</MenuItem>
<MenuItem value="Ernakulam">Ernakulam</MenuItem>
<MenuItem value="Idukki">Idukki</MenuItem>
<MenuItem value="Kottayam">Kottayam</MenuItem>
<MenuItem value="Alappuzha">Alappuzha</MenuItem>
<MenuItem value="Pathanamthitta">Pathanamthitta</MenuItem>
<MenuItem value="Kollam">Kollam</MenuItem>
<MenuItem value="Thiruvananthapuram">Thiruvananthapuram</MenuItem>

      {/* Add more districts */}
    </Select>
  </FormControl>
  {/* place filter */}

  <FormControl sx={{
      minWidth: { xs: "100%", sm: 200 },  // Full width on mobile
      flex: "1 1 auto",
    }}>
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
 <Button
  variant="outlined"
  onClick={sortDonors}
  sx={{
    minWidth: { xs: "100%", sm: 120 },   // Full width on mobile, fixed on desktop
    height: 56,                          // Same height as Select/Input
    flexShrink: 0,                        // Prevent shrinking
  }}
>
  <FaSearch />
</Button>

</Box>
{/* view all button */}
<Box 
  sx={{ 
    display: "flex", 
    justifyContent: "center",
    mt: 5
  }}
>
  <Button 
    variant="contained" 
    onClick={viewDonors}
    sx={{
      width: { xs: "100%", sm: "200px" },   // Full width on mobile, fixed on desktop
      fontWeight: "bold",
    }}
  >
    View All
  </Button>
</Box>



{/* Downlod Button */}
{
  filterActiveDonors.length > 0 || activeDonors.length > 0 ?
  <Box
  sx={{
    display: "flex",
    justifyContent: { xs: "center", sm: "flex-end" }, // Center on mobile, right on desktop
    mt: 3
  }}
>
  <Button
   
    color="primary"
    onClick={userdataDownload}
    
  >
   <FaFileDownload size={30}/>
  </Button>
</Box>
:""
}


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
     {
  filterActiveDonors.length > 0 || activeDonors.length > 0 ?  
      <Card sx={{ p: 2, minWidth: 250 ,maxWidth:'100%', width:'100%'}}>
        <Typography variant='h6' className='text-center p-2'>Details</Typography>

{/* Table */}

    <Paper id="userData"  sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer  sx={{ maxHeight: 440 }} >
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
              <TableCell  className='text-center'>{item.phoneNumber}</TableCell>
              <TableCell  className='text-center'><Button className='btn btn-info'onClick={() => handleShare(item)}>Share</Button></TableCell>
                                     <TableCell  className='text-center'><ReportIssue donor={item}/></TableCell>

          </TableRow> 
    ))):""
  }


  {
    
    activeDonors.length > 0 ? (activeDonors .map((item,index) => (
  <TableRow key={index}>
              <TableCell  className='text-center'>{item.fullName}</TableCell>
              <TableCell  className='text-center'>{item.city}</TableCell>
              <TableCell  className='text-center'>{item.district}</TableCell>
              <TableCell  className='text-center'>{item.bloodType}</TableCell>
              <TableCell  className='text-center'>{item.phoneNumber}</TableCell>
              <TableCell  className='text-center'><Button className='btn btn-info'onClick={() => handleShare(item)}>Share</Button></TableCell>
                          <TableCell  className='text-center'><ReportIssue donor={item}/></TableCell>

          </TableRow> 
    ))):""
  }
         
        </TableBody>

      </Table>
      </TableContainer>
      </Paper>


      </Card>
      :""
}
    </Box>
   

  </Container>


    {/* Footer */}

    <Footer/>
    </>
  )
}

export default FindDonorPage