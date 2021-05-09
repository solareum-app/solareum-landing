import React, { useState } from "react";
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
    max-width: 400px;
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

const Subscribe = styled.form`
  .message {
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
    opacity: 0.75;
    text-align: center;
    margin-bottom: 1em;
  }
  .wrp {
  }
  .email {
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
    display: block;
    width: 100%;
  }
  .button {
  }

  @media only screen and (min-width: 1024px) {
    .wrp {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }

    .email {
      display: initial;
      width: auto;
      min-width: 240px;
    }
    .button {
    }
  }
`;

const SuccessPanel = styled.div`
  .cover {
    width: 240px;
    margin-left: auto;
    margin-right: auto;
  }
  .title {
    margin-top: 1em;
    margin-bottom: 0;
    text-align: center;
    font-weight: 400;
  }
  .message {
    margin-top: 0.5em;
    text-align: center;
  }
`;

const Typo = styled.p`
  em {
    color: #f54d4d;
    font-style: normal;
    font-weight: 400;
  }
`;

const IndexPage = () => {
  const [email, setEmail] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(null);
  const [subscription, setSubscription] = useState(false);

  const subscribe = async () => {
    setBusy(true);
    try {
      const sub = await fetch("https://api.solareum.app/subscriptions", {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          email,
        }),
      });
      setBusy(false);
      setSubscription(sub);
    } catch (err) {
      setBusy(false);
      setError(err);
    }
  };

  return (
    <StaticQuery
      query={graphql`
        query {
          solareumIcon: file(relativePath: { eq: "solareum-b.png" }) {
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
              <p className="slogan">
                Ví crypto cho triệu người dùng. Giúp bạn thực hiện tất cả các
                nhu cầu hằng ngày của bạn, bất cứ lúc nào, ngay trên điện thoại.
              </p>
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
                  Future, Lending...) để bạn có thể trade on the go, ngay trong
                  ứng dụng.
                </Typo>
              </FeatureItem>
              <FeatureItem>
                <div className="cover">
                  <Img fluid={data.solareumFiat.childImageSharp.fluid} />
                </div>
                <h3 className="title">Fiat bridge</h3>
                <Typo className="body">
                  Là cầu nối mua bán <em>USDC</em>, <em>USDT</em>,... thông qua
                  các giao dịch ngang hàng P2P. Giúp bạn nạp/rút tiền nhanh
                  chóng và an&nbsp;toàn.
                </Typo>
              </FeatureItem>
            </FeatureList>
          </Container>

          <Container>
            {!subscription ? (
              <Subscribe onSubmit={subscribe}>
                <p className="message">
                  Nhập email để nhận được thông tin cập nhật từ dự án sớm nhất.
                </p>
                <div className="wrp">
                  <TextInput
                    name="email"
                    placeholder="Your email..."
                    height={40}
                    className="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Button
                    height={40}
                    iconAfter={ArrowRightIcon}
                    appearance="primary"
                    isLoading={busy}
                    onClick={subscribe}
                  >
                    Đăng ký
                  </Button>
                </div>
              </Subscribe>
            ) : (
              <SuccessPanel>
                <div className="wrp">
                  <div className="cover">
                    <Img fluid={data.deliverImg.childImageSharp.fluid} />
                  </div>
                  <h3 className="title">Đăng ký thành công!</h3>
                  <p className="message">
                    Chúng tôi đang làm việc hết sức mình để đưa dự án đến với
                    các bạn sớm nhất có thể.
                  </p>
                </div>
              </SuccessPanel>
            )}
          </Container>
        </Layout>
      )}
    </StaticQuery>
  );
};

export default IndexPage;
