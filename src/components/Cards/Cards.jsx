import { Box } from "@mui/material";
import React from "react";
import { CardsData } from "../../data/mockData";
import DashoardCard from "./Card";

const Cards = () => {
  return (
    <Box display="flex" gap="10px">
      {CardsData.map((card) => {
        return (
          <Box key={card.title} width="100%">
            <DashoardCard title={card.title} num={card.num} icon={card.icon} />
          </Box>
        );
      })}
    </Box>
  );
};

export default Cards;
