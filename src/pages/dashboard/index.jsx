import { Box } from "@mui/material";
import React from "react";
import Cards from "../../components/Cards/Cards";
import Chart from "../../components/GraphChart";

const Dashboard = () => {
  return (
    <Box display="grid" gridTemplateColumns="2fr 1fr">
      <Box>
        <Cards />
        <Chart />
      </Box>
      <Box></Box>
    </Box>
  );
};

export default Dashboard;
