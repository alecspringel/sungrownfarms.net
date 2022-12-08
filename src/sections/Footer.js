import React from 'react';
import styled from 'styled-components';
import SungrownLogoGray from '../images/sungrown-logo-gray.svg';

const Footer = () => (
  <footer style={{ padding: 40 }}>
    <div className="max-width m-auto flex-row" style={{ justifyContent: 'space-around' }}>
      <div>
        <img src={SungrownLogoGray} alt="Sungrown Farms logo" />
        <p style={{ fontSize: 12 }} className="m-t8">
          ©
          {new Date().getFullYear()}
          {' '}
          Sungrown Farms
        </p>
      </div>
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
  </footer>
);

export default Footer;

const SmallText = styled.p`
  font-size: 15px;
`;
