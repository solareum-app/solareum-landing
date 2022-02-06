import React from "react";
import styled from "styled-components";

import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { Container } from "./Grid";

const StContainer = styled(Container)`
  margin-top: 0;
  margin-bottom: 0;
`;

const HeaderWrp = styled.header`
  display: flex;
  flex-direction: row;
  padding-top: 1em;
  padding-bottom: 1em;

  .headerLogo {
    width: 44px;
    flex: none;
  }

  .headerRight {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .headerLinkLeft,
  .headerLinkRight {
    display: inline-block;
    height: 44px;
  }
  .headerLinkRight {
    margin-right: 0;
    display: none;
  }

  .headerLink {
    display: inline-block;
    height: 44px;
    color: white;
    margin-left: 16px;
    margin-right: 16px;
    text-decoration: none;
    opacity: 0.75;
    transition: all 0.3s;
    font-size: 16px;
    line-height: 20px;
    padding-top: 12px;
    padding-bottom: 12px;

    &:hover,
    .active {
      opacity: 1;
    }
  }

  @media only screen and (min-width: 1024px) {
    .headerLinkLeft {
      margin-right: 24px;
    }
    .headerLinkRight {
      display: inline-block;
    }
  }
`;

const DownloadButton = styled.a`
  background: linear-gradient(
    63.57deg,
    #dd3fff 12.69%,
    #ff33ff 36.14%,
    #ff77ff 77.93%
  );
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 4px rgba(0, 0, 0, 0.32);
  border-radius: 36px;
  height: 44px;
  color: white;
  padding: 8px 24px;
  border: 0;
  display: inline-block;
  font-size: 16px;
  line-height: 28px;
  cursor: pointer;
`;

export const Header = ({ siteTitle }) => (
  <StaticQuery
    query={graphql`
      query {
        solareumIcon: file(relativePath: { eq: "Logo-XSB-P.png" }) {
          childImageSharp {
            fluid(maxWidth: 120) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={(data) => (
      <StContainer>
        <HeaderWrp>
          <Img
            className="headerLogo"
            fluid={data.solareumIcon.childImageSharp.fluid}
          />
          <div className="headerRight">
            <div className="headerLinkLeft">
              <a href="#" className="headerLink">
                Lightning Rewards
              </a>
            </div>
            <div className="headerLinkRight">
              <DownloadButton>Download Now</DownloadButton>
            </div>
          </div>
        </HeaderWrp>
      </StContainer>
    )}
  />
);
