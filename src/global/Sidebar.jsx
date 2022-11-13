import { Box, Typography } from "@mui/material";
import { useState } from "react";
import Logo from "../assets/icons/logo.svg";
import ProfileImg from "../assets/icons/profileImg.png";

import { SidebarData } from "../data/mockData";

const Sidebar = () => {
  const [selected, setSelected] = useState(0);

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      transition="all 300ms ease"
      width="280px"
      boxShadow="0px 0px 30px rgba(0, 0, 0, 0.1)"
      marginRight="50px"
      padding="16px"
      paddingTop="45px"
    >
      <Box>
        <Box display="flex" alignItems="left" marginLeft="3px">
          <img src={Logo} alt="logo" />
        </Box>
        <Box
          display="flex"
          alignItems="center"
          margin="24px 0px"
          backgroundColor="#FAFAFA"
          height="70px"
          borderRadius="8px"
        >
          <Box margin="12px">
            <img src={ProfileImg} />
          </Box>
          <Box>
            <Typography fontWeight="500">Michael Essien</Typography>
            <Typography fontSize="12px">Administrator</Typography>
          </Box>
        </Box>
        {SidebarData.map((item, index) => {
          return (
            <div
              className={selected === index ? "menu-item active" : "menu-item"}
              key={index}
              onClick={() => {
                setSelected(index);
              }}
            >
              <Box margin="0px 14px">
                <item.icon />
              </Box>
              <Typography>{item.heading}</Typography>
            </div>
          );
        })}
      </Box>
    </Box>
  );
};

export default Sidebar;
