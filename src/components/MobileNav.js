import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'gatsby';
import ClickAway from './ClickAway';
import HamburgerMenuSVG from '../images/hamburger-menu-white.svg';
import { MEDIA_QUERY } from '../constants';

const MobileNav = ({ height, isClear }) => {
  const [open, toggle] = useState(false);
  return (
    <ClickAway
      style={{ display: 'inline-block', height: 'fit-content' }}
      onClick={() => toggle(!open)}
      onClickAway={() => toggle(false)}
      contents={(
        <>
          <Wrapper>
            <MenuIcon src={HamburgerMenuSVG} />
            <Options open={open} height={height} isClear={isClear}>
              <ul className="flex-col mw-padding p-t12">
                <NavLink to="/#">Home</NavLink>
                <NavLink to="/#About">About</NavLink>
                <NavLink to="/#FAQ">FAQ</NavLink>
                <NavLink to="/#Contact">Contact</NavLink>
              </ul>
            </Options>
          </Wrapper>
        </>
      )}
    />
  );
};

export default MobileNav;

const MenuIcon = styled.img`
  height: 30px;
  opacity: 0.7;
`;

const Wrapper = styled.div`
  display: inline-block;
  display: none;
  ${MEDIA_QUERY.TABLET} {
    display: block;
  }
`;

const Options = styled.div`
  max-height: 0;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  z-index: 2;
  background: ${(props) => props.theme.background};
  overflow: hidden;
  transition: max-height 0ms ease-in-out;
  ${(props) => props.open
    && css`
      background: #00000090;
      transition: max-height 150ms ease-in-out;
      max-height: ${(props) => props.height};
      box-shadow: 2px 3px 3px #00000033;
    `}
`;

const NavLink = styled(Link)`
  font-family: "Aleo";
  color: #fff;
  padding: 10px 5px;
`;
