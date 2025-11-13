import { Box, Container, Typography, Button, Stack, Grid } from "@mui/material";
import * as React from 'react';
import { Card, CardContent } from '@mui/material';
// import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';


import Header from '../components/Header'
import '../App.css'
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function LandingPage() {
  return (

    <> 
    <Header/>

       
      {/* <!-- Hero Section --> */}
      <main>
      <Container
        maxWidth="lg"
        sx={{
          py: 5,
          px: { xs: 2, sm: 4, lg: 6 },
          textAlign: "center",
          mt:4
        }}
      >
        {/* Text Section */}
        <Box sx={{ mb: 10 }}>
          <Typography
            variant="overline"
            sx={{
              color: "error.main",
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              mb: 2,
              display: "block",
            }}
          >
            Be a Hero. Save a Life.
          </Typography>

          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              fontSize: { xs: "2.5rem", md: "4rem" },
              lineHeight: 1.2,
              color: "text.primary",
              mb: 3,
            }}
          >
            Every{" "}
            <Box component="span" sx={{ color: "error.main" }}>
              Drop
            </Box>{" "}
            Counts
          </Typography>

          <Typography
            variant="h6"
            sx={{
              maxWidth: "700px",
              mx: "auto",
              color: "text.secondary",
              mb: 6,
            }}
          >
            Blood donation is simple, safe, and saves millions of lives every
            year. Find a donation center near you and schedule your appointment
            today.
          </Typography>

          {/* Button Group */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 2, sm: 3 }}
            justifyContent="center"
            alignItems="center"
          >
            <Button
              variant="contained"
              href="#appointment-form"
              size="large"
              sx={{
                bgcolor: "error.main",
                color: "white",
                px: 5,
                py: 1.5,
                fontWeight: "bold",
                borderRadius: "12px",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                boxShadow: "0px 8px 24px rgba(255, 0, 0, 0.4)",
                "&:hover": {
                  bgcolor: "error.dark",
                  transform: "scale(1.05)",
                  boxShadow: "0px 10px 30px rgba(255, 0, 0, 0.6)",
                },
                transition: "all 0.3s ease",
              }}
            >
              Schedule Donation
            </Button>

           <Link to={'/finddonorpage'}>
              <Button
                variant="outlined"
                href="#donor-search"
                size="large"
                sx={{
                  borderColor: "success.main",
                  color: "success.main",
                  px: 5,
                  py: 1.5,
                  fontWeight: "bold",
                  borderRadius: "12px",
                  textTransform: "none",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: 3,
                  },
                  transition: "all 0.3s ease",
                }}
              >
                Find Donors   
              </Button>
           </Link>
          </Stack>
        </Box>
      </Container>
    </main>

{/*  section 2 */}
    <section>

      <Container maxWidth='lg'
      sx={{textAlign:"center"}}>
<Typography variant="h3"
sx={{fontWeight:"800",fontSize:{xs:'1.5rem ',md:"3rem"} }}> Your Life-Saving Journey in 4 Steps </Typography>
<Typography variant="h6"
sx={{maxWidth:'lg',m:4,color:'text.secondary', fontSize:{xs:'1rem ',md:"1.4rem"} }}>The entire process usually takes less than an hour, and your safety is our priority.</Typography>



{/* steo boxs */}
        <Stack 
        direction={{xs:"column",sm:"row"}}
        spacing={{xs:2 ,sm:3,lg:2}}
        justifyContent="space-between"
        alignItems="center"
        margin={{xs:0,sm:2 ,lg:4,md:5}}
        width='100%'
        >
          <Box 
          sx={{
            display:'flex',
            justifyContent:'center',
            alignItems:"center",
           transition: '0.3s',
        '&:hover': {
          boxShadow: 4,},
          backgroundColor:"white",
            width:290,
            height:180,
             boxShadow: 1,
            p:2,
            borderRadius:2,
             borderTop: '8px solid #d32f2f'
          }}>

             <CardContent sx={{ p: 1 }}>
           
        <Typography
          variant="h6"
          component="div"
          sx={{ fontWeight: 600, mb: 2 }}
        >
          1. Register
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Sign in and complete your consent and health history forms.
        </Typography>
      </CardContent>
            
          </Box>


          <Box 
          sx={{
            display:'flex',
            justifyContent:'center',
            alignItems:"center",
           transition: '0.3s',
        '&:hover': {
          boxShadow: 4,},
          backgroundColor:"white",
            width:290,
            height:180,
             boxShadow: 1,
            p:2,
            borderRadius:2,
             borderTop: '8px solid #d32f2f'
          }}>

             <CardContent sx={{ p: 1 }}>
           
        <Typography
          variant="h6"
          component="div"
          sx={{ fontWeight: 600, mb: 2 }}
        >
         2. Screening
        </Typography>
        <Typography variant="body2" color="text.secondary">
        A private check of your blood pressure, pulse, temperature, and iron level.
        </Typography>
      </CardContent>
            
          </Box>

          <Box 
          sx={{
            display:'flex',
            justifyContent:'center',
            alignItems:"center",
           transition: '0.3s',
        '&:hover': {
          boxShadow: 4,},
          backgroundColor:"white",
            width:290,
            height:180,
             boxShadow: 1,
            p:2,
            borderRadius:2,
             borderTop: '8px solid #d32f2f'
          }}>

             <CardContent sx={{ p: 1 }}>
           
        <Typography
          variant="h6"
          component="div"
          sx={{ fontWeight: 600, mb: 2 }}
        >
         3. Donate
        </Typography>
        <Typography variant="body2" color="text.secondary">
        The actual blood collection process typically takes only 8-10 minutes.
        </Typography>
      </CardContent>
            
          </Box>


          <Box 
          sx={{
            display:'flex',
            justifyContent:'center',
            alignItems:"center",
           transition: '0.3s',
        '&:hover': {
          boxShadow: 4,},
          backgroundColor:"white",
            width:290,
            height:180,
             boxShadow: 1,
            p:2,
            borderRadius:2,
             borderTop: '8px solid #d32f2f'
          }}>

             <CardContent sx={{ p: 1 }}>
           
        <Typography
          variant="h6"
          component="div"
          sx={{ fontWeight: 600, mb: 2 }}
        >
       4. Relax
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Enjoy complimentary snacks and drinks for 10-15 minutes before leaving.
        </Typography>
      </CardContent>
            
          </Box>


          
        </Stack>

      </Container>
    </section>


    {/* About  */}

<Container>
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
          fontWeight: 800,
          mt: 5,
          color: "error.main",
        }}
      >
        About Us
      </Typography>

      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="space-evenly"
        alignItems="center"
        spacing={4}
        sx={{
          my: { xs: 2, sm: 4, md: 6 },
          width: "100%",
        }}
      >
        {/* Left Text Section */}
        <Box sx={{ flex: 1 }}>
          <Typography variant="h4" sx={{ fontWeight: 600, mb: 2 }}>
            Life Drop
          </Typography>

          <Typography variant="body1" color="text.secondary">
            Life Drop is a dedicated platform that bridges the gap between blood
            donors and patients in need. Our goal is to make blood donation
            faster, simpler, and more accessible for everyone, ensuring that no
            life is lost due to a lack of blood availability.
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            marginTop="20px"
          >
            Through Life Drop, donors can easily register, maintain their health
            records, and be notified when their donation can make a real
            difference. We partner with hospitals, blood banks, and
            organizations to create a safe, transparent, and reliable donation
            ecosystem. Every drop counts — and with your help, we can save
            countless lives.
          </Typography>
        </Box>

        {/* Right Image Section */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            //  borderTop: '8px solid #ce0808d9',
              maxWidth: "400px",
             borderRadius:2
          }}
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlHstR2_zfdTQp5AHYqx3hb3qfrVMZ2HVNmw&s"
            alt="Life Drop"
            style={{
              width: "100%",
              maxWidth: "400px",
              borderRadius: "8px",
              objectFit: "cover",
              boxShadow: "0px 4px 12px rgba(248, 9, 9, 0.82)", 
            }}
          />
        </Box>
      </Stack>
    </Container>

{/* Eligibility Check  */}
    <Container>

      <Typography variant="h3" color="error.main" sx={{ textAlign:'center', fontWeight:800, mb:{xs:3,md:5}
  ,mt:{xs:3},fontSize:{xs:'2rem',sm:'2.5rem',md:'3rem'}
  }}>
        Eligibility
      </Typography>

      <Box sx={{ boxShadow:5 ,p:{xs:3,sm:3,md:4}, borderRadius:5, textAlign:'center'}}>
        <Stack 
        spacing={2}sx={
          {textAlign:{xs:"center",sm:'left'},
        mb:{xs:3,sm:4}}
        }>
         <Typography
            variant="h4"
            sx={{
              fontWeight: 800,
              fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem" },
            }}
          >
            New Donor? Check Your Eligibility First!
          </Typography>
          <Typography variant="p" sx={{textAlign:'left'}}> Quickly review our official guidelines regarding age, weight, and recent travel  to ensure you<br/> can donate safely.</Typography>
        </Stack>
        <Button  variant="contained"  size="large"  sx={{bgcolor: "error.main",
                color: "white",
                px: 5,
                py: 1.5,
                fontWeight: "bold",
                borderRadius: "50px",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                boxShadow: "0px 8px 24px rgba(255, 0, 0, 0.4)",
                "&:hover": {
                  bgcolor: "error.dark",
                  transform: "scale(1.05)",
                  boxShadow: "0px 10px 30px rgba(255, 0, 0, 0.6)",
                },
                transition: "all 0.3s ease",
              marginLeft:90,
              marginTop:-20
                }}>View Donor Guidelines</Button>
      </Box>

    </Container>


<Footer/>
    </>
  )
}

export default LandingPage