import React from "react";
import styled from "styled-components";
import { Twitter, Send, Users, Triangle, Repeat } from "react-feather";

import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { Container } from "../components/Grid";
import { Counter } from "../Containers/Counter";

const Banner = styled.div`
  padding-top: 4em;
  padding-bottom: 4em;

  .bannerLeft {
  }
  .bannerRight {
  }

  .bannerTitle {
    font-size: 52px;
    line-height: 1;
    font-weight: normal;
    margin: 0;
  }
  .bannerHelper {
    font-size: 18px;
    line-height: 1.4;
    color: rgba(255, 248, 240, 0.5);
    margin-bottom: 36px;
  }

  @media only screen and (min-width: 1024px) {
    display: flex;
    padding-top: 4em;
    padding-bottom: 4em;

    .bannerLeft {
      flex: 1;
    }
    .bannerRight {
      flex: 1;
    }

    .bannerTitle {
      font-size: 64px;
    }
    .bannerHelper {
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
  border-radius: 36px;
  height: 72px;
  color: white;
  padding: 0 48px;
  border: 0;
  display: inline-block;
  font-size: 24px;
  line-height: 72px;
  cursor: pointer;
`;

const Partner = styled.div`
  .partnerTitle {
    font-size: 13px;
    text-transform: uppercase;
    color: rgba(255, 248, 240, 0.5);
  }
  .partnerList {
  }
  .partnerItem {
    width: 44px;
    margin-right: 16px;
    display: inline-block;
  }
`;

const FeatureItem = styled.div`
  margin-bottom: 4em;

  .cover {
    max-width: 420px;
  }
  .itemBody {
  }
  .itemBodyWrp {
    max-width: 460px;
  }
  .title {
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
    font-weight: 400;
    font-size: 32px;
    color: white;
  }
  .message {
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
    font-size: 18px;
    line-height: 1.4;
    color: rgba(255, 248, 240, 0.52);
  }

  @media only screen and (min-width: 768px) {
    margin-bottom: 2em;
    display: flex;
    align-items: center;

    &.contentFirst {
      flex-direction: row-reverse;
    }

    .cover {
      flex: 1;
    }
    .itemBody {
      flex: 1;
    }
  }
`;

const Typo = styled.p`
  em {
    color: #f54d4d;
    font-style: normal;
    font-weight: 400;
  }
`;

const DownloadApp = styled.div`
  margin-left: auto;
  margin-right: auto;
  text-align: center;

  .qrcode {
    width: 180px;
    height: 180px;
    border: 16px solid white;
    border-radius: 8px;
  }

  .storeWrp {
    margin-left: -12px;
    margin-right: -12px;
    margin-top: 24px;
    margin-bottom: 12px;
  }

  .storeIcon {
    max-width: 200px;
    margin-left: 12px;
    margin-right: 12px;
    margin-bottom: 12px;
  }

  .googleLink {
  }
  .appleLink {
  }

  .googleIcon {
    border: 1px solid white;
    border-radius: 8px;
  }
  .appleIcon {
  }

  @media only screen and (min-width: 1024px) {
  }
`;

const Social = styled.div`
  text-align: center;

  .socialItem {
    color: white;
    text-decoration: none;
    margin-left: 12px;
    margin-right: 12px;
    line-height: 24px;
    white-space: nowrap;
    transition: all 0.25s;
    margin-bottom: 12px;
    display: block;

    &:hover {
      color: #ff33ff;
    }
  }

  @media only screen and (min-width: 1024px) {
    .socialItem {
      display: inline-block;
    }
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
          solareumWallet: file(relativePath: { eq: "solareum-wallet.png" }) {
            childImageSharp {
              fluid(maxWidth: 120) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          solareumDEX: file(relativePath: { eq: "solareum-dex.png" }) {
            childImageSharp {
              fluid(maxWidth: 120) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          solareumFiat: file(relativePath: { eq: "solareum-fiat.png" }) {
            childImageSharp {
              fluid(maxWidth: 120) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          deliverImg: file(relativePath: { eq: "deliver.png" }) {
            childImageSharp {
              fluid(maxWidth: 240) {
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
            <Banner>
              <div className="bannerLeft">
                <h1 className="bannerTitle">Crypto wallet that you love</h1>
                <p className="bannerHelper">
                  Solareum makes it safe & easy for you to store, send, receive
                  and swap tokens on Solana blockchain
                </p>
                <DownloadButton>Download Now</DownloadButton>
              </div>
              <div className="bannerRight"></div>
            </Banner>
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
          </Container>

          <Container>
            <FeatureItem>
              <div className="cover">
                <Img fluid={data.solareumWallet.childImageSharp.fluid} />
              </div>
              <div className="itemBody">
                <div className="itemBodyWrp">
                  <h3 className="title">Send & Receive</h3>
                  <Typo className="message">
                    Solareum will help you store, send and receive all SPL
                    tokens. Moreover, it build on Solana blockchain so the
                    transaction fee is really cheap
                  </Typo>
                </div>
              </div>
            </FeatureItem>

            <FeatureItem className="contentFirst">
              <div className="cover">
                <Img fluid={data.solareumDEX.childImageSharp.fluid} />
              </div>
              <div className="itemBody">
                <div className="itemBodyWrp">
                  <h3 className="title">Swap SPL token</h3>
                  <Typo className="message">
                    Never miss any investment opportunities when you can
                    build-in DEX to swap token at the best prices instanly and
                    securely
                  </Typo>
                </div>
              </div>
            </FeatureItem>

            <FeatureItem>
              <div className="cover">
                <Img fluid={data.solareumFiat.childImageSharp.fluid} />
              </div>
              <div className="itemBody">
                <div className="itemBodyWrp">
                  <h3 className="title">Lighting Reward</h3>
                  <Typo className="message">
                    Build & grow the digital economy with our paymen potocal,
                    which allows you to tip, donate or buy on any platform
                    anywhere at blazzing fast speed
                  </Typo>
                </div>
              </div>
            </FeatureItem>
          </Container>

          <Container>
            <Counter />
          </Container>

          <Container>
            <DownloadApp>
              <h3 className="title">Download Solareum Wallet</h3>
              <Typo className="body">
                Solareum Wallet is now available on both Google&nbsp;Play and
                App&nbsp;Store
              </Typo>
              <div className="storeWrp">
                <a
                  href="https://solareum.app/getwallet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="googleLink"
                >
                  <img
                    src="/imgs/img-download-google.jpg"
                    className="storeIcon googleIcon"
                  />
                </a>
                <a
                  href="https://solareum.app/getwallet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="appleLink"
                >
                  <img
                    src="/imgs/img-download-apple.jpg"
                    className="storeIcon appleIcon"
                  />
                </a>
              </div>
              <img src="/imgs/getwallet.png" className="qrcode" />
            </DownloadApp>
          </Container>

          <Container style={{ marginTop: "8em" }}>
            <Social>
              <a
                href="https://twitter.com/solareum_wallet"
                target="_blank"
                rel="noopener noreferrer"
                className="socialItem"
              >
                <Twitter size={16} />
                &nbsp;Twitter
              </a>
              <a
                href="https://t.me/solareum_wallet"
                target="_blank"
                rel="noopener noreferrer"
                className="socialItem"
              >
                <Send size={16} />
                &nbsp;Telegram
              </a>
              <a
                href="https://www.wealthclub.vn/t/en-solareum-white-paper/578"
                target="_blank"
                rel="noopener noreferrer"
                className="socialItem"
              >
                <Triangle size={16} />
                &nbsp;White Paper
              </a>
              <a
                href="https://www.wealthclub.vn/t/en-solareum-evaluation-strategy/580"
                target="_blank"
                rel="noopener noreferrer"
                className="socialItem"
              >
                <Repeat size={16} />
                &nbsp;Evaluation
              </a>
              <a
                href="https://www.wealthclub.vn/c/en-solareum/14"
                target="_blank"
                rel="noopener noreferrer"
                className="socialItem"
              >
                <Users size={16} />
                &nbsp;WealthClub
              </a>
            </Social>
          </Container>
        </Layout>
      )}
    </StaticQuery>
  );
};

export default IndexPage;
