import React, { useState } from "react";
import styled from "styled-components";

import { Maximize } from "react-feather";

const ScGetStarted = styled.div`
  background: #1d201f;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04), 0px 8px 16px rgba(0, 0, 0, 0.32);
  border-radius: 24px;
  padding: 24px 16px;
  text-align: center;

  .gsTitle {
    font-size: 40px;
    margin-bottom: 24px;
    line-height: 1;
    font-weight: 500;
    max-width: 560px;
    margin-left: auto;
    margin-right: auto;
  }
  .gsHelper {
    font-size: 18px;
    color: #99a3a9;
    max-width: 560px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 36px;
  }
  .gsDownloadWrp {
  }
  .gsQRCode {
  }

  .storeIcon {
    max-width: 200px;
    margin-left: 12px;
    margin-right: 12px;
    margin-bottom: 12px;

    background: #272b29;
    box-shadow: 12px 12px 24px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
  }

  @media only screen and (min-width: 1024px) {
    padding: 48px 16px;

    .gsDownloadWrp {
      margin-bottom: 16px;
    }
  }
`;

const ScQRButton = styled.button`
  background: transparent;
  opacity: 0.5;
  border: 0;
  color: white;
  font-weight: 300;
  cursor: pointer;

  .qrBody {
    display: flex;
    align-items: center;

    span {
      margin-left: 8px;
    }
  }
`;
const ScQRCode = styled.div`
  border: 12px solid white;
  border-radius: 4px;
  width: 200px;
  margin-left: auto;
  margin-right: auto;

  img {
    width: 100%;
  }
`;

const QRCode = () => {
  const [show, setShow] = useState(false);

  if (show) {
    return (
      <ScQRCode>
        <img src="/imgs/getwallet.png" alt="get solareum wallet" />
      </ScQRCode>
    );
  }
  return (
    <ScQRButton onClick={() => setShow(true)}>
      <div className="qrBody">
        <Maximize size="16" />
        <span>Show QR Code</span>
      </div>
    </ScQRButton>
  );
};

export const GetStarted = () => {
  return (
    <ScGetStarted>
      <h3 className="gsTitle">Get started with&nbsp;Solareum</h3>
      <p className="gsHelper">
        Download Solareum to get the most sophisticated wallet experience & earn
        XSB tokens
      </p>
      <div className="gsDownloadWrp">
        <a
          href="https://solareum.app/getwallet"
          target="_blank"
          rel="noopener noreferrer"
          className="googleLink"
        >
          <img src="/imgs/download-googleplay.png" className="storeIcon" />
        </a>
        <a
          href="https://solareum.app/getwallet"
          target="_blank"
          rel="noopener noreferrer"
          className="appleLink"
        >
          <img src="/imgs/download-appstore.png" className="storeIcon" />
        </a>
      </div>
      <div className="gsQRCode">
        <QRCode />
      </div>
    </ScGetStarted>
  );
};
