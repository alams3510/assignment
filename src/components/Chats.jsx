import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Box, InputLabel, Typography } from "@mui/material";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import { MyContext } from "../Context";
const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
];

export default function Charts() {
  const { data } = React.useContext(MyContext);
  console.log(data);
  // sx={{ maxheight: "100px", overflow: "scroll" }}

  return (
    <Box>
      <FormControl
        sx={{
          m: 1,
          width: 150,
          mt: 3,
          bgcolor: "#007FFF",
          borderRadius: "10px",
        }}
      >
        <InputLabel
          sx={{
            color: "white",
            display: "flex",
          }}
        >
          <ModeCommentIcon />
          Charts
        </InputLabel>
        <Select input={<OutlinedInput />}>
          <MenuItem disabled>
            <em>Charts</em>
          </MenuItem>
          {data.map((item) => (
            <MenuItem key={item.id} value={item.name}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <img
                  src={item.profilepicture}
                  alt="pic"
                  width="40"
                  height="40"
                  className="Dp"
                />
                <Typography>{item.name}</Typography>
              </Box>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
