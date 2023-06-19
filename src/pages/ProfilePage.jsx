import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../Context";
import { useNavigate } from "react-router-dom";

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import ProfileLeftSide from "../components/ProfileLeftSide";
import ProfileRightSide from "../components/ProfileRightSide";

const ProfilePage = () => {
  const navigate = useNavigate();
  const { data, user } = useContext(MyContext);
  const single = data.filter((item) => item.id === user)[0];

  console.log(single);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const ifameData = document.getElementById("iframeId");
    const lat = single.address.geo.lat;
    const lon = single.address.geo.lng;
    ifameData.src = `https://maps.google.com/maps?q=${lat},${lon}&hl=es;&output=embed`;
  }, [single]);
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          my: "10px",
        }}
      >
        <Typography variant="h6" fontWeight={"700"}>
          Profile
        </Typography>
        {/* <Box sx={{ display: "flex", alignItems: "center" }}>
          <img
            src={single.profilepicture}
            alt="pic"
            width="40"
            height="40"
            className="Dp"
          />
          <Typography>{single.name}</Typography>
        </Box> */}
        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Profile">
            <Box
              sx={{ display: "flex", alignItems: "center" }}
              onClick={() => setOpen(!open)}
            >
              <img
                src={single.profilepicture}
                alt="pic"
                width="40"
                height="40"
                className="Dp"
              />
              <Typography>{single.name}</Typography>
            </Box>
          </Tooltip>
          <Menu
            sx={{ mt: "65px" }}
            id="menu-appbar"
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={open}
            onClose={() => setOpen(false)}
          >
            <MenuItem>
              <Card sx={{ minWidth: 55 }}>
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={single.profilepicture}
                      alt="pic"
                      width="100"
                      height="100"
                      className="mainDp"
                    />
                    <Typography variant="h6" fontWeight={"500"}>
                      {single.name}
                    </Typography>
                    <Typography variant="p" fontWeight={"500"}>
                      {single.username}
                    </Typography>
                  </Box>
                </CardContent>
                <CardActions>
                  <Button
                    variant="contained"
                    onClick={() => navigate("/")}
                    sx={{ m: "0 auto", borderRadius: "5%" }}
                    size="large"
                  >
                    Sign out
                  </Button>
                </CardActions>
              </Card>
            </MenuItem>
          </Menu>
        </Box>
      </Box>
      <Divider sx={{ mt: "20px" }} />
      <Box sx={{ my: "0px", display: "flex", justifyContent: "space-between" }}>
        <ProfileLeftSide single={single} />
        <Box sx={{ width: "60%", position: "relative", mb: "0px" }}>
          <ProfileRightSide single={single} />
          <Divider
            orientation="vertical"
            sx={{ position: "absolute", left: "0px", top: "0px", color: "red" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ProfilePage;
