import Header from '../components/Header'
import Footer from '../components/Footer';
import { Button, Card, CardHeader, Container, FormControl, Input, InputLabel, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

import { Box, InputBase, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Directions } from '@mui/icons-material';
function FindDonorPage() {
 
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
   
 <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        border: '2px solid',
        borderColor: 'grey.400',
        borderRadius: '50px',
        padding: '4px 10px',
        width: { xs: '100%', sm: '80%', md: '60%', lg: '40%' },
        margin: 'auto',
        backgroundColor: 'background.paper',
        boxShadow: 2,
        transition: 'all 0.3s ease',
        '&:hover': { boxShadow: 4, borderColor: 'primary.main' },
      }}
    >
      {/* Search option */}
      <InputBase
        sx={{
          ml: 1,
          flex: 1,
          textAlign: 'center',
          padding:4
        }}
        placeholder="Search  Blood Group"
        
      />
    
    </Box>


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

            <TableRow>
            <TableCell>Tinu</TableCell>
            <TableCell>Ayoor</TableCell>
            <TableCell>Kollam</TableCell>
            <TableCell>0+</TableCell>
            <TableCell>8113044487</TableCell>
            <TableCell><Button className='btn btn-info'>Share</Button></TableCell>
         </TableRow>   <TableRow>
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

      </Card>
    </Box>
   

  </Container>


    {/* Footer */}

    <Footer/>
    </>
  )
}

export default FindDonorPage