import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import SungrownLogo from '../images/sungrown-logo.svg';
import { MEDIA_QUERY } from '../constants';
import MobileNav from '../components/MobileNav';

const DesktopNav = () => (
  <ul className="desktop-nav">
    <NavLink to="/#">Home</NavLink>
    <NavLink to="/#About">About</NavLink>
    <NavLink to="/#FAQ">FAQ</NavLink>
    <NavLink to="/#Contact">Contact</NavLink>
  </ul>
);

const Navigation = () => (
  <NavigationBar className="flex-row align-c">
    <NavigationContent className="m-auto flex-row align-c p-t8 p-b8 mw-padding">
      <img src={SungrownLogo} alt="Sungrown Farms logo" style={{ height: 36 }} />
      <MobileNav height="168px" />
      <DesktopNav />

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

  ${MEDIA_QUERY.TABLET} {
    .desktop-nav {
      display: none;
    }
  }
`;

const NavigationContent = styled.div`
  max-width: 1440px;
  width: 100%;
  justify-content: space-between;
  position: relative;
`;

const NavLink = styled(Link)`
  font-family: "Aleo";
  color: #fff;
  padding: 0 20px;
`;
