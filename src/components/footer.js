import React from "react";
import PropTypes from "prop-types";

import { Container } from "./Grid";

const Footer = ({ siteTitle }) => (
  <footer
    style={{
      marginTop: '8em'
    }}
  >
    <Container>
      <div style={{ color: "gray" }}>
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
