import { AppBar, Toolbar, Typography, Box, Button, IconButton, Stack } from "@mui/material";
import SvgIcon from "@mui/material/SvgIcon";


const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


function Header() {

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
          onClick={registerDonor}
        >
          Register as Donor
        </Button>

      </Toolbar>
    </AppBar>


    </>
  )
}

export default Header