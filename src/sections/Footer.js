import React from 'react';
import styled from 'styled-components';
import { MEDIA_QUERY } from '../constants';
import SungrownLogoGray from '../images/sungrown-logo-gray.svg';

const Footer = () => (
  <footer style={{ padding: 40 }}>
    <FlexContainer className="max-width m-auto flex-row" style={{ justifyContent: 'space-around' }}>
      <div className="text-center">
        <img src={SungrownLogoGray} alt="Sungrown Farms logo" />
        <p style={{ fontSize: 12 }} className="m-t8">
          ©
          {new Date().getFullYear()}
          {' '}
          Sungrown Farms
        </p>
      </div>
      <div className="flex-row" style={{ justifyContent: 'space-around' }}>
        <div>
          <h6 className="text-bold m-b8">Address</h6>
          <SmallText className="m-b4">Mason County</SmallText>
          <SmallText>Shelton, Washington</SmallText>
        </div>
        <div>
          <h6 className="text-bold m-b8">Contact Us</h6>
          <SmallText className="m-b4">702-290-0858</SmallText>
          <SmallText>help@sungrown.net</SmallText>
        </div>
      </div>
    </FlexContainer>
  </footer>
);

export default Footer;

const SmallText = styled.p`
  font-size: 15px;
`;

const FlexContainer = styled.div`
  & > div:nth-child(1) {
    flex: 1;
  }
  & > div:nth-child(2) {
    flex: 2;
  }

  ${MEDIA_QUERY.TABLET} {
    flex-direction: column-reverse;
    align-items: center;

    & > div:nth-child(2) {
      text-align: center;
      width: 100%;
      margin-bottom: 30px;
      flex-wrap: wrap;
      gap: 20px;
    }
  }
`;
