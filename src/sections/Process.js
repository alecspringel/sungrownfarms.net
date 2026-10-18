import React from 'react';
import styled from 'styled-components';
import { MEDIA_QUERY } from '../constants';

const STEPS = [
  { title: 'Call or email', text: "Tell us your license type, tier and timeline, and we'll tell you what's open." },
  { title: 'Tour the park', text: "See the plots in person and meet the tenants you'd be growing beside." },
  { title: 'Transfer your license', text: 'Our staff help you acquire a new license or move an existing one to Sungrown Farms.' },
  { title: 'Move in', text: 'Fencing, water and power are already in place, so you can start on day one.' },
];

const Process = () => (
  <Section id="process" className="band g">
    <div className="head">
      <div>
        <p className="eyebrow">Our partnership</p>
        <h2 className="h2">From first call to first crop</h2>
      </div>
      <p className="lead">Regulations and compliance can be frustrating. We&apos;re available around the clock to make your move into the park as smooth as possible.</p>
    </div>
    <Steps>
      {STEPS.map(({ title, text }, i) => (
        <li key={title}>
          <span>{`STEP ${i + 1}`}</span>
          <h3>{title}</h3>
          <p>{text}</p>
        </li>
      ))}
    </Steps>
  </Section>
);

export default Process;

const Section = styled.section`
  background: var(--deep);
  color: var(--cream);

  .eyebrow {
    color: var(--sun);
  }
  .lead {
    color: var(--soft);
  }
`;

const Steps = styled.ol`
  list-style: none;
  padding: 0;
  margin: 56px 0 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;

  li {
    border-top: 2px solid rgba(242, 243, 236, 0.18);
    padding-top: 22px;
    position: relative;
  }
  li::before {
    content: '';
    position: absolute;
    top: -2px;
    left: 0;
    width: 48px;
    height: 2px;
    background: var(--sun);
  }
  span {
    font: 600 13px/1 var(--display);
    color: var(--sun);
    letter-spacing: 0.08em;
  }
  h3 {
    font-weight: 700;
    font-size: 24px;
    margin-top: 18px;
  }
  p {
    font-size: 16px;
    color: var(--soft);
    margin-top: 10px;
  }

  ${MEDIA_QUERY.SMALL_LAPTOPS} {
    grid-template-columns: 1fr 1fr;
    row-gap: 36px;
  }
  ${MEDIA_QUERY.PHONE} {
    grid-template-columns: 1fr;
  }
`;
