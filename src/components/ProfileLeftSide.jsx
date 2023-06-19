import { Box, Divider, Typography } from "@mui/material";
import React from "react";

const ProfileLeftSide = ({ single }) => {
  return (
    <>
      <Box sx={{ width: "40%" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            mt: "20px",
          }}
        >
          <img
            src={single.profilepicture}
            alt="pic"
            width="200"
            height="200"
            className="mainDp"
          />
          <Typography variant="h6" fontWeight={"700"}>
            {single.name}
          </Typography>
        </Box>

        <Box sx={{ width: "80%", m: "auto auto" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "space-between",
              flexDirection: "column",
            }}
          >
            <Box sx={{ display: "flex" }}>
              <label className="title">Username : </label>
              <Typography paddingLeft={"5px"} variant="h6" fontWeight={"700"}>
                {"  "}
                {single.username}
              </Typography>
            </Box>
            <Box sx={{ display: "flex" }}>
              <label className="title">Email :</label>
              <Typography paddingLeft={"5px"} variant="h6" fontWeight={"700"}>
                {single.email}
              </Typography>
            </Box>
            <Box sx={{ display: "flex" }}>
              <label className="title">Phone :</label>
              <Typography paddingLeft={"5px"} variant="h6" fontWeight={"700"}>
                {single.phone}
              </Typography>
            </Box>
            <Box sx={{ display: "flex" }}>
              <label className="title">Website :</label>
              <Typography paddingLeft={"5px"} variant="h6" fontWeight={"700"}>
                {single.website}
              </Typography>
            </Box>
          </Box>
          <Divider sx={{ width: "70%", m: "20px auto" }} />
          <Typography
            className="title"
            variant="h6"
            sx={{ textAlign: "center" }}
          >
            Company
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "space-between",
              flexDirection: "column",
            }}
          >
            <Box sx={{ display: "flex" }}>
              <label className="title">Name :</label>
              <Typography paddingLeft={"5px"} variant="h6" fontWeight={"700"}>
                {single.company.name}
              </Typography>
            </Box>
            <Box sx={{ display: "flex" }}>
              <label className="title">CatchPhrase:</label>
              <Typography paddingLeft={"5px"} variant="h6" fontWeight={"700"}>
                {single.company.catchPhrase}
              </Typography>
            </Box>
            <Box sx={{ display: "flex" }}>
              <label className="title">Bs:</label>
              <Typography paddingLeft={"5px"} variant="h6" fontWeight={"700"}>
                {single.company.bs}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ProfileLeftSide;
