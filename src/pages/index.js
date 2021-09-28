import React from "react";
import styled from "styled-components";
import { Twitter, Send, Users } from "react-feather";

import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { Container } from "../components/Grid";

const Header = styled.div`
  .icon {
    width: 120px;
    border-radius: 12px;
    overflow: hidden;
    margin-bottom: 1rem;
    margin-left: auto;
    margin-right: auto;
  }
  .title {
    margin-top: 0;
    margin-bottom: 0;
    text-align: center;
    font-weight: 400;
    margin-top: 12px;
    margin-bottom: 12px;
  }
  .slogan {
    margin-top: 0;
    margin-bottom: 0;
    text-align: center;
    max-width: 440px;
    margin-left: auto;
    margin-right: auto;
    color: #f8f5f1;
    opacity: 0.75;
  }
`;

const FeatureList = styled.div`
  @media only screen and (min-width: 1024px) {
    display: flex;
    margin-left: -1rem;
    margin-right: -1rem;
  }
`;

const FeatureItem = styled.div`
  margin-bottom: 2em;

  @media only screen and (min-width: 1024px) {
    width: calc(100% / 3 - 2rem);
    margin-left: 1rem;
    margin-right: 1rem;
    margin-bottom: 0;
  }

  .cover {
    max-width: 120px;
    margin-left: auto;
    margin-right: auto;
  }
  .title {
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
    text-align: center;
    font-weight: 400;
  }
  .body {
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
    opacity: 0.75;
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
          solareumIcon: file(relativePath: { eq: "XSB-P.png" }) {
            childImageSharp {
              fluid(maxWidth: 120) {
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
            description="Crypto wallet for the millions, built on Solana"
          />
          <Container>
            <Header>
              <div className="icon">
                <Img fluid={data.solareumIcon.childImageSharp.fluid} />
              </div>
              <h1 className="title">Solareum Wallet</h1>
              <Typo className="slogan">
                Crypto wallet for the millions, built on <em>Solana</em>.
                Helping you fulfill all your daily needs. Whenever you need it,
                It's always right on your&nbsp;finger.
              </Typo>
            </Header>
          </Container>

          <Container>
            <FeatureList>
              <FeatureItem>
                <div className="cover">
                  <Img fluid={data.solareumWallet.childImageSharp.fluid} />
                </div>
                <h3 className="title">Wallet</h3>
                <Typo className="body">
                  Solareum Wallet supports <em>SOL</em> - Solana, and all tokens
                  on the <em>SPL</em> platform. More blockchains will
                  come&nbsp;then.
                </Typo>
              </FeatureItem>
              <FeatureItem>
                <div className="cover">
                  <Img fluid={data.solareumDEX.childImageSharp.fluid} />
                </div>
                <h3 className="title">DEX</h3>
                <Typo className="body">
                  Integrate with <em>DEX</em> + <em>DeFi</em> Apps (Swap, Serum,
                  Future, Earning...) so you can trade on the go, right in
                  the&nbsp;app.
                </Typo>
              </FeatureItem>
              <FeatureItem>
                <div className="cover">
                  <Img fluid={data.solareumFiat.childImageSharp.fluid} />
                </div>
                <h3 className="title">Lightning Rewards</h3>
                <Typo className="body">
                  The protocol to connect the current digital world into the
                  future of decentralization - <em>Web3.0</em>.
                </Typo>
              </FeatureItem>
            </FeatureList>
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
