import React, { useState } from "react";
import { IconButton } from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import NavDrawer from "./navDrawer";
import LogoNavLink from "../buttons/navlink.btn";

function SmallScreenNavbar(props) {
  const { window } = props;
  const container =
    window !== undefined ? () => window.document.body : undefined;
  const [open, setOpen] = useState(false);
  const toggleDrawer = () => {
    setOpen((prevState) => !prevState);
  };
  return (
    <>
      <LogoNavLink />
      <IconButton
        color="text.secondary"
        aria-label="open-drawer"
        onClick={toggleDrawer}
        sx={{ position: "fixed", top: 15, right: 30 }}
      >
        <MenuRoundedIcon fontSize="large" />
      </IconButton>
      <NavDrawer
        open={open}
        onClose={toggleDrawer}
        container={container}
        onClick={toggleDrawer}
      />
    </>
  );
}

export default SmallScreenNavbar;
