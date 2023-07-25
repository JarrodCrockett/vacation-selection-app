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
        <a href="https://dome.software">
          <SvgLogo
            style={
              theme.palette.mode === "dark" ? styles.logoDark : styles.logo
            }
          />
        </a>
      </div>
      <h1>Calendar App</h1>
    </div>
  );
};
export default Header;
