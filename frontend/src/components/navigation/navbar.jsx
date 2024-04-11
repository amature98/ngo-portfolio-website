// Import Dependencies
import React, { cloneElement } from "react";
import {
  AppBar,
  Container,
  CssBaseline,
  useMediaQuery,
  useScrollTrigger,
  Toolbar,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import PropTypes from "prop-types";
import SmallScreenNavbar from "./smallScreenNavbar.jsx";
import LargeScreenNavbar from "./largescreenNavbar.jsx";
const glassMorphismStyle = {
  backgroundColor: "rgba(60, 141, 171, 0.25)",
  backdropFilter: "blur(8px)",
  boxShadow: "0 8px 32px 0 rgba(60, 141, 171, 0.25)",
  borderRadius: 6,
};
const ElevationScroll = ({ children, window }) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });
  const style = trigger ? glassMorphismStyle : {}
  return cloneElement(children, {
    elevation: trigger ? 12 : 0,
    style: {
      ...style,
      backgroundColor: 'transparent'
    },
  });
};
ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};
//
function Navbar(props) {
  const theme = useTheme();
  const isMobileScreen = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <>
      <CssBaseline>
        <ElevationScroll {...props}>
          <AppBar color="transparent" elevation={0}>
            <Toolbar>
              <Container maxWidth="false">
                {isMobileScreen ? <SmallScreenNavbar /> : <LargeScreenNavbar />}
              </Container>
            </Toolbar>
          </AppBar>
        </ElevationScroll>
      </CssBaseline>
    </>
  );
}

export default Navbar;
