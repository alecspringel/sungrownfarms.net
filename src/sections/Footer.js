import React from 'react';
import styled from 'styled-components';
import { MEDIA_QUERY } from '../constants';
import SungrownLogoSVG from '../images/sungrown-logo-gray.svg';

const Footer = () => (
  <footer style={{ padding: 40, background: '#fff' }}>
    <FlexContainer className="max-width m-auto flex-row">

      <div className="flex-row" style={{ justifyContent: 'space-around' }}>
        <div>
          <h6 className="text-bold m-b8">Address</h6>
          <SmallText className="m-b4">Mason County</SmallText>
          <SmallText>Shelton, Washington</SmallText>
        </div>
        <div>
          <h6 className="text-bold m-b8">Contact Us</h6>
          <SmallLink className="m-b8" href="mailto:help@sungrownfarms.net" style={{ color: 'var(--text-color)' }}>help@sungrownfarms.net</SmallLink>
          <SmallLink href="tel:702-290-0858" style={{ color: 'var(--text-color)' }}>+1 702 290-0858</SmallLink>
        </div>
      </div>
      <div className="text-left">
        <img src={SungrownLogoSVG} alt="Sungrown Farms logo" />
        <p style={{ fontSize: 12 }} className="m-t8">
          ©
          {new Date().getFullYear()}
          {' '}
          Sungrown Farms
        </p>
      </div>
    </FlexContainer>
  </footer>
);

export default Footer;

const SmallText = styled.p`
  font-size: 15px;
`;

const SmallLink = styled.a`
  font-size: 15px;
  display: block;
  font-family: "Inter";
`;

const FlexContainer = styled.div`
  flex-direction: row-reverse;
  justify-content: space-around;

  & > div:nth-child(2) {
    flex: 1;
  }
  & > div:nth-child(1) {
    flex: 2;
  }

  ${MEDIA_QUERY.TABLET} {
    flex-direction: column-reverse;
    align-items: center;

    & > div:nth-child(2) {
      text-align: center;
    }

    & > div:nth-child(1) {
      text-align: center;
      width: 100%;
      margin-top: 30px;
      flex-wrap: wrap;
      gap: 20px;
    }

    img {
      height: 26px;
    }
  }
`;
