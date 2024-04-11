import React from "react";
import { Box, Drawer, IconButton, List, Stack } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { navLinks } from "./navLinks";
import { matchPath, useLocation } from "react-router-dom";
import NavItem from "./navitem";
import LogoNavLink from "../buttons/logo.btn";

function NavDrawer({
  anchor = "right",
  container,
  variant = "temporary",
  open,
  onClose,
  onClick,
}) {
  const { pathname } = useLocation();
  const match = (path) =>
    path ? !!matchPath({ path, end: false }, pathname) : false;
  const drawer = (
    <Box>
      <Stack direction="row" justifyContent="space-between">
        <LogoNavLink />
        <IconButton aria-label="close" onClick={onClick}>
          <CloseIcon sx={{ fontSize: 32 }} />
        </IconButton>
      </Stack>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <List>
          {navLinks.map((link, index) => (
            <NavItem
              key={index}
              title={link.title}
              path={link.path}
              icon={link.icon}
            />
          ))}
        </List>
      </Box>
    </Box>
  );

  // JSX for the drawer component
  return (
    <Drawer
      anchor={anchor}
      container={container}
      variant={variant}
      open={open}
      onClose={onClose}
      sx={{
        "& .MuiDrawer-paper": {
          backgroundColor: (theme) => theme.palette.secondary.light,
          width: "100vw",
          height: "100vh",
          display: "flex",
          padding: 4,
        },
      }}
    >
      {drawer}
    </Drawer>
  );
}

export default NavDrawer;
