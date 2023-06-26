import React from "react";
import useTheme from "@mui/material/styles/useTheme";
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

const Header = () => {
  const theme = useTheme();
  return (
    <div>
      <div style={styles.logoWrapper}>
        <SvgLogo
          style={theme.palette.mode === "dark" ? styles.logoDark : styles.logo}
        />
      </div>
      <h1>A Sample Thing</h1>
    </div>
  );
};
export default Header;
