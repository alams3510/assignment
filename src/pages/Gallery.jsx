import React, { useContext } from "react";
import { MyContext } from "../Context";
import { Box, Divider, Typography } from "@mui/material";

const Gallery = () => {
  const { data, user } = useContext(MyContext);
  const single = data.filter((item) => item.id === user)[0];
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          my: "20px",
        }}
      >
        <Typography variant="h6" fontWeight={"700"}>
          Gallery
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img
            src={single.profilepicture}
            alt="pic"
            width="40"
            height="40"
            className="Dp"
          />
          <Typography>{single.name}</Typography>
        </Box>
      </Box>
      <Divider sx={{ mt: "20px" }} />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          width: "100%",
        }}
      >
        <Typography variant="h1" sx={{ fontWeight: "700", color: "#ededed" }}>
          Comming Soon{" "}
        </Typography>
      </Box>
    </>
  );
};

export default Gallery;
