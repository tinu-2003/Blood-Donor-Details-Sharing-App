// import { AppBar, Toolbar, Typography, Box, Button, IconButton, Stack } from "@mui/material";
// import SvgIcon from "@mui/material/SvgIcon";
// import RegisterDonor from "./RegisterDonor";
// import LoginPage from "./LoginPage";





// function Header() {

  
//   return (
//     <>
//           <AppBar
//       position="sticky"
//       color="inherit"
//       elevation={5}
//       sx={{ top: 0, zIndex: 10, width:"100%" }}
//     >
//       <Toolbar
//         sx={{
//           maxWidth: "100%",
//           mx: "auto",
//           px: { xs: 2, sm: 4, lg: 6 },
//           py: 1,
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//           flexWrap: "wrap", // allows wrapping on very small screens
//         }}
//       >
//         {/* Logo / Title (Left) */}
//         <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
//           <SvgIcon
//             sx={{
//               color: "error.main",
//               fontSize: 40,
//               animation: "pulse 2s infinite",
//               "@keyframes pulse": {
//                 "0%": { transform: "scale(1)", opacity: 1 },
//                 "50%": { transform: "scale(1.1)", opacity: 0.7 },
//                 "100%": { transform: "scale(1)", opacity: 1 },
//               },
//             }}
//           >
//             <path
//               fillRule="evenodd"
//               clipRule="evenodd"
//               d="M10 2a8 8 0 00-8 8c0 3.235 1.55 6.136 4 7.915V14a2 2 0 012-2h4a2 2 0 012 2v3.915c2.45-1.779 4-4.68 4-7.915a8 8 0 00-8-8z"
//             />
//           </SvgIcon>
//           <Typography
//             variant="h6"
//             sx={{
//               fontWeight: 800,
//               letterSpacing: "0.1em",
//               color: "text.primary",
//             }}
//           >
//             LifeDrop
//           </Typography>
//         </Box>

//         {/* Buttons (Right) */}
//         <Stack
//           direction="row"
//           spacing={2}
//           sx={{ mt: { xs: 1, sm: 0 } }} // small top margin on mobile if wrapped
//         >
//           {/* reg button */}
//           <RegisterDonor />

//           {/* logButton */}
//           <LoginPage/>
//         </Stack>
//       </Toolbar>
//     </AppBar>
//     </>
//   )
// }

// export default Header



import RegisterDonor from "./RegisterDonor";
import LoginPage from "./LoginPage";
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  SvgIcon
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [openDrawer, setOpenDrawer] = useState(false);

  const menuItems = ["Home", "About", "Contact"];

  return (
    <>
      <AppBar
        position="sticky"
        color="inherit"
        // elevation={5}
        sx={{
          py: 1,
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          
          {/* LEFT SECTION → LOGO */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <SvgIcon
              sx={{
                color: "error.main",
                fontSize: 40,
                animation: "pulse 2s infinite",
                "@keyframes pulse": {
                  "0%": { transform: "scale(1)", opacity: 1 },
                  "50%": { transform: "scale(1.1)", opacity: 0.7 },
                  "100%": { transform: "scale(1)", opacity: 1 }
                }
              }}
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 2a8 8 0 00-8 8c0 3.235 1.55 6.136 4 7.915V14a2 2 0 012-2h4a2 2 0 012 2v3.915c2.45-1.779 4-4.68 4-7.915a8 8 0 00-8-8z"
              />
            </SvgIcon>
            <Typography
              variant="h6"
              sx={{ fontWeight: 800, letterSpacing: ".1em" }}
            >
              LifeDrop
            </Typography>
          </Box>

          {/* RIGHT SECTION → BUTTONS (Hide on Mobile) */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 2
            }}
          >
            {/* {menuItems.map((item) => (
              <Button key={item} color="inherit">
                {item}
              </Button>
            ))} */}
           <Link to={'/finddonorpage'}> <Button variant="outlined" color="error">FindDonor</Button></Link>

           <Link to={'/eligibilitycheck'}> <Button variant="outlined" color="error">Eligiblity</Button></Link>
          <Link to={'/scheduledonation'}>
              <Button variant="outlined" color="error">Schedule Donation</Button>
  
          </Link>
          {/* logButton */}
          <LoginPage/>

             {/* reg button */}
                      <RegisterDonor />

            {/* <Button variant="outlined" color="error">
              Login
            </Button>

            <Button variant="contained" color="error">
              Register
            </Button> */}
          </Box>

          {/* MOBILE MENU BUTTON */}
          <IconButton
            sx={{ display: { xs: "flex", md: "none" } }}
            onClick={() => setOpenDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* MOBILE DRAWER */}
      <Drawer anchor="center" open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <Box  sx={{
      width: { xs: "90%", sm: 250 },   // Responsive width
      display: "flex",
      flexDirection: "column",
      gap: 2,                          // Space between buttons
      p: 3,                            // Padding inside drawer
      alignItems: "stretch",           // Buttons take full width
    }}>
       
            {/* {menuItems.map((text) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))} */}
           <Link to={'/finddonorpage'}> <Button variant="outlined" color="error">FindDonor</Button></Link>

              <Link to={'/eligibilitycheck'}><Button variant="outlined" color="error">Eligiblity</Button></Link>
          <Link to={'/scheduledonation'}>  <Button variant="outlined" color="error">Schedule Donation</Button></Link>

          {/* logButton */}
          <LoginPage/>

             {/* reg button */}
                      <RegisterDonor />
          
        </Box>
      </Drawer>
    </>
  );
}
