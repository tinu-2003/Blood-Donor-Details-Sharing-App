import { Box, Container, Typography, Button, Stack } from "@mui/material";

import Header from '../components/Header'

function LandingPage() {
  return (

    <> 
    <Header/>

       
      {/* <!-- Hero Section --> */}
      <main>
      <Container
        maxWidth="lg"
        sx={{
          py: 16,
          px: { xs: 2, sm: 4, lg: 6 },
          textAlign: "center",
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
              Schedule Your Donation
            </Button>

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
              Find Donor in Need
            </Button>
          </Stack>
        </Box>
      </Container>
    </main>



    </>
  )
}

export default LandingPage