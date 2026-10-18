import React, { useState } from 'react';
import styled from 'styled-components';
import { CONTACT, MEDIA_QUERY } from '../constants';

const READY = [
  'License type: producer, processor or both',
  'Tier (1, 2 or 3)',
  'New license or transfer',
  'Target move-in date',
];

// navigator.clipboard only exists on HTTPS, so fall back to execCommand elsewhere.
const writeClipboard = (text) => {
  if (navigator.clipboard) return navigator.clipboard.writeText(text);
  const field = document.createElement('textarea');
  field.value = text;
  field.setAttribute('readonly', '');
  field.style.position = 'fixed';
  field.style.opacity = '0';
  document.body.appendChild(field);
  field.select();
  const ok = document.execCommand('copy');
  document.body.removeChild(field);
  return ok ? Promise.resolve() : Promise.reject();
};

const CopyButton = ({ text, label }) => {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    writeClipboard(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    }, () => {});
  };
  return <Copy type="button" onClick={copy}>{copied ? 'Copied' : label}</Copy>;
};

const Contact = () => (
  <Section id="contact" className="band g">
    <p className="eyebrow">Start your lease</p>
    <h2 className="h2">Let&apos;s find the right spot for your business.</h2>
    <p className="lead" style={{ marginTop: 18 }}>
      Reach out by phone or email to check availability, schedule a tour or ask about licensing.
    </p>
    <Cards>
      <Card>
        <span>Call</span>
        <a href={CONTACT.PHONE_HREF}>{CONTACT.PHONE}</a>
        <div><CopyButton text={CONTACT.PHONE} label="Copy number" /></div>
      </Card>
      <Card>
        <span>Email</span>
        <a href={`mailto:${CONTACT.EMAIL}`}>{CONTACT.EMAIL}</a>
        <div><CopyButton text={CONTACT.EMAIL} label="Copy email" /></div>
      </Card>
    </Cards>
    <Ready>
      <h3>Helpful to have ready</h3>
      <ul>
        {READY.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </Ready>
  </Section>
);

export default Contact;

const Section = styled.section`
  background: var(--forest);
  color: var(--cream);

  .eyebrow {
    color: var(--sun);
  }
  .lead {
    color: var(--soft);
  }
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-top: 44px;

  ${MEDIA_QUERY.PHONE} {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: rgba(242, 243, 236, 0.06);
  border: 1px solid rgba(242, 243, 236, 0.14);
  border-radius: 16px;
  padding: 28px 30px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-width: 0;

  span {
    font: 600 13px/1 var(--display);
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--soft);
  }
  a {
    font: 800 clamp(24px, 3vw, 38px)/1.1 var(--display);
    letter-spacing: -0.02em;
    overflow-wrap: anywhere;
    font-variant-numeric: tabular-nums;
  }
  a:hover {
    color: var(--sun);
  }
  div {
    margin-top: 8px;
  }
`;

const Copy = styled.button`
  font: 600 14px/1 var(--display);
  color: var(--cream);
  background: none;
  border: 1px solid rgba(242, 243, 236, 0.3);
  border-radius: 8px;
  padding: 10px 14px;
  cursor: pointer;

  &:hover {
    background: rgba(242, 243, 236, 0.08);
  }
`;

const Ready = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 12px 32px;
  align-items: baseline;
  padding-top: 28px;
  border-top: 1px solid rgba(242, 243, 236, 0.14);

  h3 {
    font-weight: 700;
    font-size: 18px;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
  li {
    font: 500 14px/1 var(--display);
    border: 1px solid rgba(242, 243, 236, 0.22);
    border-radius: 99px;
    padding: 9px 13px;
    color: var(--soft);
  }

  ${MEDIA_QUERY.PHONE} {
    grid-template-columns: 1fr;
  }
`;
