import { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Typography, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { issueDonors } from '../services/allAPIs';

function ReportIssue({ donor }) {
   if (!donor) return null;
  const [open, setOpen] = useState(false);
  const [reason, setReason] = useState('');
  const [issue, setIssue] = useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setReason('');
    setIssue('');
  };

 
  const handleSubmit = async() => {
    const finalReason = issue === 'Other' ? reason : issue;

    console.log('Reported donor:', donor);
    console.log('Issue:', finalReason);
  const reportData = {
    userCode: donor.id,
    reason: finalReason,
    userName: donor.fullName,
    phone:donor.phone
  };
    const  response = await issueDonors(reportData)
    console.log(response.status);
    
    alert('Report submitted successfully!');
    handleClose();
  };
  return (
    <>
          <Button variant="outlined" color="error" onClick={handleOpen}>
        Report
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Report Incorrect Donor Details</DialogTitle>
        <DialogContent>
          <Typography variant="body2" mb={2}>
            Donor: {donor.fullName} ({donor.bloodType}, {donor.city}, {donor.district})
          </Typography>

          {/* Hardcoded select options */}
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel>Issue</InputLabel>
            <Select
              value={issue}
              onChange={(e) => setIssue(e.target.value)}
              label="Issue"
            >
              <MenuItem value="Incorrect phone number">Incorrect phone number</MenuItem>
              <MenuItem value="Wrong blood type">Wrong blood type</MenuItem>
              <MenuItem value="Wrong city or district">Wrong city or district</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </Select>
          </FormControl>

          {issue === 'Other' && (
            <TextField
              autoFocus
              multiline
              rows={4}
              label="Please specify"
              fullWidth
              value={reason}
              onChange={(e) => setReason(e.target.value)}
            />
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit} variant="contained" color="error">Submit</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default ReportIssue