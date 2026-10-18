import React, { useState } from 'react';
import styled from 'styled-components';
import SungrownLogo from '../images/sungrown-logo.svg';
import { MEDIA_QUERY, NAV_LINKS } from '../constants';
import Button from '../components/Button';

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <NavigationBar>
      <Row className="g">
        <a href="/#" aria-label="Sungrown Farms home" onClick={close}>
          <Logo src={SungrownLogo} alt="Sungrown Farms" />
        </a>
        <DesktopLinks aria-label="Main">
          {NAV_LINKS.map(({ href, label }) => <a key={href} href={href}>{label}</a>)}
          <Button href="/#contact" $small>Contact us</Button>
        </DesktopLinks>
        <MenuButton
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(!open)}
        >
          {open ? 'Close' : 'Menu'}
        </MenuButton>
      </Row>
      <MobileLinks id="mobile-menu" className="g" aria-label="Main" hidden={!open}>
        {NAV_LINKS.map(({ href, label }) => <a key={href} href={href} onClick={close}>{label}</a>)}
        <Button href="/#contact" onClick={close}>Contact us</Button>
      </MobileLinks>
    </NavigationBar>
  );
};

export default Navigation;

const NavigationBar = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  background: var(--forest);
  color: var(--cream);
  border-bottom: 1px solid rgba(242, 243, 236, 0.08);
`;

const Row = styled.div`
  height: var(--nav-h);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;

const Logo = styled.img`
  width: 216px;
  ${MEDIA_QUERY.PHONE} {
    width: 168px;
  }
`;

const DesktopLinks = styled.nav`
  display: flex;
  gap: 28px;
  align-items: center;
  font: 500 15px/1 var(--display);

  & > a:not(:last-child) {
    opacity: 0.82;
  }
  & > a:not(:last-child):hover {
    opacity: 1;
  }

  ${MEDIA_QUERY.SMALL_LAPTOPS} {
    display: none;
  }
`;

const MenuButton = styled.button`
  display: none;
  font: 600 15px/1 var(--display);
  color: var(--cream);
  background: none;
  border: 1px solid rgba(242, 243, 236, 0.35);
  border-radius: 8px;
  padding: 10px 14px;
  cursor: pointer;

  ${MEDIA_QUERY.SMALL_LAPTOPS} {
    display: inline-block;
  }
`;

const MobileLinks = styled.nav`
  display: grid;
  border-top: 1px solid rgba(242, 243, 236, 0.1);
  padding-top: 8px;
  padding-bottom: 20px;

  &[hidden] {
    display: none;
  }

  & > a {
    font: 600 20px/1 var(--display);
    padding: 14px 0;
    border-bottom: 1px solid rgba(242, 243, 236, 0.08);
  }
  & > a:last-child {
    margin-top: 16px;
    border-bottom: 0;
  }

  @media (min-width: 961px) {
    display: none;
  }
`;
