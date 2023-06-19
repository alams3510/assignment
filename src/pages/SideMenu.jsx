import { Box, Divider } from "@mui/material";
import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const SideMenu = () => {
  const link = [
    { name: "Profile", to: "profile" },
    { name: "Posts", to: "posts" },
    { name: "Gallery", to: "gallery" },
    { name: "ToDo", to: "todo" },
  ];
  return (
    <Box sx={{ display: "flex" }}>
      <Box sx={{ width: "20%", mt: "20px", ml: "10px", position: "relative" }}>
        <Box className="menu">
          <ChevronRightIcon fontSize="small" />
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            height: "100vh",
            // backgroundImage: linearGradient("#0000FF", "#0039a6"),
            bgcolor: "#0000FF",
            borderRadius: "30px",
          }}
        >
          <Box sx={{ width: "100%", pr: "5px" }}>
            <ul>
              {link.map((item) => (
                <li>
                  <NavLink
                    id="link"
                    style={({ isActive }) =>
                      isActive ? { color: "white" } : { color: "wheat" }
                    }
                    to={item.to}
                  >
                    {item.name}
                  </NavLink>
                  <Divider sx={{ bgcolor: "wheat", width: "90%" }} />
                </li>
              ))}
            </ul>
          </Box>
        </Box>
      </Box>

      <Box sx={{ width: "80%", mt: "30px", ml: "20px" }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default SideMenu;
