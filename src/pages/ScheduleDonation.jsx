import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import {   Box,
  Grid,
  Typography,
  TextField,
  MenuItem,
  Button,
  Card,
  CardContent,
  Divider, } from '@mui/material'

function ScheduleDonation() {
  return (
    <>
    {/* Header*/}
    <Header/>
{/* body */}

<Box
      sx={{
        py: 8,
        px: 3,
        bgcolor: "background.default",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Card
        elevation={8}
        sx={{
          maxWidth: 900,
          width: "100%",
          borderTop: "8px solid",
          borderColor: "error.main",
          borderRadius: 4,
          p: { xs: 3, md: 6 },
        }}
      >
        <Typography
          variant="h4"
          align="center"
          fontWeight="bold"
          color="text.primary"
         sx={{marginBottom:'30px'}}
        >
          Find a Center & Book Your Time
        </Typography>

        {/* Input Section */}
        <Grid container spacing={3} sx={{ mt: 2, ml:10}} >
          {/* Location */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="subtitle2"
              fontWeight={600}
              color="text.secondary"
              gutterBottom
            >
              1. Select Location
            </Typography>
            <TextField
              fullWidth
              label="Enter City"
              value={''}
            
            />
          </Grid>

          {/* Date */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="subtitle2"
              fontWeight={600}
              color="text.secondary"
              gutterBottom
            >
              2. Preferred Date
            </Typography>
            <TextField
              fullWidth
              type="date"
              value={''}
           
            />
          </Grid>

          {/* Blood Type */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="subtitle2"
              fontWeight={600}
              color="text.secondary"
              gutterBottom
            >
              3. Your Blood Type (requerd)
            </Typography>
            <TextField
              select
              fullWidth
              label="Select Blood Type"
              value={''}
              
            >
              <MenuItem value="">I don't know / Prefer not to say</MenuItem>
              <MenuItem value="O-neg">O Negative (Universal Donor)</MenuItem>
              <MenuItem value="O-pos">O Positive</MenuItem>
              <MenuItem value="A-pos">A Positive</MenuItem>
              <MenuItem value="B-pos">B Positive</MenuItem>
            </TextField>
          </Grid>
        </Grid>

        {/* Search Button */}
        <Box textAlign="center" sx={{ mt: 5 }}>
          <Button
            variant="contained"
            size="large"
            color="error"
            sx={{
              px: 6,
              py: 1.5,
              borderRadius: "50px",
              fontWeight: "bold",
              textTransform: "none",
              "&:hover": { transform: "scale(1.05)" },
              transition: "0.3s",
            }}
            onClick={() => alert("Searching drives...")}
          >
            Search Drives
          </Button>
        </Box>

        {/* Results Section */}
        <Box sx={{ mt: 6 }}>
          <Typography
            variant="h6"
            fontWeight="bold"
            sx={{ mb: 2, pb: 1, borderBottom: "2px solid #ddd" }}
          >
            Available Drives Near You:
          </Typography>

          {/* Result Card 1 */}
          <Card
            variant="outlined"
            sx={{
              mb: 2,
              borderLeft: "8px solid",
              borderColor: "error.main",
              "&:hover": { bgcolor: "error.50" },
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                justifyContent: "space-between",
                alignItems: { xs: "flex-start", md: "center" },
              }}
            >
              <Box>
                <Typography color="error.dark" fontWeight="bold" variant="h6">
                  Community Health Center Drive
                </Typography>
                <Typography color="text.secondary" variant="body2">
                  123 Main Street, Springfield, IL 62704
                </Typography>
                <Typography
                  color="error.main"
                  fontWeight="bold"
                  variant="body2"
                  sx={{ mt: 1 }}
                >
                  Critical Need: O Negative, AB Positive
                </Typography>
              </Box>
              <Button
                variant="contained"
                color="error"
                sx={{ borderRadius: "50px", mt: { xs: 2, md: 0 } }}
                onClick={() => alert('Booked Sucessful')}
              >
                Book 10:00 AM
              </Button>
            </CardContent>
          </Card>

          {/* Result Card 2 */}
          <Card
            variant="outlined"
            sx={{
              mb: 2,
              borderLeft: "8px solid",
              borderColor: "info.main",
              "&:hover": { bgcolor: "info.50" },
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                justifyContent: "space-between",
                alignItems: { xs: "flex-start", md: "center" },
              }}
            >
              <Box>
                <Typography color="info.dark" fontWeight="bold" variant="h6">
                  Local University Auditorium
                </Typography>
                <Typography color="text.secondary" variant="body2">
                  456 Oak Avenue, Springfield, IL 62704
                </Typography>
                <Typography
                  color="info.main"
                  fontWeight="bold"
                  variant="body2"
                  sx={{ mt: 1 }}
                >
                  High Need: All Blood Types
                </Typography>
              </Box>
              <Button
                variant="contained"
                color="error"
                sx={{ borderRadius: "50px", mt: { xs: 2, md: 0 } }}
                onClick={() => alert('Booked Sucessful')}
              >
                Book 01:30 PM
              </Button>
            </CardContent>
          </Card>

          {/* Result Card 3 */}
          <Card
            variant="outlined"
            sx={{
              borderLeft: "8px solid",
              borderColor: "grey.500",
              "&:hover": { bgcolor: "grey.100" },
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                justifyContent: "space-between",
                alignItems: { xs: "flex-start", md: "center" },
              }}
            >
              <Box>
                <Typography color="text.primary" fontWeight="bold" variant="h6">
                  City Hall Ballroom
                </Typography>
                <Typography color="text.secondary" variant="body2">
                  789 Public Square, Springfield, IL 62704
                </Typography>
                <Typography
                  color="text.secondary"
                  fontWeight="bold"
                  variant="body2"
                  sx={{ mt: 1 }}
                >
                  Normal Need: A Positive, B Negative
                </Typography>
              </Box>
              <Button
                variant="contained"
                color="error"
                sx={{ borderRadius: "50px", mt: { xs: 2, md: 0 } }}
                onClick={() => alert('Booked Sucessful')}
              >
                Book 04:00 PM
              </Button>
            </CardContent>
          </Card>
        </Box>
      </Card>
    </Box>


    {/* Footer */}
    <Footer/>
    </>
  )
}

export default ScheduleDonation