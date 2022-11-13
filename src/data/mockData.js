import { UilEstate } from "@iconscout/react-unicons";

import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import GroupIcon from "@mui/icons-material/Group";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import DonutSmallOutlinedIcon from "@mui/icons-material/DonutSmallOutlined";
import InsertChartOutlinedOutlinedIcon from "@mui/icons-material/InsertChartOutlinedOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

import img1 from "../assets/icons/profilePictures/img1.png";
import img2 from "../assets/icons/profilePictures/img2.png";
import img3 from "../assets/icons/profilePictures/img3.png";
import img4 from "../assets/icons/profilePictures/img4.png";
import img5 from "../assets/icons/profilePictures/img5.png";

export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Dashboard",
  },
  {
    icon: GroupOutlinedIcon,
    heading: "Captains",
  },
  {
    icon: DescriptionOutlinedIcon,
    heading: "Service Requests",
  },
  {
    icon: BusinessCenterOutlinedIcon,
    heading: "Service Partners",
  },
  {
    icon: DonutSmallOutlinedIcon,
    heading: "Service Partners",
  },
  {
    icon: InsertChartOutlinedOutlinedIcon,
    heading: "Repayments",
  },
  {
    icon: SettingsOutlinedIcon,
    heading: "Settings",
  },
  {
    icon: LogoutOutlinedIcon,
    heading: "Log Out",
  },
];

export const CardsData = [
  { title: "Captain", num: "128", icon: GroupIcon },
  { title: "Service Requests", num: "3,201", icon: NoteAltIcon },
  { title: "Gigmile Assets", num: "32,200", icon: AssignmentTurnedInIcon },
  { title: "Service Partners", num: "90", icon: GroupIcon },
];

export const ActivityData = [
  {
    img: img1,
    notice: "Ola requested for Asset Financing.",
    time: "22 DEC 7:20 PM",
  },
  {
    img: img2,
    notice: "Michael missed a repayment scheduled for yesterday.",
    time: "22 DEC 7:20 PM",
  },
  {
    img: img3,
    notice: "Michael missed a repayment scheduled for yesterday.",
    time: "22 DEC 7:20 PM",
  },
  {
    img: img4,
    notice: "Ola requested for Asset Financing.",
    time: "22 DEC 7:20 PM",
  },
  {
    img: img5,
    notice: "Michael claimed  N10,000 Referral bonus.",
    time: "22 DEC 7:20 PM",
  },
  {
    img: img1,
    notice: "Michael upgraded from Tier 1 to Tier 2.",
    time: "22 DEC 7:20 PM",
  },
  {
    img: img1,
    notice: "Michael upgraded from Tier 1 to Tier 2.",
    time: "22 DEC 7:20 PM",
  },
];
