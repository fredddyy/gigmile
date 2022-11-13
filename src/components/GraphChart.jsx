import { Box, Typography } from "@mui/material";
import React from "react";
import Chart from "react-apexcharts";
import bike from "../assets/icons/bike.svg";

const GraphChart = () => {
  const data = {
    series: [
      {
        name: "Asset Finaning",
        data: [220, 50, 30, 90, 40, 120, 500, 120, 120, 120, 120, 120],
      },
      {
        name: "Working Capital",
        data: [500, 100, 120, 120, 120, 120, 350, 400, 100, 200, 300],
      },
    ],

    options: {
      toolbar: {
        show: false,
      },
      chart: {
        type: "area",
        height: "auto",
      },
      markers: {
        colors: ["#F9883A"],
      },
      fill: {
        colors: ["#fff"],
        type: "gradient",
        gradient: {
          shade: "dark",
          type: "vertical",
          shadeIntensity: 0.2,
          gradientToColors: ["#F9883A", "#3285FF"], // optional, if not defined - uses the shades of same color in series
          inverseColors: true,
          opacityFrom: 0.5,
          opacityTo: 0.5,
          stops: [0, 80, 100],
          colorStops: [],
        },
      },
      dataLabels: {
        enabled: false,
        style: {
          colors: ["#F44336"],
        },
      },
      stroke: {
        curve: "smooth",
        colors: ["#F9883A", "#3285FF"],
        width: 2,
      },
      legend: {
        position: "top",
        fontWeight: 400,
        fontSize: "12px",

        labels: {
          colors: "#a0aec0",
          useSeriesColors: false,
        },
        markers: {
          width: 30,
          height: 3,
          fillColors: ["#F9883A", "#3285FF"],
          radius: 12,
        },
      },
      tooltip: {
        custom: function ({ series, seriesIndex, dataPointIndex, w }) {
          return (
            '<div class="arrow-box">' +
            `<img class="tooltip-img" src=${bike} />` +
            "<div class='data'>" +
            "<p class='this-month'>This Month</p>" +
            `<h1>${series[seriesIndex][dataPointIndex]}</h1>` +
            `<p>${w.globals.labels[dataPointIndex]}</p>` +
            "</div>" +
            "</div>"
          );
        },
      },
      grid: {
        borderColor: "#a0aec039",
        strokeDashArray: 7,
        xaxis: {
          lines: {
            show: false,
          },
        },
        yaxis: {
          lines: {
            show: true,
          },
        },
      },
      annotations: {
        yaxis: [
          {
            borderColor: "#000",
            fillColor: "#FEB019",
          },
        ],
      },
      xaxis: {
        type: "string",
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      yaxis: {
        show: true,
      },
    },
  };
  return (
    <Box
      border="2px solid #E6E7E9"
      margin="12.5px 0px"
      padding="20px 0px"
      borderRadius="6px"
      position="relative"
      boxShadow="0px 3.5px 5.5px rgba(0, 0, 0, 0.02)"
    >
      <Typography
        fontSize="16px"
        fontWeight="500"
        padding="0px 20px"
        position="absolute"
      >
        Service Requests
      </Typography>
      <Chart options={data.options} series={data.series} type="area" />
    </Box>
  );
};

export default GraphChart;
