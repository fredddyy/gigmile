import React from "react";
import { ResponsiveChoropleth } from "@nivo/geo";
import { geoFeatures } from "../data/mockGeoData";
import { MapData as data } from "../data/mockData";
import { Box, Typography } from "@mui/material";
import GeoTable from "./GeoTable";

const GeoMap = () => {
  return (
    <Box
      height="630px"
      width="350px"
      margin="12.5px 30px"
      border="2px solid #E6E7E9"
      boxShadow="0px 3.5px 4.5px rgba(0, 0, 0, 0.04)"
      borderRadius="4px"
    >
      <Typography
        fontWeight="600"
        fontSize="16px"
        margin="23px 20px"
        borderBottom="1px solid #EEF0F7"
        paddingBottom="20px"
      >
        Geographical Distribution
      </Typography>
      <Box height="220px" width="100%">
        <ResponsiveChoropleth
          data={data}
          features={geoFeatures.features}
          margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
          colors={[
            "#4A52FF",
            "#e8a738",
            "#58CEFF",
            "#1DB385",
            "#4A52FF",
            "#4A52FF",
            "#120faa",
            "#c31c3b",
            "#58CEFF",
            "#c31c3b",
            "#c31c3b",
            "#1DB385",
          ]}
          domain={[0, 1000000]}
          unknownColor="#fff"
          label="properties.name"
          valueFormat=".2s"
          projectionScale={45}
          projectionTranslation={[0.5, 0.75]}
          projectionRotation={[0, 0, 0]}
          enableGraticule={false}
          graticuleLineColor="#dddddd"
          borderWidth={0.5}
          borderColor="#152538"
          defs={[
            {
              id: "dots",
              type: "patternDots",
              background: "inherit",
              color: "#38bcb2",
              size: 4,
              padding: 1,
              stagger: true,
            },
            {
              id: "lines",
              type: "patternLines",
              background: "inherit",
              color: "#eed312",
              rotation: -45,
              lineWidth: 6,
              spacing: 10,
            },
            {
              id: "gradient",
              type: "linearGradient",
              colors: [
                {
                  offset: 0,
                  color: "#000",
                },
                {
                  offset: 100,
                  color: "inherit",
                },
              ],
            },
          ]}
          fill={[
            {
              match: {
                id: "CAN",
              },
              id: "dots",
            },
            {
              match: {
                id: "CHN",
              },
              id: "lines",
            },
            {
              match: {
                id: "ATA",
              },
              id: "gradient",
            },
          ]}
          legends={[]}
        />
      </Box>
      <GeoTable />
    </Box>
  );
};

export default GeoMap;
