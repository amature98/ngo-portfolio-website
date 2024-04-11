import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { Box } from "@mui/material";
import Navbar from "../components/navigation/navbar";

function Page({ children, title = "" }) {
  return (
    <>
      <Box>
        <Helmet>
          <title>{title} </title>
        </Helmet>
        <Navbar />
        {children}
      </Box>
    </>
  );
}
Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};

export default Page;
