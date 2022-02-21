import styled from "styled-components";

export const DownloadButton = styled.a`
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
  padding: 0 36px;
  padding-right: 16px;

  .buttonBody {
    display: flex;
    align-items: center;
    height: 100%;

    span {
      margin-right: 12px;
    }
  }

  @media only screen and (min-width: 1024px) {
    height: 74px;
    line-height: 74px;
    padding: 0 48px;
    padding-right: 36px;
    font-size: 24px;
  }
`;
