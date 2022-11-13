import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Pointer1 from "../assets/icons/pointer1.png";
import Pointer2 from "../assets/icons/pointer2.png";
import Pointer3 from "../assets/icons/pointer3.png";
import Nig from "../assets/icons/nig.svg";
import Ghana from "../assets/icons/ghana.svg";
import Up from "../assets/icons/up.svg";
import Down from "../assets/icons/down.svg";
import { Box, Typography } from "@mui/material";

function createData(img, countries, flag, captains, upOrDown, amt) {
  return { img, countries, flag, captains, upOrDown, amt };
}

const rows = [
  createData(
    <img src={Pointer1} />,
    "Nigeria",
    <img src={Nig} />,
    "60,000",
    <img src={Up} />,
    300
  ),
  createData(
    <img src={Pointer2} />,
    "Nigeria",
    <img src={Nig} />,
    "60,000",
    <img src={Up} />,
    300
  ),
  createData(
    <img src={Pointer3} />,
    "Ghana",
    <img src={Ghana} />,
    "60,000",
    <img src={Up} />,
    300
  ),
  createData(
    <img src={Pointer1} />,
    "Nigeria",
    <img src={Nig} />,
    "60,000",
    <img src={Down} />,
    300
  ),
  createData(
    <img src={Pointer3} />,
    "Ghana",
    <img src={Ghana} />,
    "60,000",
    <img src={Up} />,
    300
  ),
];

export const GeoTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ border: 0, padding: "16px 16px 0px" }}>
              Countries
            </TableCell>
            <TableCell
              sx={{ border: 0, textAlign: "right", padding: "16px 16px 0px" }}
            >
              Captains
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.slice(0, 3).map((row, index) => (
            <TableRow
              className="table-row"
              key={index}
              sx={{ "&:nt-child(3)": { coloe: "white" } }}
            >
              <TableCell
                className="table-cell"
                sx={{
                  border: 0,
                  fontWeight: "500",
                  fontSize: "14px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                {row.img}
                <Box display="flex" gap="3px">
                  {row.countries}
                  {row.flag}
                </Box>
              </TableCell>
              <TableCell
                className="table-cell"
                sx={{ border: 0, fontWeight: "600", textAlign: "right" }}
              >
                <Box
                  display="flex"
                  justifyContent="right"
                  alignItems="center"
                  gap="5px"
                >
                  {row.captains}
                  {row.upOrDown}
                  <Typography>{row.amt}</Typography>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableBody>
          {rows.slice(3, 4).map((row, index) => (
            <TableRow key={index} className="table-row">
              <TableCell
                className="table-cell"
                sx={{
                  border: 0,
                  fontWeight: "500",
                  fontSize: "14px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                {row.img}
                <Box display="flex" gap="3px">
                  {row.countries}
                  {row.flag}
                </Box>
              </TableCell>
              <TableCell
                className="table-cell"
                sx={{ border: 0, fontWeight: "600", textAlign: "right" }}
              >
                <Box
                  display="flex"
                  justifyContent="right"
                  alignItems="center"
                  gap="5px"
                >
                  {row.captains}
                  {row.upOrDown}
                  <Typography color="#E25C5C">{row.amt}</Typography>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableBody>
          {rows.slice(2, 3).map((row, index) => (
            <TableRow key={index} className="table-row">
              <TableCell
                className="table-cell"
                sx={{
                  border: 0,
                  fontWeight: "500",
                  fontSize: "14px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                {row.img}
                <Box display="flex" gap="3px">
                  {row.countries}
                  {row.flag}
                </Box>
              </TableCell>
              <TableCell
                className="table-cell"
                sx={{ border: 0, fontWeight: "600", textAlign: "right" }}
              >
                <Box
                  display="flex"
                  justifyContent="right"
                  alignItems="center"
                  gap="5px"
                >
                  {row.captains}
                  {row.upOrDown}
                  <Typography>{row.amt}</Typography>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default GeoTable;
