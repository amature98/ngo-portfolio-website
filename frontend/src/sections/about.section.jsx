import React from 'react'
import {Box, Typography} from '@mui/material'

function AboutSection() {
  return (
    <>
      <Box
        sx={{
          width: "90vw",
          margin: "48px auto",
        }}
      >
        <Typography variant="h3">About</Typography>
      </Box>
    </>
  );
}

export default AboutSection