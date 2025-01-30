import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { People, Warning, TrendingUp, History } from "@mui/icons-material";

const MetricCard = ({ icon: Icon, title, value, bgColor, iconBgColor }) => (
  <Box
    sx={{
      minWidth: "200px",
      backgroundColor: bgColor,
      borderRadius: 2,
      padding: 2,
      position: "relative",
    }}
  >
    <Box
      sx={{
        position: "absolute",
        top: 16,
        right: 16,
        width: 60,
        height: 60,
        borderRadius: "50%",
        backgroundColor: iconBgColor,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Icon sx={{ opacity: 0.8 }} />
    </Box>

    <Box sx={{ paddingRight: "48px" }}>
      <Typography
        variant="body2"
        sx={{
          color: "text.secondary",
          marginBottom: 0.5,
          marginTop: 8,
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="h5"
        sx={{
          fontWeight: 600,
          fontSize: "1.5rem",
        }}
      >
        {value.toLocaleString()}
      </Typography>
    </Box>
  </Box>
);

const MetricsDashboard = () => {
  const metrics = [
    {
      icon: People,
      title: "Total Farmlands",
      value: 14563,
      bgColor: "#F3F0FF",
      iconBgColor: "#DDD6FE",
    },
    {
      icon: Warning,
      title: "In Progress",
      value: 2427,
      bgColor: "#F0F7FF",
      iconBgColor: "#FDE68A",
    },
    {
      icon: TrendingUp,
      title: "Approved",
      value: 1569,
      bgColor: "#F0FFF4",
      iconBgColor: "#A7F3D0",
    },
    {
      icon: History,
      title: "Rejected",
      value: 567,
      bgColor: "#FFF5F5",
      iconBgColor: "#FECACA",
    },
  ];

  return (
    <Card sx={{ p: 2, mr: 2, height: 197 }}>
      <CardContent sx={{ p: 0, "&:last-child": { pb: 0 } }}>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            // padding: 2,
            backgroundColor: "white",
            justifyContent: "space-around",
          }}
        >
          {metrics.map((metric, index) => (
            <MetricCard
              key={index}
              icon={metric.icon}
              title={metric.title}
              value={metric.value}
              bgColor={metric.bgColor}
              iconBgColor={metric.iconBgColor}
            />
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default MetricsDashboard;
