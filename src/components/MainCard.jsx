import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Divider, List, ListItem, ListItemText } from "@mui/material";
import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { MyContext } from "../Context";
import { useNavigate } from "react-router-dom";

export default function MainCard() {
  const { data, setUser } = React.useContext(MyContext);
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "130vh",
        scrollbarWidth: "none",
        position: "relative",
      }}
    >
      <Card
        sx={{
          width: "40%",
          height: "80vh",
          overflowY: "scroll",
          borderRadius: "30px",
          scrollbarWidth: "thin",
        }}
      >
        <CardContent>
          <Typography
            sx={{
              fontSize: 22,
              fontWeight: 700,
              textAlign: "center",
              mb: "30px",
            }}
            color="text.secondary"
            gutterBottom
          >
            Select an account
          </Typography>
          <Box>
            <List>
              {data.map((item) => (
                <>
                  <ListItem
                    key={item.id}
                    onClick={(x) => {
                      setUser(item.id);
                      navigate("/menu/profile");
                    }}
                  >
                    <ListItemButton>
                      <ListItemAvatar>
                        <Avatar
                          alt={`Avatar n°${item.id}`}
                          src={item.profilepicture}
                        />
                      </ListItemAvatar>
                      <ListItemText primary={item.name} />
                    </ListItemButton>
                  </ListItem>
                  <Divider />
                </>
              ))}
            </List>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
