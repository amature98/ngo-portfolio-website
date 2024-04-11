import React from "react";
import PropTypes from "prop-types";
import { alpha, styled } from "@mui/material/styles";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";
const StyledNavItem = styled(ListItemButton)(({ theme }) => ({
  ":hover": {
    backgroundColor: alpha(
      theme.palette.action.hover,
      theme.palette.action.hoverOpacity
    ),
  },
}));

function NavItem({ title, path, icon }) {
  return (
    <>
      <ListItem>
        <StyledNavItem component={Link} to={path}>
          <ListItemIcon sx={{ color: (theme) => theme.palette.primary.dark }}>
            {icon}
          </ListItemIcon>
          <ListItemText>{title}</ListItemText>
        </StyledNavItem>
      </ListItem>
    </>
  );
}
NavItem.propTypes = {
  title: PropTypes.string,
  path: PropTypes.string,
};

export default NavItem;
