import React from "react";
import styled from "styled-components";

import { StaticQuery, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { Container } from "../components/Grid";
import { GetStarted } from "../components/GetStarted";

const ScPanel = styled.div`
  @media only screen and (min-width: 1024px) {
    display: flex;
    align-items: center;
  }
`;
const ScPanelLeft = styled.div`
  margin-bottom: 24px;
  flex: 1;
`;
const ScPanelRight = styled.div`
  flex: 1;
`;

const ScBanner = styled.div`
  max-width: 750px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  padding-top: 4em;
  padding-bottom: 4em;

  .bannerTitle {
    font-size: 64px;
    line-height: 1;
    color: #fff8f0;
    font-weight: 400;
    margin: 0;
    margin-bottom: 24px;
  }
  .bannerHelper {
    font-size: 18px;
    color: rgba(255, 248, 240, 0.5);
  }
`;

const ScFeature = styled.div`
  background: #272b29;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.08), 0px 20px 32px rgba(0, 0, 0, 0.32);
  border-radius: 16px;
  padding: 16px;
  margin-bottom: 24px;
  max-width: 420px;
  display: flex;
  align-items: center;

  .featureIcon {
    width: 64px;
    height: 64px;
    border-radius: 100%;
    margin-right: 16px;
    flex: none;

    img {
      width: 100%;
    }
  }
  .featureBody {
  }
  .featureTitle {
    font-size: 24px;
    color: #fff8f0;
  }
  .featureHelper {
    font-size: 16px;
    color: rgba(255, 248, 240, 0.5);
  }
`;

const ScInfo = styled.div`
  margin-bottom: 32px;

  .infoTitle {
    font-size: 32px;
    color: #fff8f0;
    font-weight: 400;
    margin: 0;
    margin-bottom: 16px;
  }

  .infoHelper {
    font-size: 18px;
    color: rgba(255, 248, 240, 0.5);
    margin: 0.5em 0;
  }
`;

const ScWhy = styled.div`
  margin-bottom: 24px;

  .whyTitle {
    font-size: 18px;
    color: #fff8f0;
    font-weight: 400;
    margin: 0;
    margin-bottom: 6px;
  }

  .whyHelper {
    font-size: 16px;
    color: rgba(255, 248, 240, 0.5);
    margin: 0.5em 0;

    b {
      color: #fff8f0;
      font-style: normal;
    }
  }
`;

const ScHowItWork = styled.div`
  @media only screen and (min-width: 1024px) {
    display: flex;
    align-items: center;
  }
`;
const ScHowMain = styled.div`
  margin-bottom: 24px;

  .howTitle {
    font-size: 32px;
  }
  .howHelper {
    font-size: 18px;
    color: rgba(255, 248, 240, 0.5);
  }
`;
const ScHowItem = styled.div`
  flex: 1;

  .howNumber {
    font-size: 60px;
    font-weight: 300;
    letter-spacing: 2;
  }
  .howTitle {
    font-size: 18px;
    margin-bottom: 16px;
  }
  .howHelper {
    font-size: 16px;
    margin-right: 24px;
    color: rgba(255, 248, 240, 0.5);
  }
`;

const IndexPage = () => {
  return (
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
    >
      {(data) => (
        <Layout>
          <SEO
            title="Solareum Wallet"
            description="Crypto wallet & Payment protocol for the millions. We connect the current digital world into the future of decentralization - web3.0"
          >
            <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
          </SEO>

          <Container>
            <ScBanner>
              <h1 className="bannerTitle">
                Get your audience support with Crypto
              </h1>
              <p className="bannerHelper">
                Lighting rewards make supporting fast & easy
              </p>
            </ScBanner>
          </Container>

          <Container>
            <ScPanel>
              <ScPanelLeft style={{ flex: 3 }}>
                <lottie-player
                  src="/lotties/lf30_editor_6fzitg6z.json"
                  background="transparent"
                  speed="1"
                  style={{ width: "100%" }}
                  loop
                  autoplay
                ></lottie-player>
              </ScPanelLeft>
              <ScPanelRight style={{ flex: 2 }}>
                <ScFeature>
                  <div className="featureIcon">
                    <img src="/imgs/lr-secure.png" alt="secure" />
                  </div>
                  <div className="featureBody">
                    <div className="featureTitle">Secure</div>
                    <div className="featureHelper">
                      Private & fraud-proof&nbsp;payments
                    </div>
                  </div>
                </ScFeature>
                <ScFeature>
                  <div className="featureIcon">
                    <img src="/imgs/lr-instant.png" alt="instant" />
                  </div>
                  <div className="featureBody">
                    <div className="featureTitle">Instant</div>
                    <div className="featureHelper">
                      0% platform fees. Payments go directly to myour wallet. No
                      more 30-days&nbsp;delay.
                    </div>
                  </div>
                </ScFeature>
                <ScFeature>
                  <div className="featureIcon">
                    <img src="/imgs/lr-easy.png" alt="easy" />
                  </div>
                  <div className="featureBody">
                    <div className="featureTitle">Easy</div>
                    <div className="featureHelper">
                      Share link, widget or button&nbsp;anywhere
                    </div>
                  </div>
                </ScFeature>
              </ScPanelRight>
            </ScPanel>
          </Container>

          <Container>
            <ScPanel>
              <ScPanelLeft>
                <ScInfo>
                  <h3 className="infoTitle">Accept payment with Crypto?</h3>
                  <p className="infoHelper">
                    Lighting reward has everything you need to make an income
                    from your work
                  </p>
                </ScInfo>

                <div>
                  <ScWhy>
                    <h4 className="whyTitle">Larger Audience</h4>
                    <p className="whyHelper">
                      Go global! Crypto removes all geographical barriers for
                      donation. Also, crypto people are genegous lots
                    </p>
                  </ScWhy>
                  <ScWhy>
                    <h4 className="whyTitle">Invest in your Future</h4>
                    <p className="whyHelper">
                      Crypto can be a great investment, it costs more with time.
                      Let your audience invest for you.
                    </p>
                  </ScWhy>
                  <ScWhy>
                    <h4 className="whyTitle">No monstrous Fees</h4>
                    <p className="whyHelper">
                      You know how hight donation fees are. With{" "}
                      <b>NOWpayment</b>, you get all the money. All we take is
                      0.5% per transaction
                    </p>
                  </ScWhy>
                </div>
              </ScPanelLeft>
              <ScPanelRight>
                <lottie-player
                  src="/lotties/lf30_editor_knptyozc.json"
                  background="transparent"
                  speed="1"
                  style={{ width: "100%" }}
                  loop
                  autoplay
                ></lottie-player>
              </ScPanelRight>
            </ScPanel>
          </Container>

          <Container>
            <ScHowMain>
              <h3 className="howTitle">How it works</h3>
              <p className="howHelper">Accept payment in minute</p>
            </ScHowMain>

            <ScHowItWork>
              <ScHowItem>
                <div className="howNumber">01</div>
                <h3 className="howTitle">Copy wallet link</h3>
                <p className="howHelper">
                  Qui labore et in elit cillum tempor consequat exercitation
                  sit.
                </p>
              </ScHowItem>
              <ScHowItem>
                <div className="howNumber">02</div>
                <h3 className="howTitle">Share the link</h3>
                <p className="howHelper">
                  Qui labore et in elit cillum tempor consequat exercitation
                  sit.
                </p>
              </ScHowItem>
              <ScHowItem>
                <div className="howNumber">03</div>
                <h3 className="howTitle">Get rewards</h3>
                <p className="howHelper">
                  Qui labore et in elit cillum tempor consequat exercitation
                  sit.
                </p>
              </ScHowItem>
            </ScHowItWork>
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
