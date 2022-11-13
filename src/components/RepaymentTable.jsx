import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Profile from "../assets/icons/profilePictures/profile.png";
import Profile1 from "../assets/icons/profilePictures/profile1.png";
import Profile2 from "../assets/icons/profilePictures/profile2.png";
import Profile3 from "../assets/icons/profilePictures/profile3.png";
import { Typography } from "@mui/material";

function createData(img, captain, service, repayment, date) {
  return { img, captain, service, repayment, date };
}

const rows = [
  createData(
    <img src={Profile} />,
    "Alan Richard Michaelson",
    "Motorcycle financing",
    "N 120,000,000.0",
    "23 May, 2021"
  ),
  createData(
    <img src={Profile1} />,
    "Alan Richard Michaelson",
    "Smartphone financing",
    "N 120,000,000.0",
    "23 May, 2021"
  ),
  createData(
    <img src={Profile2} />,
    "Alan Richard Michaelson",
    "Motorcycle financing",
    "N 120,000,000.0",
    "23 May, 2021"
  ),
  createData(
    <img src={Profile1} />,
    "Alan Richard Michaelson",
    "Smartphone financing",
    "N 120,000,000.0",
    "23 May, 2021"
  ),
  createData(
    <img src={Profile3} />,
    "Alan Richard Michaelson",
    "Smartphone financing",
    "N 120,000,000.0",
    "23 May, 2021"
  ),
  createData(
    <img src={Profile1} />,
    "Alan Richard Michaelson",
    "Smartphone financing",
    "N 120,000,000.0",
    "23 May, 2021"
  ),
];

const RepaymentTable = () => {
  return (
    <TableContainer
      sx={{
        boxShadow: "0px 3.5px 5.5px rgba(0, 0, 0, 0.02)",
        border: "1px solid #D9DADE",
        borderRadius: "4px",
      }}
      component={Paper}
    >
      <Typography
        display="flex"
        fontWeight="600"
        fontSize="16px"
        margin="23px 20px"
        borderBottom="1px solid #EEF0F7"
        paddingBottom="20px"
      >
        Upcoming Repayments
        <Typography
          fontWeight="500"
          color="white"
          backgroundColor="#A0AEC0"
          padding="0px 7px"
          borderRadius="70px"
          margin="0px 12px"
        >
          {rows.length}
        </Typography>
      </Typography>
      <Table
        sx={{
          minWidth: 650,
        }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell sx={{ border: 0, fontSize: "12px", color: "#A0AEC0" }}>
              Captain
            </TableCell>
            <TableCell sx={{ border: 0, fontSize: "12px", color: "#A0AEC0" }}>
              Service Type
            </TableCell>
            <TableCell sx={{ border: 0, fontSize: "12px", color: "#A0AEC0" }}>
              Next Repayment
            </TableCell>
            <TableCell sx={{ border: 0, fontSize: "12px", color: "#A0AEC0" }}>
              Due Date
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow className="table-row" key={index} sx={{ border: 0 }}>
              <TableCell
                className="table-cell"
                sx={{
                  border: 0,
                  fontWeight: "500",
                  fontSize: "14px",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                }}
                component="th"
                scope="row"
              >
                {row.img}
                {row.captain}
              </TableCell>
              <TableCell className="table-cell" sx={{ border: 0 }}>
                {row.service}
              </TableCell>
              <TableCell sx={{ border: 0 }}>{row.repayment}</TableCell>
              <TableCell
                className="table-cell"
                sx={{ border: 0, fontWeight: "500", fontSize: "14px" }}
              >
                {row.date}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default RepaymentTable;
