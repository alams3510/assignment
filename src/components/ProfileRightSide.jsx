import { Box, Typography } from "@mui/material";
import React from "react";
import Chats from "./Chats";

const ProfileRightSide = ({ single }) => {
  return (
    <>
      <Box sx={{ mt: "30px", ml: "20px", width: "100%" }}>
        <label className="title">Address:</label>
        <Box
          sx={{
            mt: "30px",
            ml: "30px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <label className="title">Street :</label>
            <Typography paddingLeft={"5px"} fontWeight={"700"} variant="h6">
              {single.address.street}
            </Typography>
          </Box>
          <br />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <label className="title">Suite :</label>
            <Typography paddingLeft={"5px"} fontWeight={"700"} variant="h6">
              {single.address.suite}
            </Typography>
          </Box>
          <br />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <label className="title">City :</label>
            <Typography paddingLeft={"5px"} fontWeight={"700"} variant="h6">
              {single.address.city}
            </Typography>
          </Box>
          <br />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <label className="title">ZipCode :</label>
            <Typography paddingLeft={"5px"} fontWeight={"700"} variant="h6">
              {single.address.zipcode}
            </Typography>
          </Box>
          <br />
          <Box sx={{ width: "80%", mb: "80px" }}>
            <iframe id="iframeId" height="300px" width="100%"></iframe>
          </Box>
          <Box sx={{ position: "absolute", bottom: "0px", right: "80px" }}>
            <Chats />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ProfileRightSide;
