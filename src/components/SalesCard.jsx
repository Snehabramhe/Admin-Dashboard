import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import { TrendingUp, TrendingDown, BusinessCenter } from "@mui/icons-material";

const SalesCard = () => {
  return (
    <Card sx={{ p: 3, marginLeft: "20px" }}>
      <CardContent sx={{ p: 0, "&:last-child": { pb: 0 } }}>
        {/* Header Section */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            mb: 3,
          }}
        >
          <Box>
            <Typography variant="subtitle1" color="text.primary">
              Total Sales
            </Typography>
            <Typography
              variant="h4"
              component="div"
              sx={{ fontWeight: "bold", mt: 1 }}
            >
              $24,45678
            </Typography>
          </Box>

          <Box
            sx={{
              backgroundColor: "primary.light",
              borderRadius: 2,
              width: 48,
              height: 48,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <BusinessCenter sx={{ color: "primary.main" }} />
          </Box>
        </Box>

        {/* Sales Metrics Section */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* NRI Sales */}
          <Box>
            <Typography
              variant="subtitle2"
              color="text.secondary"
              sx={{ mb: 0.5 }}
            >
              NRI SALES
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <TrendingUp sx={{ color: "success.main", fontSize: 20 }} />
              <Typography variant="body2" sx={{ color: "success.main" }}>
                71%
              </Typography>
            </Box>
          </Box>

          {/* Local Sales */}
          <Box>
            <Typography
              variant="subtitle2"
              color="text.secondary"
              sx={{ mb: 0.5 }}
            >
              Local Sales
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <TrendingDown sx={{ color: "error.main", fontSize: 20 }} />
              <Typography variant="body2" sx={{ color: "error.main" }}>
                29%
              </Typography>
            </Box>
          </Box>

          {/* Vs Last Month */}
          <Typography variant="body2" color="text.secondary">
            Vs Last Month
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default SalesCard;
