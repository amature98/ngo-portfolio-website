import React from "react";
import { navLinks } from "./navLinks";
import { Box } from "@mui/material";
import NavLinkButton from "../buttons/navlink.btn.jsx";
import LogoNavLink from "../buttons/logo.btn";
import DonationButton from "../buttons/donation.btn";

function LargeScreenNavbar() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <LogoNavLink />
      <Box>
        {navLinks.map((link) => (
          <NavLinkButton
            key={link.title}
            title={link.title}
            path={link.path}
          />
        ))}
      </Box>
      <DonationButton />
    </Box>
  );
}
export default LargeScreenNavbar;
