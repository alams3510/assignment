import { Box } from "@mui/material";
import MainCard from "../components/MainCard";
import { Outlet } from "react-router-dom";

function LandingPage() {
  return (
    <Box sx={{ overflowY: "hidden" }} className="design">
      <div className="one"></div>
      <div className="two"></div>
      <div className="three"></div>
      <div className="four"></div>
      <MainCard />
    </Box>
  );
}

export default LandingPage;
