import { Box, Typography } from "@mui/material";
import React from "react";

const Card = (props) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      border="2px solid #E6E7E9"
      borderRadius="8px"
      height="140px"
      boxShadow="0px 3.5px 5.5px rgba(0, 0, 0, 0.02)"
      className="card"
    >
      <Typography color="#b4b4b4">
        <props.icon className="icon" />
      </Typography>
      <Typography variant="h6">{props.num}</Typography>
      <Typography
        className="p"
        variant="p"
        color="#b4b4b4"
        fontWeight="400"
        fontSize="12px"
      >
        {props.title}
      </Typography>
    </Box>
  );
};

export default Card;
