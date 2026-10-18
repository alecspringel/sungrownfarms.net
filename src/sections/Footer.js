import React from 'react';
import styled from 'styled-components';
import { CONTACT, NAV_LINKS } from '../constants';
import SungrownLogo from '../images/sungrown-logo.svg';

const Footer = () => (
  <StyledFooter className="g">
    <Top>
      <div>
        <img src={SungrownLogo} alt="Sungrown Farms" width="216" />
        <p>Turnkey cannabis land leases and licensing support in Mason County, Washington.</p>
      </div>
      <Columns>
        <div>
          <h4>Park</h4>
          <ul>
            {NAV_LINKS.filter(({ label }) => label !== 'FAQ').map(({ href, label }) => (
              <li key={href}><a href={href}>{label}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li><a href={CONTACT.PHONE_HREF}>{CONTACT.PHONE}</a></li>
            <li><a href={`mailto:${CONTACT.EMAIL}`}>{CONTACT.EMAIL}</a></li>
            <li><a href="/#faq">FAQ</a></li>
          </ul>
        </div>
      </Columns>
    </Top>
    <Bottom>
      <span>{`© ${new Date().getFullYear()} Sungrown Farms`}</span>
      <span>
        Flowering plant photo by Cannabis Tours,
        {' '}
        <a href="https://commons.wikimedia.org/wiki/File:Cannabis_flowering_in_a_greenhouse.jpg">CC BY-SA 4.0</a>
        . Map data ©
        {' '}
        <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>
        .
      </span>
    </Bottom>
  </StyledFooter>
);

export default Footer;

const StyledFooter = styled.footer`
  background: var(--deep);
  color: var(--soft);
  padding-top: 48px;
  padding-bottom: 40px;
  font: 400 14.5px/1.6 var(--display);
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 28px 48px;
  padding-bottom: 32px;
  border-bottom: 1px solid rgba(242, 243, 236, 0.1);

  p {
    margin-top: 14px;
    max-width: 36ch;
  }
`;

const Columns = styled.div`
  display: flex;
  gap: 56px;
  flex-wrap: wrap;

  h4 {
    font-weight: 600;
    font-size: 13px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--cream);
    margin-bottom: 12px;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    gap: 6px;
  }
  a:hover {
    color: var(--cream);
  }
`;

const Bottom = styled.div`
  padding-top: 24px;
  font-size: 12.5px;
  display: flex;
  justify-content: space-between;
  gap: 12px 32px;
  flex-wrap: wrap;

  a {
    text-decoration: underline;
    text-underline-offset: 2px;
  }
`;
