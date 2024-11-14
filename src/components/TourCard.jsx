import React from "react";
import {
  Paper,
  Grid,
  Typography,
  Box,
  Rating,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { AccessTime } from "@mui/icons-material";
const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "body2",
          },
          style: {
            fontSize: 11,
            backgroundColor: "blue",
          },
        },
        {
          props: {
            variant: "body2",
          },
          style: {
            fontSize: 9,
          },
        },
      ],
    },
  },
});

function TourCard({ tour }) {
  return (
    <>
      <Grid item xs={3}>
        {/* <ThemeProvider theme={theme}> */}
        <Paper elevation={3}>
          <img src={tour.image} alt="Niagara Falls" className="img" />
          <Box paddingX={1}>
            <Typography variant="subtitle1">{tour.name}</Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <AccessTime sx={{ width: 12.5 }} />
              <Typography variant="body2" component="p" ml={0.5}>
                {" "}
                {tour.duration} hour
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginTop: 3,
              }}
            >
              <Rating
                name="read-only"
                value={4.5}
                precision={0.5}
                readOnly
                size="small"
              />
              <Typography variant="body2" component="p" ml={0.5}>
                {tour.rating}
              </Typography>
              <Typography variant="body3" component="p" ml={1.5}>
                ({tour.numberOfReviews})
              </Typography>
            </Box>
            <Box>
              <Typography variant="h6" component="h3" mt={0}>
                From C ${tour.price}
              </Typography>
            </Box>
          </Box>
        </Paper>
        {/* </ThemeProvider> */}
      </Grid>
    </>
  );
}

export default TourCard;
