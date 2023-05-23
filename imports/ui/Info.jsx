import React from "react";
import useTheme from "@mui/material/styles/useTheme";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import SvgLogo from "./SvgLogo";

const styles = {
  logoWrapper: {
    maxWidth: "400px",
    margin: "auto",
  },
  logo: {
    text: {
      fill: "#000000",
    },
  },
  logoDark: {
    text: {
      fill: "#ffffff",
    },
  },
};

const Info = () => {
  const theme = useTheme();
  return (
    <div>
      <div style={styles.logoWrapper}>
        <SvgLogo
          style={theme.palette.mode === "dark" ? styles.logoDark : styles.logo}
        />
      </div>
      <h1>A Sample Thing</h1>
      <p>Let me tell you about this thing.</p>
      <p>It is a handy thing.</p>
      {/* todo: add something nice for handling code snippets */}
      <Stack spacing={2}>
        <Button variant="contained" color="primary">
          This button does nothing
        </Button>
        <Button variant="outlined" color="secondary">
          This button also does nothing
        </Button>
      </Stack>
    </div>
  );
};
export default Info;
