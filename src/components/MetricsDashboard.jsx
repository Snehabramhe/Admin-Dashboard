import React from "react";
import { Box, Card, CardContent, Typography, Grid } from "@mui/material";
import { People, Warning, TrendingUp, History } from "@mui/icons-material";

const MetricCard = ({ icon: Icon, title, value, bgColor, iconBgColor }) => (
  <Box
    sx={{
      backgroundColor: bgColor,
      borderRadius: 4,
      padding: 2,
      position: "relative",
      width: "100%",
      minHeight: "120px",
      height: "100%",
    }}
  >
    {/* Icon container */}
    <Box
      sx={{
        position: "absolute",
        top: 16,
        right: 16,
        borderRadius: "50%",
        backgroundColor: iconBgColor,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Icon sx={{ opacity: 0.8, fontSize: "2rem" }} />
    </Box>

    {/* Card Content */}
    <Box sx={{ mt: 10 }}>
      <Typography
        variant="body2"
        sx={{ color: "text.secondary", fontSize: "0.7rem", mb: 0.5 }}
      >
        {title}
      </Typography>
      <Typography variant="h5" sx={{ fontWeight: 600, fontSize: "1.2rem" }}>
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
    <Card
      sx={{
        mr: 2,
        borderRadius: 4,
        minHeight: "210px",
        ml: { xs: 2, sm: 2, md: 0 },
      }}
    >
      <CardContent>
        <Grid container spacing={2}>
          {metrics.map((metric, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <MetricCard {...metric} />
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default MetricsDashboard;
