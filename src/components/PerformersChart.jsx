import React, { useState } from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import { Card, CardContent, Button, Box, Typography } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const PerformersChart = () => {
  const performersData = [
    {
      name: "SAM",
      value: 10,
      total: 100,
      img: "https://i.pravatar.cc/40?img=1",
    },
    {
      name: "Amanda",
      value: 20,
      total: 100,
      img: "https://i.pravatar.cc/40?img=2",
    },
    {
      name: "Carry",
      value: 30,
      total: 100,
      img: "https://i.pravatar.cc/40?img=3",
    },
    {
      name: "Ben",
      value: 8,
      total: 100,
      img: "https://i.pravatar.cc/40?img=4",
    },
    {
      name: "Richa",
      value: 22,
      total: 100,
      img: "https://i.pravatar.cc/40?img=5",
    },
    {
      name: "Mike",
      value: 32,
      total: 100,
      img: "https://i.pravatar.cc/40?img=6",
    },
    {
      name: "Bide",
      value: 15,
      total: 100,
      img: "https://i.pravatar.cc/40?img=7",
    },
    {
      name: "Priya",
      value: 12,
      total: 100,
      img: "https://i.pravatar.cc/40?img=8",
    },
    {
      name: "Amy",
      value: 25,
      total: 100,
      img: "https://i.pravatar.cc/40?img=9",
    },
    {
      name: "Rig",
      value: 7,
      total: 100,
      img: "https://i.pravatar.cc/40?img=10",
    },
    {
      name: "Boston",
      value: 18,
      total: 100,
      img: "https://i.pravatar.cc/40?img=11",
    },
    {
      name: "Lara",
      value: 35,
      total: 100,
      img: "https://i.pravatar.cc/40?img=12",
    },
  ];

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

  const CustomBar = (props) => {
    const { x, y, width, height, img } = props;
    const radius = 10;
    const spacing = 10;

    return (
      <g>
        <rect x={x} y={y} width={width} height={height} fill="#4A6CF7" />

        {/* Clip path to make the image round */}
        <defs>
          <clipPath id={`clip-${x}`}>
            <circle cx={x + width / 2} cy={y - radius - spacing} r={radius} />
          </clipPath>
        </defs>

        <image
          x={x + width / 2 - radius - 3}
          y={y - 20 - spacing}
          width="25"
          height="25"
          xlinkHref={img}
          clipPath={`url(#clip-${x})`}
          preserveAspectRatio="xMidYMid slice"
        />
      </g>
    );
  };

  return (
    <>
      <Card sx={{ borderRadius: "16px", ml: 2, mr: { xs: 2, md: 0 } }}>
        <CardContent>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "column", md: "row" },
              alignItems: { xs: "flex-start", sm: "flex-start", md: "center" },
              justifyContent: "space-between",
              mb: 3,
            }}
          >
            <Box>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ display: "flex", alignItems: "center" }}
              >
                Top
              </Typography>
              <Typography variant="h6" color="text.primary">
                Performers List
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 1,
                mt: { xs: 1, sm: 1, md: 0 },
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
              >
                {selectedState}{" "}
                <span style={{ fontSize: "10px", marginLeft: "5px" }}>▼</span>
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
              >
                {selectedDistrict}{" "}
                <span style={{ fontSize: "10px", marginLeft: "5px" }}>▼</span>
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
              >
                {selectedArea}{" "}
                <span style={{ fontSize: "10px", marginLeft: "5px" }}>▼</span>
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
          <hr />
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={performersData}
              margin={{ top: 40, bottom: 5, right: 16 }}
            >
              <CartesianGrid strokeDasharray="5 5" vertical={false} />

              <XAxis
                dataKey="name"
                axisLine={true}
                tickLine={false}
                scale="point"
                padding={{ left: 10, right: 10 }}
                tick={{ fontSize: "clamp(0.6rem, 2vw, 1rem)" }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                ticks={[0, 20, 40, 60, 80, 100]}
              />

              <Bar
                dataKey="value"
                shape={<CustomBar />}
                data={performersData.map((item) => ({
                  ...item,
                  img: item.img,
                }))}
                barSize={10}
                background={{ fill: "#eee" }}
              />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </>
  );
};

export default PerformersChart;
