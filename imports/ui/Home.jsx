import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Info from './Info';
import SampleState from './SampleState';
import SampleDb from './SampleDb';
import Theme from './Theme';
import Header from './Header';
import Footer from './Footer';
import CustomDay from './Calendar';
import BasicTable from './Table';
import { Stack } from '@mui/material';

styles = {
  grid: {
    marginTop: '5px',
  },
};

const Home = () => {
  return (
    <Theme>
      <Grid container spacing={2} style={styles.grid}>
        <Grid item md={3} />
        <Grid item md={6} xs={12}>
          <Header />
        </Grid>
        <Grid item md={3} />
        <Grid item md={1} />
        <Grid item md={3} xs={12} sm={12}>
          <CustomDay />
        </Grid>
        <Grid item md={6} xs={12} sm={6}>
          <BasicTable />
        </Grid>
        <Grid item md={3} sm={3}/>
        <Grid item md={6} xs={12} sm={12}>
          <hr />
          <Footer />
        </Grid>
        <Grid item md={3} />
      </Grid>
    </Theme>
  );
};
export default Home;
