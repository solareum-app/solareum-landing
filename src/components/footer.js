import React from "react";
import PropTypes from "prop-types";

import { Container } from "./Grid";

const Footer = ({ siteTitle }) => (
  <footer
    style={{
      marginTop: "4em",
    }}
  >
    <Container
      style={{ marginBottom: "2em", fontWeight: "300", fontSize: "14px" }}
    >
      <div style={{ color: "gray", textAlign: "center" }}>
        © {new Date().getFullYear()}
        {` `}
        {siteTitle}
      </div>
    </Container>
  </footer>
);

Footer.propTypes = {
  siteTitle: PropTypes.string,
};

Footer.defaultProps = {
  siteTitle: ``,
};

export default Footer;
