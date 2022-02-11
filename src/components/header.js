import React from "react";
import styled from "styled-components";

import { StaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";
import { Container } from "./Grid";

const StContainer = styled(Container)`
  margin-top: 0;
  margin-bottom: 0;
`;

const HeaderWrp = styled.header`
  display: flex;
  flex-direction: row;
  padding-top: 1.5em;
  padding-bottom: 1.5em;

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
    font-size: 16px;
    line-height: 20px;
    padding-top: 12px;
    padding-bottom: 12px;
    color: #99a3a9;
    transition: all 0.3s;

    &:hover,
    .active {
      color: #ff33ff;
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
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 4px rgba(0, 0, 0, 0.32);
  border: 1px solid #ff33ff;
  border-radius: 36px;
  height: 44px;
  color: white;
  padding: 7px 24px;
  display: inline-block;
  font-size: 16px;
  line-height: 28px;
  text-decoration: none;
  transition: all 0.3s;
  background: transparent;

  &:hover {
    background: #ff33ff;
  }
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
          <Link to="/">
            <Img
              className="headerLogo"
              fluid={data.solareumIcon.childImageSharp.fluid}
            />
          </Link>
          <div className="headerRight">
            <div className="headerLinkLeft">
              <Link to="/lightning-rewards" className="headerLink">
                Lightning Rewards
              </Link>
            </div>
            <div className="headerLinkRight">
              <DownloadButton
                href="https://solareum.app/getwallet"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Now
              </DownloadButton>
            </div>
          </div>
        </HeaderWrp>
      </StContainer>
    )}
  />
);
