import { Container, Grid, Typography } from "@mui/material";
import CardEvent from "../components/CardEvent";
import React from "react";

const YourEvents = () => {
  return (
    <Container>
      <Typography>Your events</Typography>
      <Grid container spacing={3}>
        <Grid item>
          <CardEvent />
        </Grid>

        <Grid item>
          <CardEvent />
        </Grid>
        <Grid item>
          <CardEvent />
        </Grid>
      </Grid>
    </Container>
  );
};

export default YourEvents;
