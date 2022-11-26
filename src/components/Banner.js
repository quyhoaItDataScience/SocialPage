import { Typography, Paper, Box, Grid } from "@mui/material";
import React, { useRef } from "react";

const url =
  "https://cdn.dribbble.com/userupload/4025538/file/original-a80f539bc1af0021d43230c38a67d759.png?compress=1&resize=400x300&vertical=top";

function Banner({ urlImage }) {
  return (
    <Paper
      sx={{
        position: "relative",
        color: "#fff",
        width: "80%",
        mt: 10,
        margin: "0 auto",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url(${urlImage || url})`,
      }}
    >
      {/* Increase the priority of the hero background image */}
      {<img style={{ display: "none" }} src={urlImage || url} alt="post" />}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: "rgba(0,0,0,.3)",
        }}
      />
      <Grid container>
        <Grid item md={6}>
          <Box
            sx={{
              position: "relative",
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
              textAlign: "start",
            }}
          >
            <Typography
              component="h1"
              variant="h3"
              color="inherit"
              gutterBottom
            >
              Title of a longer featured blog post
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              Multiple lines of text that form the lede, informing new readers
              quickly and efficiently about what's most interesting in this
              post's contents.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Banner;
