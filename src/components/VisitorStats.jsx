import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const VisitorStats = ({ nriVisitorPercentage, localVisitorPercentage }) => {
  // Dynamic Data for Pie Charts
  const createPieData = (filledValue) => [
    { name: "filled", value: filledValue },
    { name: "unfilled", value: 100 - filledValue },
  ];

  const renderPieChart = (data, value) => (
    <ResponsiveContainer width="100%" height={90}>
      <PieChart width={100} height={90}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          startAngle={225}
          endAngle={-45}
          innerRadius="75%"
          outerRadius="95%"
          dataKey="value"
        >
          <Cell fill="#4169e1" />
          <Cell fill="#f0f0f0" />
        </Pie>
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize={18}
          fontWeight="500"
        >
          {value}%
        </text>
      </PieChart>
    </ResponsiveContainer>
  );

  return (
    <Card
      sx={{
        borderRadius: 4,
        minHeight: "210px",
        mr: { xs: 2, sm: 2, md: 0 },
        ml: { xs: 2, sm: 0 },
      }}
    >
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Typography
            variant="subtitle1"
            color="text.primary"
            sx={{ fontWeight: 500 }}
          >
            Visitors
          </Typography>
          <Typography
            variant="subtitle2"
            color="text.secondary"
            sx={{ color: "#9e9e9e" }}
          >
            Vs Last Week
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            mt: 1,
            width: "100%",
          }}
        >
          {/* NRI Visitor */}
          <Box sx={{ textAlign: "center", flex: "1 1 45%", mb: 2 }}>
            {renderPieChart(
              createPieData(nriVisitorPercentage),
              nriVisitorPercentage
            )}
          </Box>

          {/* Local Visitor */}
          <Box sx={{ textAlign: "center", flex: "1 1 45%", mb: 2 }}>
            {renderPieChart(
              createPieData(localVisitorPercentage),
              localVisitorPercentage
            )}
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Typography
            variant="subtitle1"
            color="text.primary"
            sx={{ fontWeight: 500 }}
          >
            NRI Visitor
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.primary"
            sx={{ fontWeight: 500 }}
          >
            Local Visitor
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default VisitorStats;
