// import React, { useState } from "react";
import {
  

  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  MenuItem,
  Button,
  Typography,
  Box

} from "@mui/material";
import { useState } from "react";
import { regDonors } from "../services/allAPIs";

// 

function RegisterDonor() {


    // 

   const [open, setOpen] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    district: "",
    phone: "",
    bloodType: "",
    gender: "",
    city: "",
    age: "",
    userStatus:0
  });

  const bloodTypes = ["O-", "O+", "A-", "A+", "B-", "B+", "AB-", "AB+"];
  const genders = ["Male", "Female", "Other"];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(e);
    
  };

  const handleSubmit = async() => {
// validation 

// Form input box validation
    if (!formData.fullName || !formData.phone || !formData.bloodType || 
      !formData.gender || !formData.age || !formData.city || !formData.district) {
    alert("Please fill all fields!");
    return;
  }
// Phone validation

   if (formData.phone.length < 10 ) {
    alert("Phone number must be at least 10 digits!");
    return;
  }
// age validation
    if (formData.age < 18) {
    alert("You must be at least 18 years old to donate blood!");
    return;
  }


  const response = await regDonors(formData)
  console.log(response.status);
  
//   last alert
if(response.status == 201){

        console.log("Form Data Submitted:", formData);
    setOpen(false);
    alert("✅ Registration submitted successfully!");

}
else{

    alert("Error...! Your data not registered please try  again latter....")
}



  };

  return (
    <>
    <div>
        
           <Button
         variant="contained" color="error"
          sx={{
            borderRadius: "15px",
            fontWeight: 400,
            boxShadow: 5,
            textTransform: "none",
            transition: "all 0.3s ease",
            "&:hover": { transform: "scale(1.05)" },
          }}
           onClick={() => setOpen(true)}
        >
          Register as Donor
        </Button>
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
    </div>
    
    </>
  )
}

export default RegisterDonor