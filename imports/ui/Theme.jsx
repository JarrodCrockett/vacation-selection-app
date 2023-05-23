import React, { useState, useMemo, useEffect } from "react";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import createTheme from "@mui/material/styles/createTheme";
import CssBaseline from "@mui/material/CssBaseline";
//import './ThemeVars.css';

export const THEME_FONT = '"Quicksand", sans-serif';
export const HEADLINE_FONT = '"Quicksand Bold", serif';

// these styles will apply to everything
const globalTheme = {
  fontFamily: THEME_FONT,
};

// these styles will apply to MUI components only
function createMuiTheme(darkMode) {
  return createTheme({
    palette: {
      mode: darkMode,
      /*
      this can be used to set default background for some things, but best practice appears to be
      setting Primary and Secondary to brand and accent colors and then using primary and secondary
      to set those for each component that should use those colors.

      background: {
        default: darkMode === 'dark' ? '#000011' : '#ffffee',
      }
      */
      primary: {
        main: "#1b75bc", // dome blue
      },
      secondary: {
        main: "#2bb673", // dome plant green
      },
      typography: {
        fontFamily: THEME_FONT,
      },
    },
  });
}

const Theme = (props) => {
  const [darkMode, setDarkMode] = useState("light");
  const muiTheme = useMemo(() => createMuiTheme(darkMode), [darkMode]);

  // after render completes, check dark preference and register window event handlers in case it changes.
  // note that on mac, firefox doesn't update darkmode until restart, but chrome will update on toggle.
  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
    const updateDarkMode = (evt) => {
      setDarkMode(evt.matches ? "dark" : "light");
    };
    updateDarkMode(prefersDark);
    prefersDark.addEventListener("change", updateDarkMode);
    return () => {
      prefersDark.removeEventListener("change", updateDarkMode);
    };
  }, []);

  return (
    <div className="theme-wrapper" style={globalTheme}>
      <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        {props.children}
      </ThemeProvider>
    </div>
  );
};
export default Theme;
