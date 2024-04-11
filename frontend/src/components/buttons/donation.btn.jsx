import React, { useState, useRef, useEffect } from "react";
import { styled, Button, alpha } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Modal from "../modals/index";
import gsap from "gsap";

const StyledButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.contrast,
  backgroundColor: theme.palette.secondary.main,
  borderRadius: 6,
  ":hover": {
    backgroundColor: alpha(
      theme.palette.action.hover,
      theme.palette.action.hoverOpacity
    ),
  },
}));

function DonationButton({ ...props }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const handleClose = () => setOpen(false);
  const iconRef = useRef(null);

  useEffect(() => {
    const iconElement = iconRef.current;
    const tl = gsap.timeline({ repeat: -1, yoyo: true });
    tl.to(iconElement, { scale: 1.2, duration: 0.5 });
    return () => {
      tl.kill();
    };
  }, []);
  return (
    <>
      <StyledButton
        {...props}
        endIcon={
          <span ref={iconRef}>
            <FavoriteIcon />
          </span>
        }
        variant="contained"
        onClick={handleOpen}
      >
        Donate Now
      </StyledButton>
      <Modal open={open} onClose={handleClose} />
    </>
  );
}

export default DonationButton;
