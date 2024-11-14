import React from "react";
import {
  Container,
  Typography,
  Box,
  Paper,
  BottomNavigation,
} from "@mui/material";
import ImageCollage from "../components/ImageCollage";
import CustomizedAccordions from "../components/Accordian";
import BasicModal from "../components/Modal";
function Tour() {
  return (
    <>
      <Container sx={{ width: 900 }}>
        <Typography variant="h3" component="h1" marginTop={3}>
          Explore the World in Vegas
        </Typography>
        <Box marginTop={3} sx={{ display: "flex" }}>
          <img
            src="https://images.pexels.com/photos/1697494/pexels-photo-1697494.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt="Water Fall"
            width={500}
            height={400}
          />
          <ImageCollage />
        </Box>
        <Box>
          <Typography variant="h6" component="h4" marginTop={3}>
            About this ticket
          </Typography>
          <Typography variant="paragraph" component="p" marginTop={3}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi,
            qui dolores! Deserunt rerum incidunt, nobis, quam possimus dolorum
            eaque quasi eos dicta architecto ipsum cum nam? Quis corrupti quam
            ab eos mollitia, deserunt fugiat voluptatem! Rerum iure
            reprehenderit et accusantium!
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="h6"
            component="h4"
            marginTop={3}
            marginBottom={2}
          >
            Frequently Asked Questions
          </Typography>
          <CustomizedAccordions />
          <Box>
            <Paper
              sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
              elevation={3}
            >
              <BottomNavigation>
                <BasicModal margin={3}/>
              </BottomNavigation>
            </Paper>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default Tour;
