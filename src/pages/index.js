import React from "react";
import styled from "styled-components";
import { TextInput, Button, ArrowRightIcon } from "evergreen-ui";

import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { Container } from "../components/Grid";

const Header = styled.div`
  .icon {
    width: 120px;
    border-radius: 8px;
    overflow: hidden;
    margin-bottom: 1rem;
  }
  .title {
    margin-top: 0;
    margin-bottom: 0;
  }
  .slogan {
    margin-top: 0;
    margin-bottom: 0;
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

  .title {
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
  }
  .body {
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
  }
`;

const Subscribe = styled.div`
  display: flex;
  flex-wrap: wrap;

  .email {
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
  }
  .button {
  }
`;

const SolareumIcon = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "solareum-b.png" }) {
          childImageSharp {
            fluid(maxWidth: 120) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={(data) => (
      <Img fluid={data.placeholderImage.childImageSharp.fluid} />
    )}
  />
);

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container>
      <Header>
        <div className="icon">
          <SolareumIcon />
        </div>
        <h1 className="title">Solareum Wallet</h1>
        <p className="slogan">
          Thực hiện tất cả các nhu cầu hằng ngày của bạn, bất cứ lúc nào, ngay
          trên điện thoại.
        </p>
      </Header>
    </Container>

    <Container>
      <FeatureList>
        <FeatureItem>
          <h3 className="title">Wallet</h3>
          <p className="body">
            Solareum Wallet hỗ trợ SOL, và tất cả các token trên nền tảng SPL.
            Trong tương lai sẽ còn hỗ trợ nhiều blockchain hơn&nbsp;nữa.
          </p>
        </FeatureItem>
        <FeatureItem>
          <h3 className="title">DEX</h3>
          <p className="body">
            Tích hợp với các dex để bạn có thể trade on the go, ngay trong ứng
            dụng. Giúp tiết kiệm thời gian, tăng trải nghiệm khi giao&nbsp;dịch.
          </p>
        </FeatureItem>
        <FeatureItem>
          <h3 className="title">Fiat</h3>
          <p className="body">
            Là cầu nối giúp bạn mua bán USDC, USDT,... thông qua các giao dịch
            ngang hàng P2P. Giúp bạn nạp/rút tiền nhanh chóng, an&nbsp;toàn.
          </p>
        </FeatureItem>
      </FeatureList>
    </Container>

    <Container>
      <Subscribe>
        <TextInput
          name="email"
          placeholder="Your email..."
          height={40}
          className="email"
        />
        <Button
          height={40}
          iconAfter={ArrowRightIcon}
          // intent="success"
          appearance="primary"
        >
          Đăng ký
        </Button>
      </Subscribe>
    </Container>
  </Layout>
);

export default IndexPage;
