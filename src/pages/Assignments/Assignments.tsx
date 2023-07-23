import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export const Assignments = () => {
  return (
    <Box>
      <Grid container direction="row" alignItems="stretch">
        <Grid item xs={12}>
          <Typography variant="h3" gutterBottom textAlign={"center"}>
            Users
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};
