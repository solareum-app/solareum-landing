import React from "react";
import styled from "styled-components";

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
  }
`;

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
    </ScGetStarted>
  );
};
