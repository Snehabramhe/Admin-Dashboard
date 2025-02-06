import React from "react";
import { Box } from "@mui/material";
import { Grid } from "@mui/material";
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
    <Box sx={{ width: "100%", minHeight: "100vh", bgcolor: "grey.100" }}>
      <Box sx={{ mb: 2 }}>
        <Header />
      </Box>

      {/* Top Stats Section */}
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <SalesCard
            totalSales={2445678}
            nriSalesPercentage={71}
            localSalesPercentage={29}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <VisitorStats nriVisitorPercentage={71} localVisitorPercentage={29} />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <MetricsDashboard />
        </Grid>
      </Grid>

      {/* Charts Section */}
      <Grid container spacing={2} sx={{ mt: 0 }}>
        <Grid item xs={12} md={8}>
          <PerformersChart />
        </Grid>
        <Grid item xs={12} md={4}>
          <SalesChart />
        </Grid>
      </Grid>

      {/* Bottom Section */}
      <Grid container spacing={2} sx={{ mt: 0 }}>
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
