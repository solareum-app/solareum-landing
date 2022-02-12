import React from "react";
import styled from "styled-components";

import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { Container } from "../components/Grid";
import { GetStarted } from "../components/GetStarted";
import { Title, Helper } from "../components/styles";

const ScBanner = styled.div`
  padding-top: 0em;
  padding-bottom: 0em;
  margin-bottom: 4em;

  .bannerLeft {
    margin-bottom: 2em;
  }
  .bannerRight {
  }

  @media only screen and (min-width: 1024px) {
    display: flex;
    align-items: center;
    padding-top: 2em;
    padding-bottom: 2em;

    .bannerLeft {
      flex: 1;
      margin-bottom: 4em;
    }
    .bannerRight {
      flex: 1;
    }

    .bannerAppImg {
      max-width: 420px;
    }
  }
`;

const ScPhoneBg = styled.div`
  position: relative;

  .bannerAppBg {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    opacity: 0.4;
  }

  .bannerAppImg {
    max-width: 80%;
    margin-left: auto;
    margin-right: auto;
  }

  @media only screen and (min-width: 1024px) {
    .bannerAppImg {
      max-width: 420px;
    }
  }
`;

const ScHeadline = styled.div`
  padding-top: 2em;
  padding-bottom: 2em;

  .headlineTitle {
    font-size: 48px;
    line-height: 1;
    font-weight: normal;
    margin: 0;
  }
  .headlineHelper {
    font-size: 18px;
    line-height: 1.4;
    color: #99a3a9;
    margin-bottom: 36px;
  }

  @media only screen and (min-width: 1024px) {
    padding-top: 4em;
    padding-bottom: 4em;

    .headlineTitle {
      font-size: 64px;
    }
    .headlineHelper {
      font-size: 18px;
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
  border: 2px solid #ff33ff;
  border-radius: 36px;
  color: white;
  display: inline-block;
  font-size: 20px;
  text-decoration: none;
  transition: all 0.3s;
  height: 54px;
  line-height: 54px;
  padding: 0 36px;

  @media only screen and (min-width: 1024px) {
    height: 74px;
    line-height: 74px;
    padding: 0 48px;
    font-size: 24px;
  }
`;

const Partner = styled.div`
  .partnerTitle {
    font-size: 12px;
    text-transform: uppercase;
    color: #99a3a9;
    margin-bottom: 8px;
  }
  .partnerList {
  }
  .partnerItem {
    width: 44px;
    margin-right: 16px;
    display: inline-block;
    border: 1px solid #99a3a9;
    border-radius: 100%;
  }
`;

const FeatureItem = styled.div`
  margin-bottom: 4em;

  .cover {
    max-width: 180px;
    margin-right: 36px;
  }
  .itemBody {
  }
  .itemBodyWrp {
    max-width: 460px;
  }

  @media only screen and (min-width: 768px) {
    margin-bottom: 2em;
    display: flex;
    align-items: center;

    &.contentFirst {
      flex-direction: row-reverse;

      &.cover {
        margin-right: 0;
        margin-left: 36px;
      }
    }

    .cover {
      flex: 1;
      max-width: 320px;
      margin-right: 36px;
    }
    .itemBody {
      flex: 1;
    }
  }
`;

const ScFeature = styled.div`
  margin-bottom: 4em;
  text-align: center;
`;
const ScFeatureBody = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;

  @media only screen and (min-width: 1024px) {
    padding-left: 80px;
  }
`;
const ScFeatureItem = styled.div`
  margin-bottom: 2em;

  .featureIcon {
    width: 40px;
    margin-bottom: 0.5em;
  }
  .featureTitle {
    font-size: 18px;
    color: #fff8f0;
    margin-bottom: 0.75em;
  }
  .featureHelper {
    font-size: 16px;
    color: #99a3a9;
  }

  @media only screen and (min-width: 1024px) {
    width: 50%;

    .featureHelper {
      max-width: 280px;
    }
  }
`;

const IndexPage = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          partner1Sol: file(relativePath: { eq: "p-1sol.png" }) {
            childImageSharp {
              fluid(maxWidth: 64) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          partnerJup: file(relativePath: { eq: "p-jup.png" }) {
            childImageSharp {
              fluid(maxWidth: 64) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          partnerMilli: file(relativePath: { eq: "p-milli.png" }) {
            childImageSharp {
              fluid(maxWidth: 64) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          solareumApp: file(relativePath: { eq: "solareum-app02.png" }) {
            childImageSharp {
              fluid(maxWidth: 520) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
    >
      {(data) => (
        <Layout>
          <SEO
            title="Solareum Wallet"
            description="Unlock the world of crypto for you"
          >
            <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
          </SEO>

          <Container>
            <ScBanner>
              <div className="bannerLeft">
                <ScHeadline>
                  <h1 className="headlineTitle">Unlock the world of crypto</h1>
                  <p className="headlineHelper">
                    Solareum makes it safe & easy for you to store, send,
                    receive and swap tokens on Solana blockchain
                  </p>
                  <DownloadButton
                    href="https://solareum.app/getwallet"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download Now
                  </DownloadButton>
                </ScHeadline>

                <Partner>
                  <h3 className="partnerTitle">Our Partners</h3>
                  <div className="partnerList">
                    <Img
                      className="partnerItem"
                      fluid={data.partner1Sol.childImageSharp.fluid}
                    />
                    <Img
                      className="partnerItem"
                      fluid={data.partnerJup.childImageSharp.fluid}
                    />
                    <Img
                      className="partnerItem"
                      fluid={data.partnerMilli.childImageSharp.fluid}
                    />
                  </div>
                </Partner>
              </div>
              <div className="bannerRight">
                <ScPhoneBg>
                  <div className="bannerAppBg">
                    <lottie-player
                      src="/lotties/lf30_editor_hzhscps4.json"
                      background="transparent"
                      speed="1"
                      style={{ width: "100%" }}
                      loop
                      autoplay
                    />
                  </div>
                  <Img
                    className="bannerAppImg"
                    fluid={data.solareumApp.childImageSharp.fluid}
                  />
                </ScPhoneBg>
              </div>
            </ScBanner>
          </Container>

          <Container>
            <FeatureItem>
              <div className="cover">
                <lottie-player
                  src="/lotties/money-transfer-dollar-to-bitcoin.json"
                  background="transparent"
                  speed="1"
                  style={{ width: "100%" }}
                  loop
                  autoplay
                ></lottie-player>
              </div>
              <div className="itemBody">
                <div className="itemBodyWrp">
                  <Title>Send & Receive</Title>
                  <Helper>
                    Solareum will help you store, send and receive all SPL
                    tokens. Moreover, it build on Solana blockchain so the
                    transaction fee is really cheap
                  </Helper>
                </div>
              </div>
            </FeatureItem>

            <FeatureItem className="contentFirst">
              <div className="cover">
                <lottie-player
                  src="/lotties/woman-investing-in-cryptocurrency.json"
                  background="transparent"
                  speed="1"
                  style={{ width: "100%" }}
                  loop
                  autoplay
                ></lottie-player>
              </div>
              <div className="itemBody">
                <div className="itemBodyWrp">
                  <Title>Swap SPL token</Title>
                  <Helper>
                    Never miss any investment opportunities when you can
                    build-in DEX to swap token at the best prices instantly and
                    securely
                  </Helper>
                </div>
              </div>
            </FeatureItem>

            <FeatureItem>
              <div className="cover">
                <lottie-player
                  src="/lotties/investing-in-business-idea.json"
                  background="transparent"
                  speed="1"
                  style={{ width: "100%" }}
                  loop
                  autoplay
                ></lottie-player>
              </div>
              <div className="itemBody">
                <div className="itemBodyWrp">
                  <Title>Lighting Rewards</Title>
                  <Helper>
                    Build & grow the digital economy with our Payments Protocol,
                    which allows you to tip, donate or buy on any platform
                    anywhere at blazzing fast speed
                  </Helper>
                </div>
              </div>
            </FeatureItem>
          </Container>

          <Container>
            <ScFeature>
              <Title>All the features you&nbsp;want</Title>
              <Helper>
                Solareum has everything you need to traverse the Solana
                ecosystem
              </Helper>
            </ScFeature>
            <ScFeatureBody>
              <ScFeatureItem>
                <img
                  className="featureIcon"
                  src="/imgs/svgs/NonCustodial.svg"
                />
                <h6 className="featureTitle">Non-Custodial</h6>
                <p className="featureHelper">
                  We never have access to any of your data or funds. Ever
                </p>
              </ScFeatureItem>
              <ScFeatureItem>
                <img className="featureIcon" src="/imgs/svgs/Web3.svg" />
                <h6 className="featureTitle">Web3 Support</h6>
                <p className="featureHelper">
                  Explore the world of blockchain applications build on Solana
                </p>
              </ScFeatureItem>
              <ScFeatureItem>
                <img className="featureIcon" src="/imgs/svgs/Swap.svg" />
                <h6 className="featureTitle">Token Swaps</h6>
                <p className="featureHelper">
                  Use our build-in DEX to safety swap tokens at the best price
                  instantly
                </p>
              </ScFeatureItem>
              <ScFeatureItem>
                <img className="featureIcon" src="/imgs/svgs/Cost.svg" />
                <h6 className="featureTitle">Cost Effective</h6>
                <p className="featureHelper">
                  Nearly-zero cost transaction fees
                </p>
              </ScFeatureItem>
            </ScFeatureBody>
          </Container>

          <Container>
            <GetStarted />
          </Container>
        </Layout>
      )}
    </StaticQuery>
  );
};

export default IndexPage;
