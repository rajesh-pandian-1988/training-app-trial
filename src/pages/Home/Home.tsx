import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

export const Home = () => {
  return (
    <Box>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12} textAlign={"center"}>
          <Typography variant="h3" gutterBottom>
            Welcome to Interactive Training Academy!
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};
