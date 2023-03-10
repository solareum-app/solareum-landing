/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import Helmet from "react-helmet";
import { GlobalStyle } from "./GlobalStyle";
import { Footer } from "./footer";
import { Header } from "./header";
import styled from "styled-components";

const ScMain = styled.div`
  position: relative;

  &:before {
    position: absolute;
    z-index: -1;
    content: "";
    display: block;
    height: 400px;
    left: 0;
    top: 0;
    right: 0;
    background: rgb(153, 69, 255);
    background: linear-gradient(
      180deg,
      rgba(153, 69, 255, 0.5) 0%,
      rgba(6, 4, 0, 0.75) 75%,
      rgba(6, 4, 0, 0.5) 100%
    );
  }
`;

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={(data) => (
      <ScMain>
        <Helmet>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
        </Helmet>

        <GlobalStyle />
        <Header />

        <main>{children}</main>

        <Footer siteTitle={data.site.siteMetadata.title} />
      </ScMain>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
