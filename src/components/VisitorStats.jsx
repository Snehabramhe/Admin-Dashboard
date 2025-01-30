import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";
import { PieChart, Pie, Cell } from "recharts";

const VisitorStats = () => {
  // Data for NRI Visitor
  const nriData = [
    { name: "filled", value: 71 },
    { name: "unfilled", value: 29 },
  ];

  // Data for Local Visitor
  const localData = [
    { name: "filled", value: 29 },
    { name: "unfilled", value: 71 },
  ];

  const renderPieChart = (data, value) => (
    <PieChart width={130} height={98}>
      <Pie
        data={data}
        cx={65}
        cy={65}
        startAngle={225}
        endAngle={-45}
        innerRadius={45}
        outerRadius={55}
        paddingAngle={0}
        dataKey="value"
      >
        <Cell fill="#4169e1" />
        <Cell fill="#f0f0f0" />
      </Pie>
      <text
        x={65}
        y={65}
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize={20}
        fontWeight="500"
      >
        {value}%
      </text>
    </PieChart>
  );

  return (
    <Card
      sx={{
        padding: 0,
      }}
    >
      <CardContent sx={{ p: 0 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            variant="subtitle1"
            color="text.primary"
            sx={{
              fontWeight: 500,
              color: "#333",
              mt: 2,
              ml: 2,
            }}
          >
            Visitors
          </Typography>
          <Typography
            variant="subtitle2"
            color="text.secondary"
            sx={{
              color: "#9e9e9e",
              fontWeight: 400,
              mt: 2,
              mr: 2,
            }}
          >
            Vs Last Week
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            //   px: 2
          }}
        >
          <Box sx={{ textAlign: "center" }}>
            {renderPieChart(nriData, 71)}
            <Typography
              variant="subtitle2"
              color="text.primary"
              sx={{
                mt: 1,
              }}
            >
              NRI Visitor
            </Typography>
          </Box>

          <Box sx={{ textAlign: "center" }}>
            {renderPieChart(localData, 29)}
            <Typography
              variant="subtitle2"
              color="text.primary"
              sx={{
                mt: 1,
              }}
            >
              Local Visitor
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default VisitorStats;
