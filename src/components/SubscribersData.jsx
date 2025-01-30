import React, { useState } from "react";
import { PieChart, Pie, ResponsiveContainer, Cell } from "recharts";
import {
  Box,
  Typography,
  Button,
  Menu,
  MenuItem,
  Card,
  CardContent,
} from "@mui/material";

const data = [
  { name: "Gold", value: 52.1, color: "#FFD700" },
  { name: "Platinum", value: 22.8, color: "#D3D3D3" },
  { name: "Bronze", value: 11.2, color: "#CD7F32" },
  { name: "Silver", value: 13.9, color: "#C0C0C0" },
];

const SubscribersData = () => {
  // State management for each dropdown
  const [anchorElState, setAnchorElState] = useState(null);
  const [anchorElDistrict, setAnchorElDistrict] = useState(null);

  // Selected values
  const [selectedState, setSelectedState] = useState("Select State");
  const [selectedDistrict, setSelectedDistrict] = useState("Select District");

  // Handle menu opens
  const handleOpenStateMenu = (event) => {
    setAnchorElState(event.currentTarget);
  };

  const handleOpenDistrictMenu = (event) => {
    setAnchorElDistrict(event.currentTarget);
  };

  // Handle menu closes
  const handleCloseStateMenu = (value) => {
    if (typeof value === "string") {
      setSelectedState(value);
    }
    setAnchorElState(null);
  };

  const handleCloseDistrictMenu = (value) => {
    if (typeof value === "string") {
      setSelectedDistrict(value);
    }
    setAnchorElDistrict(null);
  };

  const states = ["State 1", "State 2", "State 3", "State 4"];
  const districts = ["District 1", "District 2", "District 3", "District 4"];

  return (
    <Card
      sx={{
        borderRadius: "16px",
        marginLeft: "20px",
        marginRight: "20px",
        marginBottom: "20px",
      }}
    >
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 3,
            mt: 2,
          }}
        >
          <Box sx={{ ml: 3 }}>
            <Typography variant="subtitle2" color="text.primary">
              Subscribers Data
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: 1 }}>
            {/* State Dropdown */}
            <Button
              aria-controls={Boolean(anchorElState) ? "state-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={Boolean(anchorElState) ? "true" : undefined}
              variant="outlined"
              onClick={handleOpenStateMenu}
              style={{
                borderRadius: 20,
                borderColor: "#9370DB",
                color: "#9370DB",
                textTransform: "none",
                marginRight: "10px",
                padding: "2px 10px",
                height: "30px",
                fontSize: "0.7rem",
              }}
            >
              {selectedState}{" "}
              <span style={{ fontSize: "12px", marginLeft: "5px" }}>▼</span>
            </Button>
            <Menu
              id="state-menu"
              anchorEl={anchorElState}
              open={Boolean(anchorElState)}
              onClose={() => handleCloseStateMenu()}
              PaperProps={{
                style: {
                  maxHeight: 200,
                  width: "20ch",
                },
              }}
            >
              {states.map((state) => (
                <MenuItem
                  key={state}
                  onClick={() => handleCloseStateMenu(state)}
                >
                  {state}
                </MenuItem>
              ))}
            </Menu>

            {/* District Dropdown */}
            <Button
              aria-controls={
                Boolean(anchorElDistrict) ? "district-menu" : undefined
              }
              aria-haspopup="true"
              aria-expanded={Boolean(anchorElDistrict) ? "true" : undefined}
              variant="outlined"
              onClick={handleOpenDistrictMenu}
              style={{
                borderRadius: 20,
                borderColor: "#9370DB",
                color: "#9370DB",
                textTransform: "none",
                marginRight: "10px",
                padding: "2px 10px",
                height: "30px",
                fontSize: "0.7rem",
              }}
            >
              {selectedDistrict}{" "}
              <span style={{ fontSize: "12px", marginLeft: "5px" }}>▼</span>
            </Button>
            <Menu
              id="district-menu"
              anchorEl={anchorElDistrict}
              open={Boolean(anchorElDistrict)}
              onClose={() => handleCloseDistrictMenu()}
              PaperProps={{
                style: {
                  maxHeight: 200,
                  width: "20ch",
                },
              }}
            >
              {districts.map((district) => (
                <MenuItem
                  key={district}
                  onClick={() => handleCloseDistrictMenu(district)}
                >
                  {district}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ width: "50%", height: 300 }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={80}
                  dataKey="value"
                  startAngle={90}
                  endAngle={-270}
                  paddingAngle={3}
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </Box>

          <Box sx={{ width: "45%" }}>
            {data.map((item, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: 2,
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Box
                    sx={{
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      backgroundColor: item.color,
                      mr: 1.5,
                    }}
                  />
                  <Typography sx={{ color: "#333", fontSize: "1rem" }}>
                    {item.name}
                  </Typography>
                </Box>
                <Typography sx={{ fontWeight: 500, fontSize: "1rem" }}>
                  {item.value}%
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default SubscribersData;
