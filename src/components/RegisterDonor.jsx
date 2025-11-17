// import React, { useState } from "react";
import Swal from 'sweetalert2'
import {
  

  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  MenuItem,
  Button,
  Typography,
  Box,
  FormControl,
  InputLabel,
  Select

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

                    Swal.fire({
  title: 'Error!',
  text: 'Please fill all fields!',
  icon: 'error',
  confirmButtonText: 'Okay'
})
  
    return;
  }
// Phone validation

   if (formData.phone.length < 10 ) {

            Swal.fire({
  title: 'Error!',
  text: ' Phone number must be at least 10 digits!',
  icon: 'error',
  confirmButtonText: 'Okay'
})
   
   
    return;
  }
// age validation
    if (formData.age < 18) {

        Swal.fire({
  title: 'Under Age!',
  text: ' You must be at least 18 years old to donate blood!',
  icon: 'error',
  confirmButtonText: 'Okay'
})
    
    return;
  }


  const response = await regDonors(formData)
  console.log(response.status);
  
//   last alert
if(response.status == 201){

        console.log("Form Data Submitted:", formData);
    setOpen(false);

    Swal.fire({
  title: 'Registration submitted successfully!',
  text: ' Thank You.Team will contact you Soon',
  icon: 'success',
  confirmButtonText: 'Okay'
})
  

}
else{


   Swal.fire({
  title: 'Error...!',
  text: '  Your data not registered please try  again latter....',
  icon: 'error',
  confirmButtonText: 'Okay'
})
  
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

            <FormControl fullWidth>
  <InputLabel id="district-label">District</InputLabel>
  <Select
    labelId="district-label"
    label="District"
    name="district"
    value={formData.district}
    onChange={handleChange}
  >
    <MenuItem value="Thiruvananthapuram">Thiruvananthapuram</MenuItem>
    <MenuItem value="Kollam">Kollam</MenuItem>
    <MenuItem value="Pathanamthitta">Pathanamthitta</MenuItem>
    <MenuItem value="Alappuzha">Alappuzha</MenuItem>
    <MenuItem value="Kottayam">Kottayam</MenuItem>
    <MenuItem value="Idukki">Idukki</MenuItem>
    <MenuItem value="Ernakulam">Ernakulam</MenuItem>
    <MenuItem value="Thrissur">Thrissur</MenuItem>
    <MenuItem value="Palakkad">Palakkad</MenuItem>
    <MenuItem value="Malappuram">Malappuram</MenuItem>
    <MenuItem value="Kozhikode">Kozhikode</MenuItem>
    <MenuItem value="Wayanad">Wayanad</MenuItem>
    <MenuItem value="Kannur">Kannur</MenuItem>
    <MenuItem value="Kasaragod">Kasaragod</MenuItem>
  </Select>
</FormControl>
          
           
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