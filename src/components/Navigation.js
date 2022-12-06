import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import SungrownLogo from '../images/sungrown-logo.svg';

const Navigation = () => (
  <NavigationBar className="flex-row align-c">
    <NavigationContent className="m-auto flex-row align-c">
      <img src={SungrownLogo} alt="Sungrown Farms logo" style={{ height: 36 }} />
      <ul>
        <NavLink to="/#">Home</NavLink>
        <NavLink to="/#About">About</NavLink>
        <NavLink to="/#FAQ">FAQ</NavLink>
        <NavLink to="/#Contact">Contact</NavLink>
      </ul>
    </NavigationContent>
  </NavigationBar>
);

export default Navigation;

const NavigationBar = styled.nav`
  height: 64px;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1;
`;

const NavigationContent = styled.div`
  max-width: 1440px;
  width: 100%;
  justify-content: space-between;
`;

const NavLink = styled(Link)`
  font-family: "Aleo";
  color: #fff;
  padding: 0 20px;
`;
