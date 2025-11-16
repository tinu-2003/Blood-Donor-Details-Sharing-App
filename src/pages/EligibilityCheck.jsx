import React from 'react';
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RegisterDonor from '../components/RegisterDonor';

function EligibilityCheck() {
  return (
  <>
  {/* header */}
  <Header/>

  {/* Eligibility */}
    <Box
      sx={{
       
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        p: 3,
       marginTop:5.6
      }}
    >
      {/* Header Section */}
      <HealthAndSafetyIcon sx={{ fontSize: 70, color: 'error.main', mb: 1 }} />
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        New Donor? Check Your Eligibility First!
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 3 }}>
        Ensure you meet the health and age requirements before donating blood.
      </Typography>

      {/* Eligibility Criteria */}
      <Card sx={{ maxWidth: 500, mb: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Basic Eligibility Criteria:
          </Typography>
          <List dense>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon color="success" />
              </ListItemIcon>
              <ListItemText primary="Age between 18 and 65 years" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon color="success" />
              </ListItemIcon>
              <ListItemText primary="Minimum weight of 50 kg (110 lbs)" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon color="success" />
              </ListItemIcon>
              <ListItemText primary="Good general health on the day of donation" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon color="success" />
              </ListItemIcon>
              <ListItemText primary="No recent tattoos, surgeries, or infections" />
            </ListItem>
          </List>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <Box>
       
       
       <RegisterDonor/>
      </Box>
    </Box>

    {/* Footer */}

    <Footer/>
  </>
  )
}

export default EligibilityCheck