import React, { useState } from "react";
import { Box, Card, CardContent, Typography, MenuItem } from "@mui/material";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";

const data = [
  { name: "Tanuku", value: 125, color: "#A5A6F6" },
  { name: "Attili", value: 140, color: "#94E4D3" },
  { name: "Palakollu", value: 120, color: "#000000" },
  { name: "Rajole", value: 165, color: "#8BB8F4" },
  { name: "Eluru", value: 90, color: "#C5D6F5" },
  { name: "Tanuku", value: 130, color: "#94E4D3" },
];

const yAxisLabels = [
  { value: 25, label: "25 L" },
  { value: 50, label: "50 L" },
  { value: 100, label: "1 CR" },
  { value: 150, label: "25 CR" },
];

const CustomYAxisTick = ({ x, y, payload }) => {
  const label =
    yAxisLabels.find((item) => item.value === payload.value)?.label || "";
  return (
    <text
      x={x}
      y={y}
      dy={4}
      textAnchor="end"
      fill="#9CA3AF"
      fontSize={12}
      fontFamily="Inter, sans-serif"
    >
      {label}
    </text>
  );
};

const SalesChart = () => {
  // State management for each dropdown
  const [anchorElState, setAnchorElState] = useState(null);
  const [anchorElDistrict, setAnchorElDistrict] = useState(null);
  const [anchorElArea, setAnchorElArea] = useState(null);

  // Selected values
  const [selectedState, setSelectedState] = useState("Select State");
  const [selectedDistrict, setSelectedDistrict] = useState("Select District");
  const [selectedArea, setSelectedArea] = useState("Select Area");

  // Handle menu opens
  const handleOpenStateMenu = (event) => {
    setAnchorElState(event.currentTarget);
  };

  const handleOpenDistrictMenu = (event) => {
    setAnchorElDistrict(event.currentTarget);
  };

  const handleOpenAreaMenu = (event) => {
    setAnchorElArea(event.currentTarget);
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

  const handleCloseAreaMenu = (value) => {
    if (typeof value === "string") {
      setSelectedArea(value);
    }
    setAnchorElArea(null);
  };

  const states = ["State 1", "State 2", "State 3", "State 4"];
  const districts = ["District 1", "District 2", "District 3", "District 4"];
  const areas = ["Area 1", "Area 2", "Area 3", "Area 4"];

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <>
      <Card
        sx={{
          borderRadius: 4,
          ml: { xs: 2, sm: 2, md: 0 },
          mr: 2,
        }}
      >
        <CardContent>
          <Box
            sx={{
              background: "white",
              height: "96px",
              display: "flex",
              flexDirection: { xs: "column", sm: "column", md: "row" },
              alignItems: {
                xs: "flex-start",
                sm: "flex-start",
                md: "flex-start",
              },
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ ml: 0 }}>
              <Typography variant="subtitle2" color="text.primary">
                Sales Report
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 1,
                mt: { xs: 1, sm: 1, md: 0 },
                ml: { md: 1 },
                mb: { md: 1 },
              }}
            >
              {/* State Dropdown */}
              <Button
                aria-controls={
                  Boolean(anchorElState) ? "state-menu" : undefined
                }
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
                }}
                sx={{
                  width: { xs: "125px", md: "105px" },
                  fontSize: { xs: "0.9rem", md: "0.65rem" },
                }}
              >
                {selectedState}{" "}
                <span style={{ fontSize: "8px", marginLeft: "5px" }}>▼</span>
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
                }}
                sx={{
                  width: { xs: "130px", md: "110px" },
                  fontSize: { xs: "0.9rem", md: "0.65rem" },
                }}
              >
                {selectedDistrict}{" "}
                <span style={{ fontSize: "8px", marginLeft: "5px" }}>▼</span>
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

              {/* Area Dropdown */}
              <Button
                aria-controls={Boolean(anchorElArea) ? "area-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={Boolean(anchorElArea) ? "true" : undefined}
                variant="outlined"
                onClick={handleOpenAreaMenu}
                style={{
                  borderRadius: 20,
                  borderColor: "#9370DB",
                  color: "#9370DB",
                  textTransform: "none",
                  marginRight: "10px",
                  padding: "2px 10px",
                  height: "30px",
                }}
                sx={{
                  width: { xs: "125px", md: "105px" },
                  fontSize: { xs: "0.9rem", md: "0.65rem" },
                }}
              >
                {selectedArea}{" "}
                <span style={{ fontSize: "8px", marginLeft: "5px" }}>▼</span>
              </Button>
              <Menu
                id="area-menu"
                anchorEl={anchorElArea}
                open={Boolean(anchorElArea)}
                onClose={() => handleCloseAreaMenu()}
                PaperProps={{
                  style: {
                    maxHeight: 200,
                    width: "20ch",
                  },
                }}
              >
                {areas.map((area) => (
                  <MenuItem
                    key={area}
                    onClick={() => handleCloseAreaMenu(area)}
                  >
                    {area}
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Box>

          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#9CA3AF", fontSize: 12 }}
              />

              <YAxis
                axisLine={false}
                tickLine={false}
                tick={<CustomYAxisTick />}
                ticks={[25, 50, 100, 150]}
                domain={[25, 150]}
                interval={0}
                width={45}
              />
              <Bar
                dataKey="value"
                fill="#82ca9d"
                barSize={30}
                data={data.map((item) => ({
                  ...item,
                  fill: getRandomColor(),
                }))}
              />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </>
  );
};

export default SalesChart;
