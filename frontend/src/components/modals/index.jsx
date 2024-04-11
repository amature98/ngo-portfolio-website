import { Backdrop, Box, Fade, Modal, Typography } from "@mui/material";
import React from "react";

function index({ open, onClose }) {
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-description"
      open={open}
      onClose={onClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: { timeout: 500 },
      }}
    >
      <Fade in={open}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "90vw",
            background: (theme) => theme.palette.primary.light,
            borderRadius: 2,
          }}
        >
          <Typography variant="h2">Make your contribution</Typography>
        </Box>
      </Fade>
    </Modal>
  );
}

export default index;
