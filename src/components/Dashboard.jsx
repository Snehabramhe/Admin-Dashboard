import React from "react";
import { Box, Grid } from "@mui/material";
import Header from "./Header";
import PerformersChart from "./PerformersChart";
import SalesChart from "./SalesChart";
import ShadedLineChart from "./ShadedLineChart";
import SubscribersData from "./SubscribersData";
import SalesCard from "./SalesCard";
import VisitorStats from "./VisitorStats";
import MetricsDashboard from "./MetricsDashboard";

const Dashboard = () => {
  return (
    <Box className="p-6">
      <Box mb={5}>
        <Header />
      </Box>

      <Grid container spacing={3} mb={5}>
        <Grid item xs={12} md={3}>
          <SalesCard />
        </Grid>

        <Grid item xs={12} md={2}>
          <VisitorStats />
        </Grid>

        <Grid item xs={12} md={7}>
          <MetricsDashboard />
        </Grid>
      </Grid>

      <Grid container mt={1}>
        <Grid item xs={12} md={8}>
          <PerformersChart />
        </Grid>

        <Grid item xs={12} md={4} marginBottom={5}>
          <SalesChart />
        </Grid>

        <Grid item xs={12} md={8}>
          <ShadedLineChart />
        </Grid>

        <Grid item xs={12} md={4}>
          <SubscribersData />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
