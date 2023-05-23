import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Info from "./Info";
import SampleState from "./SampleState";
import SampleDb from "./SampleDb";
import Theme from "./Theme";

styles = {
  grid: {
    marginTop: "5px",
  },
};

const Home = () => {
  return (
    <Theme>
      <Grid container spacing={2} style={styles.grid}>
        <Grid item md={3} />
        <Grid item md={6} xs={12}>
          <Info />
          <hr />
          <SampleState />
          <SampleDb />
        </Grid>
        <Grid item md={3} />
      </Grid>
    </Theme>
  );
};
export default Home;
