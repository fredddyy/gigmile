import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import { ActivityData } from "../data/mockData";

const Activity = () => {
  return (
    <Box
      border="2px solid #E6E7E9"
      boxShadow="0px 3.5px 4.5px rgba(0, 0, 0, 0.04)"
      borderRadius="4px"
      margin="0px 30px"
      width="350px"
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        borderBottom="1px solid #EEF0F7"
        height="60px"
      >
        <Typography
          display="flex"
          fontWeight="600"
          fontSize="16px"
          margin="23px 20px"
        >
          Activity Feed
          <Typography
            fontWeight="500"
            color="white"
            backgroundColor="red"
            padding="0px 7px"
            borderRadius="70px"
            margin="0px 12px"
          >
            {ActivityData.slice(0, 5).length}
          </Typography>
        </Typography>
        <Typography className="cursor" margin="0px 20px" color="#1DB385">
          View all
        </Typography>
      </Box>
      {ActivityData.map((activity, index) => {
        return (
          <Box display="flex" alignItems="flex-start" margin="20px">
            <Box marginRight="8px">
              <img src={activity.img} alt="profile-img" />
            </Box>
            <Box>
              <Typography fontWeight="400" fontSize="14px">
                {activity.notice}
              </Typography>
              <Typography color="#A0AEC0" fontSize="10px">
                {activity.time}
              </Typography>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default Activity;
