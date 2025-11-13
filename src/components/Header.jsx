import { AppBar, Toolbar, Typography, Box, Button, IconButton, Stack } from "@mui/material";
import SvgIcon from "@mui/material/SvgIcon";

// import React, { useState } from "react";
import {
  

  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  MenuItem,

} from "@mui/material";
import { useState } from "react";

// 
const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


function Header() {

  // 

   const [open, setOpen] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    bloodType: "",
    gender: "",
    city: "",
    age: "",
  });

  const bloodTypes = ["O-", "O+", "A-", "A+", "B-", "B+", "AB-", "AB+"];
  const genders = ["Male", "Female", "Other"];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("Form Data Submitted:", formData);
    setOpen(false);
    alert("✅ Registration submitted successfully!");
  };

  // 

     const registerDonor = () => {
    console.log("Register Donor clicked!");
    // Add your logic here
  };
  return (
    <>
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
            LifeDrop
          </Typography>
        </Box>

        {/* Desktop Navigation */}
        <Stack direction="row" spacing={8} sx={{ display: { xs: "none", md: "flex" } }}>
          {["Home", "Find Drive", "Find Donor", "Eligibility"].map((link) => (
            <Button
              key={link}
              href=''
              sx={{
                color: "text.secondary",
                fontWeight: 700,
                px: 2,
                "&:hover": { color: "error.main", transition: "all 0.15s" },
              }}
            >
              {link}
            </Button>
          ))}
        </Stack>

        {/* Register Donor Button */}
        <Button
          variant="contained"
          color="success"
          sx={{
            display: { xs: "none", md: "block" },
            px: 4,
            py: 1,
            borderRadius: "12px",
            fontWeight: 600,
            boxShadow: 3,
            textTransform: "none",
            transition: "all 0.3s ease",
            "&:hover": { transform: "scale(1.05)" },
          }}
           onClick={() => setOpen(true)}
        >
          Register as Donor
        </Button>

      </Toolbar>
    </AppBar>

{/* modal */}

 <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>
          <Typography variant="h5" fontWeight="bold" color="error.main">
            Blood Donor Registration
          </Typography>
        </DialogTitle>

        <DialogContent dividers>
          <Box
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              mt: 1,
            }}
          >
            <TextField
              label="Full Name"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              fullWidth
            />
          
            <TextField
              label="Phone Number"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              select
              label="Blood Type"
              name="bloodType"
              value={formData.bloodType}
              onChange={handleChange}
              fullWidth
            >
              {bloodTypes.map((type) => (
                <MenuItem key={type} value={type}>
                  {type}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              select
              label="Gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              fullWidth
            >
              {genders.map((gender) => (
                <MenuItem key={gender} value={gender}>
                  {gender}
                </MenuItem>
              ))}
            </TextField>

             <TextField
              label="Age"
              name="age"
              type="number"
              value={formData.age}
              onChange={handleChange}
              fullWidth
            />
            
            <TextField
              label="City"
              name="city"
              value={formData.city}
              onChange={handleChange}
              fullWidth
            />
              <TextField
              label="District"
              name="district"
              type="text"
              value={formData.district}
              onChange={handleChange}
              fullWidth
            />
           
          </Box>
        </DialogContent>

        <DialogActions sx={{ px: 3, py: 2 }}>
          <Button
            onClick={() => setOpen(false)}
            color="inherit"
            sx={{ mr: 1 }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            variant="contained"
            color="error"
            sx={{ borderRadius: "50px", px: 3 }}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>

      {/* modal end */}
    </>
  )
}

export default Header