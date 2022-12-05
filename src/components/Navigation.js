import React from 'react';
import styled from 'styled-components';
import SungrownLogo from '../images/sungrown-logo.svg';

const Navigation = () => (
  <NavigationBar>
    <img src={SungrownLogo} alt="Sungrown Farms logo" />
  </NavigationBar>
);

export default Navigation;

const NavigationBar = styled.nav`
  height: 64px;
`;
