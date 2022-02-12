import styled from "styled-components";

export const Title = styled.h3`
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
  font-weight: 400;
  font-size: 24px;
  color: white;

  @media only screen and (min-width: 1024px) {
    font-size: 28px;
  }
`;

export const Helper = styled.p`
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.4;
  color: #99a3a9;

  @media only screen and (min-width: 1024px) {
    font-size: 18px;
  }
`;

export const SubTitle = styled.h4`
  font-size: 18px;
  margin-bottom: 16px;
  font-weight: 400;
`;

export const SubHelper = styled.p`
  font-size: 16px;
  margin-right: 24px;
  color: #99a3a9;
  font-weight: 400;
`;
