import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { useContext } from "react";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import NoteIcon from "../assets/icons/note.svg";
import Bell from "../assets/icons/bell.svg";
import ProfileImg from "../assets/icons/profileImg.png";

const Topbar = () => {
  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      <Box>
        <Typography fontWeight="600" fontSize="16px" lineHeight="19px">
          Hello Michael! 👋🏽
        </Typography>
      </Box>
      <Box display="flex">
        {/* SEARCH BAR */}
        <Box
          display="flex"
          backgroundColor="#FAFAFA"
          boederRadius="3px"
          width="400px"
          height="40px"
        >
          <IconButton type="button" sx={{ p: 1 }}>
            <SearchIcon />
          </IconButton>
          <InputBase sx={{ p: 1 }} placeholder="Search" />
        </Box>

        {/* ICONS */}
        <Box display="flex">
          <IconButton>
            <img src={NoteIcon} alt="note-icon" />
          </IconButton>
          <IconButton>
            <img src={Bell} alt="bell-icon" />
          </IconButton>
          <img src={ProfileImg} alt="profile-img" />
          <IconButton>
            <ExpandMoreIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Topbar;
