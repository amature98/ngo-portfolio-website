import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material";
import BgImg from "../images/hero-img-1.jpeg";

const StyledContainer = styled(Box)(() => ({
  height: "100vh",
  display: "flex",
  alignItems: "center",
  backgroundImage: `linear-gradient(rgba(32, 33, 37, 0.75), rgba(32, 33, 37, 0.75)), url(${BgImg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  position: "relative",
}));

function HeroSection() {
  return (
    <>
      <StyledContainer>
        <Box
          sx={{
            width: "90vw",
            margin: "0 auto",
            paddingRight: { md: 0, lg: 36 },
          }}
        >
          <Typography variant="caption" color="text.secondary" gutterBottom>
            Dee Deeds Foundation
          </Typography>
          <Typography
            variant="h1"
            color="text.contrast"
            gutterBottom
            sx={{ marginY: 3 }}
          >
            the bridge to mental health awareness.
          </Typography>
          <Typography variant="subtitle1" color="text.contrast" gutterBottom>
            We aim to cultivate a culture of mental health awareness<br></br>
            among children and young adults
          </Typography>
        </Box>
      </StyledContainer>
    </>
  );
}

export default HeroSection;
