import * as React from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import logo from "../assets/logo.png";
import profile from "../assets/profile.jpg";
import bellIcon from "../assets/bell.png";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Header = () => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorElCountry, setAnchorElCountry] = React.useState(null);
  const [anchorElState, setAnchorElState] = React.useState(null);
  const [anchorElDistrict, setAnchorElDistrict] = React.useState(null);
  const [anchorElArea, setAnchorElArea] = React.useState(null);

  const [anchorElMobileMenu, setAnchorElMobileMenu] = React.useState(null);

  // Media query to detect small screens (xs, sm)
  const isMobile = useMediaQuery("(max-width: 900px)");

  const handleOpenMobileMenu = (event) => {
    setAnchorElMobileMenu(event.currentTarget);
  };
  const handleCloseMobileMenu = () => {
    setAnchorElMobileMenu(null);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleOpenCountryMenu = (event) => {
    setAnchorElCountry(event.currentTarget);
  };
  const handleOpenStateMenu = (event) => {
    setAnchorElState(event.currentTarget);
  };
  const handleOpenDistrictMenu = (event) => {
    setAnchorElDistrict(event.currentTarget);
  };
  const handleOpenAreaMenu = (event) => {
    setAnchorElArea(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleCloseCountryMenu = () => {
    setAnchorElCountry(null);
  };
  const handleCloseStateMenu = () => {
    setAnchorElState(null);
  };
  const handleCloseDistrictMenu = () => {
    setAnchorElDistrict(null);
  };
  const handleCloseAreaMenu = () => {
    setAnchorElArea(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        background: "white",
        height: "80px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo or Brand */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "flex" } }}>
            <img
              src={logo}
              alt="logo-img"
              width={80}
              height={50}
              style={{ boxShadow: "0 0 0 rgba(0,0,0,0)" }}
            />
          </Box>
          {/* Mobile View: Show Hamburger Menu */}
          {isMobile ? (
            <>
              <IconButton
                onClick={handleOpenMobileMenu}
                sx={{ color: "#9370DB" }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorElMobileMenu}
                open={Boolean(anchorElMobileMenu)}
                onClose={handleCloseMobileMenu}
                PaperProps={{
                  style: {
                    maxHeight: 300,
                    width: "200px",
                  },
                }}
              >
                {/* Dropdowns inside the Menu */}
                <MenuItem onClick={handleCloseMobileMenu}>
                  Select Country
                </MenuItem>
                <MenuItem onClick={handleCloseMobileMenu}>
                  Select State
                </MenuItem>
                <MenuItem onClick={handleCloseMobileMenu}>
                  Select District
                </MenuItem>
                <MenuItem onClick={handleCloseMobileMenu}>Select Area</MenuItem>
              </Menu>
            </>
          ) : (
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <Button
                id="basic-button"
                aria-controls="basic-menu"
                aria-haspopup="true"
                variant="outlined"
                sx={{
                  borderRadius: 10,
                  border: "1px solid #9370DB",
                  color: "#9370DB",
                  textTransform: "none",
                  marginRight: "10px",
                  padding: "2px 10px",
                  height: "30px",
                  backgroundColor: "#ede0ed",
                }}
                onClick={handleOpenCountryMenu}
              >
                Select Country{" "}
                <span style={{ fontSize: "12px", marginLeft: "5px" }}>▼</span>
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorElCountry}
                open={Boolean(anchorElCountry)}
                onClose={handleCloseCountryMenu}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
                PaperProps={{
                  style: {
                    maxHeight: 200,
                    width: "20ch",
                  },
                }}
              >
                <MenuItem onClick={handleCloseCountryMenu}>Country 1</MenuItem>
                <MenuItem onClick={handleCloseCountryMenu}>Country 2</MenuItem>
                <MenuItem onClick={handleCloseCountryMenu}>Country 3</MenuItem>
              </Menu>

              <Button
                id="basic-button"
                aria-controls="basic-menu"
                aria-haspopup="true"
                variant="outlined"
                sx={{
                  borderRadius: 10,
                  border: "1px solid #9370DB",
                  color: "#9370DB",
                  textTransform: "none",
                  marginRight: "10px",
                  padding: "2px 10px",
                  height: "30px",
                  backgroundColor: "#ede0ed",
                }}
                onClick={handleOpenStateMenu}
              >
                Select State{" "}
                <span style={{ fontSize: "12px", marginLeft: "5px" }}>▼</span>
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorElState}
                open={Boolean(anchorElState)}
                onClose={handleCloseStateMenu}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
                PaperProps={{
                  style: {
                    maxHeight: 200,
                    width: "20ch",
                  },
                }}
              >
                <MenuItem onClick={handleCloseStateMenu}>State 1</MenuItem>
                <MenuItem onClick={handleCloseStateMenu}>State 2</MenuItem>
                <MenuItem onClick={handleCloseStateMenu}>State 3</MenuItem>
              </Menu>

              <Button
                id="basic-button"
                aria-controls="basic-menu"
                aria-haspopup="true"
                variant="outlined"
                sx={{
                  borderRadius: 10,
                  border: "1px solid #9370DB",
                  color: "#9370DB",
                  textTransform: "none",
                  marginRight: "10px",
                  padding: "2px 10px",
                  height: "30px",
                  backgroundColor: "#ede0ed",
                }}
                onClick={handleOpenDistrictMenu}
              >
                Select District{" "}
                <span style={{ fontSize: "12px", marginLeft: "5px" }}>▼</span>
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorElDistrict}
                open={Boolean(anchorElDistrict)}
                onClose={handleCloseDistrictMenu}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
                PaperProps={{
                  style: {
                    maxHeight: 200,
                    width: "20ch",
                  },
                }}
              >
                <MenuItem onClick={handleCloseDistrictMenu}>
                  District 1
                </MenuItem>
                <MenuItem onClick={handleCloseDistrictMenu}>
                  District 2
                </MenuItem>
                <MenuItem onClick={handleCloseDistrictMenu}>
                  District 3
                </MenuItem>
              </Menu>

              <Button
                id="basic-button"
                aria-controls="basic-menu"
                aria-haspopup="true"
                variant="outlined"
                sx={{
                  borderRadius: 10,
                  border: "1px solid #9370DB",
                  color: "#9370DB",
                  textTransform: "none",
                  marginRight: "10px",
                  padding: "2px 10px",
                  height: "30px",
                  backgroundColor: "#ede0ed",
                }}
                onClick={handleOpenAreaMenu}
              >
                Select Area{" "}
                <span style={{ fontSize: "12px", marginLeft: "5px" }}>▼</span>
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorElArea}
                open={Boolean(anchorElArea)}
                onClose={handleCloseAreaMenu}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
                PaperProps={{
                  style: {
                    maxHeight: 200,
                    width: "20ch",
                  },
                }}
              >
                <MenuItem onClick={handleCloseAreaMenu}>Area 1</MenuItem>
                <MenuItem onClick={handleCloseAreaMenu}>Area 2</MenuItem>
                <MenuItem onClick={handleCloseAreaMenu}>Area 3</MenuItem>
              </Menu>
            </Box>
          )}

          <IconButton sx={{ ml: 2, mr: 2 }}>
            <img src={bellIcon} alt="bell-icon" width={40} height={40} />
          </IconButton>

          {/* User Profile Section */}
          <Box sx={{ flexGrow: 0, display: "flex", alignItems: "center" }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Pratheek" src={profile} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem key={settings[0]} onClick={handleCloseUserMenu}>
                <Typography textAlign="center">{settings[0]}</Typography>
              </MenuItem>
              <MenuItem key={settings[1]} onClick={handleCloseUserMenu}>
                <Typography textAlign="center">{settings[1]}</Typography>
              </MenuItem>
              <MenuItem key={settings[2]} onClick={handleCloseUserMenu}>
                <Typography textAlign="center">{settings[2]}</Typography>
              </MenuItem>
              <MenuItem key={settings[3]} onClick={handleCloseUserMenu}>
                <Typography textAlign="center">{settings[3]}</Typography>
              </MenuItem>
            </Menu>

            <Box sx={{ ml: 3 }}>
              <Typography
                variant="body1"
                color="text.primary"
                sx={{ display: "flex", alignItems: "center" }}
              >
                Pratheek
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Super Admin
              </Typography>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
