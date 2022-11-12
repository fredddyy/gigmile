import { Box, Typography } from "@mui/material";
import { useState } from "react";
import Logo from "../assets/icons/logo.svg";

import { SidebarData } from "../data/mockData";

const Sidebar = () => {
  const [selected, setSelected] = useState(0);

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      transition="all 300ms ease"
      width="240px"
      height="100%"
      padding="10px 0px 10px 16px"
    >
      <Box display="flex" alignItems="left">
        <img src={Logo} alt="logo" />
      </Box>
      <Box>
        {SidebarData.map((item, index) => {
          return (
            <div
              className={selected === index ? "menu-item active" : "menu-item"}
              key={index}
              onClick={() => {
                setSelected(index);
              }}
            >
              <item.icon />
              <Typography>{item.heading}</Typography>
            </div>
          );
        })}
      </Box>
      <Box></Box>
    </Box>
  );
};

export default Sidebar;
