import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Root = styled.div`
  text-align: center;

  a {
    color: #727f87;
    text-decoration: none;
    border-bottom: 1px dashed #727f87;
    position: relative;
    z-index: 1;
    transition: all 0.25s;

    &:hover {
      color: #ff33ff;
      border-bottom-color: #ff33ff;
    }
  }

  .messageWrp {
    margin-top: -20px;
  }
`;

const Main = styled.div`
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
  position: relative;

  .mainContent {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .total {
    font-size: 32px;
    line-height: 1.5;
  }
`;

export const Counter = () => {
  const [total, setTotal] = useState(0);

  const getTotal = async () => {
    const t = await fetch(
      "https://api.solareum.app/airdrops/count?type=airdrop"
    )
      .then((resp) => {
        return resp.text();
      })
      .catch(() => {
        setTotal("1000");
      });
    setTotal(t);
  };

  useEffect(() => {
    getTotal();

    const intervalTotal = setInterval(() => {
      getTotal();
    }, 30000);

    return () => {
      clearInterval(intervalTotal);
    };
  }, []);

  return (
    <Root>
      <Main>
        <lottie-player
          src="/lotties/circle.json"
          background="transparent"
          speed="1"
          style={{ width: "100%" }}
          loop
          autoplay
        ></lottie-player>
        <div className="mainContent">
          <h6 className="total">{total}+</h6>
        </div>
      </Main>

      <div className="messageWrp">
        <p>
          <a
            href="https://solscan.io/token/4UuGQgkD3rSeoXatXRWwRfRd21G87d5LiCfkVzNNv1Tt#holders"
            target="_blank"
            rel="noopener noreferrer"
          >
            # XSB account activated
          </a>
        </p>
        <p>
          <a
            href="https://solscan.io/account/7Kwq7Hj6q2u2tx35zZvFHsKLseKm3Y753aQTVEcy8rtv#splTranfers"
            target="_blank"
            rel="noopener noreferrer"
          >
            Airdrop Status: Running
          </a>
        </p>
      </div>
    </Root>
  );
};
