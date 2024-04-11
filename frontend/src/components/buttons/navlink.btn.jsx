import React from "react";
import PropTypes from "prop-types";
import { styled, alpha } from "@mui/material/styles";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
const LinkButton = styled(Button)(({ theme }) => ({
  marginRight: 2,
  marginLeft: 2,
  color: theme.palette.text.contrast,
  ":hover": {
    backgroundColor: alpha(
      theme.palette.action.hover,
      theme.palette.action.hoverOpacity
    ),
  },
}));

function NavlinkButton({ title, path, ...props }) {
  return (
    <>
      <LinkButton component={Link} to={path} {...props}>
        {title}
      </LinkButton>
    </>
  );
}
NavlinkButton.propTypes = {
  title: PropTypes.string,
  path: PropTypes.string,
};

export default NavlinkButton;
