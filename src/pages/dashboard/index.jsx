import { Box } from "@mui/material";
import React from "react";
import Activity from "../../components/Activity";
import Cards from "../../components/Cards/Cards";
import Chart from "../../components/GraphChart";
import RepaymentTable from "../../components/RepaymentTable";
import Table from "../../components/Table";
import GeoMap from "../../components/GeoMapContainer";

const Dashboard = () => {
  return (
    <Box display="grid" gridTemplateColumns="2fr 1fr" marginBottom="130px">
      <Box>
        <Cards />
        <Chart />
        <Table />
        <RepaymentTable />
      </Box>
      <Box>
        <Activity />
        <GeoMap />
      </Box>
    </Box>
  );
};

export default Dashboard;
