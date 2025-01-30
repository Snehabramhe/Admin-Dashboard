import React, { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Box, Button, Card, CardContent, Menu, MenuItem } from "@mui/material";

const data = [
  { name: "Jan", visitors: 10000 },
  { name: "Feb", visitors: 15000 },
  { name: "Mar", visitors: 12000 },
  { name: "Apr", visitors: 22000 },
  { name: "May", visitors: 30000 },
  { name: "Jun", visitors: 25000 },
  { name: "Jul", visitors: 28000 },
];

const ShadedLineChart = () => {
  // State management for each dropdown
  const [anchorElStartMonth, setAnchorElStartMonth] = useState(null);
  const [anchorElEndMonth, setAnchorElEndMonth] = useState(null);

  // Selected values
  const [selectedStart, setSelectedStart] = useState("Start Month");
  const [selectedEnd, setSelectedEnd] = useState("End Month");

  // Handle menu opens
  const handleOpenStateMenu = (event) => {
    setAnchorElStartMonth(event.currentTarget);
  };

  const handleOpenDistrictMenu = (event) => {
    setAnchorElEndMonth(event.currentTarget);
  };

  // Handle menu closes
  const handleCloseStateMenu = (value) => {
    if (typeof value === "string") {
      setSelectedStart(value);
    }
    setAnchorElStartMonth(null);
  };

  const handleCloseDistrictMenu = (value) => {
    if (typeof value === "string") {
      setSelectedEnd(value);
    }
    setAnchorElEndMonth(null);
  };

  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (
    <Card
      sx={{
        borderRadius: "16px",
        marginLeft: "20px",
        padding: "20px",
        marginBottom: "20px",
      }}
    >
      <CardContent>
        {/* Header Section */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <h3 style={{ margin: 0, fontSize: "16px", color: "#333" }}>
              Location Wise Visitors
            </h3>
          </Box>
          <Box>
            {/* State Dropdown */}
            <Button
              aria-controls={
                Boolean(anchorElStartMonth) ? "start-menu" : undefined
              }
              aria-haspopup="true"
              aria-expanded={Boolean(anchorElStartMonth) ? "true" : undefined}
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
              {selectedStart}{" "}
              <span style={{ fontSize: "12px", marginLeft: "5px" }}>▼</span>
            </Button>
            <Menu
              id="start-menu"
              anchorEl={anchorElStartMonth}
              open={Boolean(anchorElStartMonth)}
              onClose={() => handleCloseStateMenu()}
              PaperProps={{
                style: {
                  maxHeight: 200,
                  width: "20ch",
                },
              }}
            >
              {month.map((state) => (
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
              aria-controls={Boolean(anchorElEndMonth) ? "end-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={Boolean(anchorElEndMonth) ? "true" : undefined}
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
              {selectedEnd}{" "}
              <span style={{ fontSize: "12px", marginLeft: "5px" }}>▼</span>
            </Button>
            <Menu
              id="end-menu"
              anchorEl={anchorElEndMonth}
              open={Boolean(anchorElEndMonth)}
              onClose={() => handleCloseDistrictMenu()}
              PaperProps={{
                style: {
                  maxHeight: 200,
                  width: "20ch",
                },
              }}
            >
              {month.map((district) => (
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

        {/* Chart Container */}
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart
            data={data}
            margin={{ top: 20, right: 20, left: 0, bottom: 0 }}
          >
            {/* Gradient for soft shading */}
            <defs>
              <linearGradient id="colorVisitors" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#6C63FF" stopOpacity={0.2} />
                <stop offset="95%" stopColor="#6C63FF" stopOpacity={0} />
              </linearGradient>
            </defs>

            {/* X & Y Axis */}
            <XAxis dataKey="name" tick={{ fill: "#999" }} />
            <YAxis
              tick={{ fill: "#999" }}
              domain={[0, 30000]}
              ticks={[0, 10000, 20000, 30000]}
              tickFormatter={(value) => `${value / 1000}K`}
            />

            {/* Tooltip */}
            <Tooltip />

            {/* Shaded Line */}
            <Area
              type="monotone"
              dataKey="visitors"
              stroke="#6C63FF"
              strokeWidth={1.5}
              fill="url(#colorVisitors)"
            />

            {/* Extra Labels in Graph */}
            <text x="12%" y="90" fill="#000" fontSize="14px" fontWeight="600">
              Location Wise Visitors
            </text>
            <text x="12%" y="140" fill="#999" fontSize="12px">
              30K
            </text>
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default ShadedLineChart;
