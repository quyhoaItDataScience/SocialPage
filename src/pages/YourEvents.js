import { Container, Grid, Typography } from "@mui/material";
import CardEvent from "../components/CardEvent";
import React from "react";

const YourEvents = () => {
  return (
    <Container sx={{ marginTop: "40px" }}>
      <Typography variant="h4" textAlign="center" marginBottom="40px">
        Các sự kiện của bạn
      </Typography>
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
