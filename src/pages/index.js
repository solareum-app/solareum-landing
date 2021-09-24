import React, { useState } from "react";
import styled from "styled-components";

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
          <SEO title="Home" />
          <Container>
            <Header>
              <div className="icon">
                <Img fluid={data.solareumIcon.childImageSharp.fluid} />
              </div>
              <h1 className="title">Solareum Wallet</h1>
              <Typo className="slogan">
                Ví crypto cho triệu người dùng. Giúp bạn thực hiện tất cả các
                nhu cầu hằng ngày của bạn, bất cứ lúc nào, bất kể nơi&nbsp;đâu,
                ngay trên điện thoại.
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
                  Solareum Wallet hỗ trợ <em>SOL</em>, và tất cả các token trên
                  nền tảng <em>SPL</em>. Trong tương lai sẽ còn hỗ trợ nhiều
                  blockchain hơn&nbsp;nữa.
                </Typo>
              </FeatureItem>
              <FeatureItem>
                <div className="cover">
                  <Img fluid={data.solareumDEX.childImageSharp.fluid} />
                </div>
                <h3 className="title">DEX</h3>
                <Typo className="body">
                  Tích hợp với các <em>DEX</em> + <em>DeFi</em> apps (Swap,
                  Future, Lending...) để bạn có thể trade trong lúc di chuyển,
                  ngay trong ứng dụng.
                </Typo>
              </FeatureItem>
              <FeatureItem>
                <div className="cover">
                  <Img fluid={data.solareumFiat.childImageSharp.fluid} />
                </div>
                <h3 className="title">Lightning Tips</h3>
                <Typo className="body">
                  Giao thức để kết nối Solareum Wallet với thế giới web2.0 hiện
                  tại. Giúp đem crypto đến với mọi ngóc ngách của
                  cuộc&nbsp;sống.
                </Typo>
              </FeatureItem>
            </FeatureList>
          </Container>

          <Container>
            <DownloadApp>
              <h3 className="title">Tải App</h3>
              <Typo className="body">
                Solareum Wallet có thể tải về trên Google&nbsp;Play và
                App&nbsp;store
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
        </Layout>
      )}
    </StaticQuery>
  );
};

export default IndexPage;
