import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "@mui/material/Button";
import { Icon } from "@iconify/react";
import { Typography } from "@mui/material";

function App() {
  return (
    <Typography align="center">
      <Button variant="outlined">
        <Icon icon="fa6-solid:face-smile-wink" />
        Let's start
      </Button>
    </Typography>
  );
}

export default App;
