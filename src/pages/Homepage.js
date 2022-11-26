import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import CardEvent from "../components/CardEvent";
import { useUserContext } from "../context/UserContext";

const url =
  "https://cdn.dribbble.com/userupload/4025538/file/original-a80f539bc1af0021d43230c38a67d759.png?compress=1&resize=400x300&vertical=top";

function HomePage() {
  return (
    <div>
      <Container>
        <Banner urlImage={url} />
        <Grid container spacing={3} margin="20px 0">
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
    </div>
  );
}

export default HomePage;
