import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import { MEDIA_QUERY } from '../constants';
import SungrownDroneJPG from '../images/sungrown-drone.jpg';
import CannabisJPG from '../images/cannabis-stalks.jpg';

const INCLUDED = [
  'Fenced plots, ready day one',
  'Clean water and 3‑phase power',
  'Industrial zoning',
  'Help with license transfers',
  'Gated, with cameras and staff',
  'Flexible lease terms',
];

const Check = () => (
  <svg viewBox="0 0 20 20" aria-hidden="true">
    <circle cx="10" cy="10" r="10" fill="#3E7A47" />
    <path d="M5.5 10.2l3 3 6-6.4" fill="none" stroke="#F2F3EC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ThePark = () => (
  <section id="park" className="band g">
    <Grid>
      <div>
        <p className="eyebrow">The park</p>
        <h2 className="h2">A cannabis business park built for the people who lease it.</h2>
        <p className="lead" style={{ marginTop: 20 }}>
          Sungrown Farms sits on more than five acres inside a gated development in
          cannabis-friendly Mason County. It&apos;s home to several grows already, and our
          full-time staff help every new tenant acquire or transfer a license and get off on
          the right foot.
        </p>
        <Included>
          {INCLUDED.map((item) => (
            <li key={item}>
              <Check />
              {item}
            </li>
          ))}
        </Included>
        <Button href="/#contact" $variant="dark">Contact us for availability</Button>
      </div>
      <Photos>
        <img className="main" src={SungrownDroneJPG} alt="Aerial view of Sungrown Farms with greenhouses, hoop houses and fenced plots" loading="lazy" />
        <img className="inset" src={CannabisJPG} alt="Close-up of cannabis plants" loading="lazy" />
        <figcaption>Sungrown Farms from above</figcaption>
      </Photos>
    </Grid>
  </section>
);

export default ThePark;

const Grid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: clamp(40px, 6vw, 96px);
  align-items: center;

  ${MEDIA_QUERY.SMALL_LAPTOPS} {
    grid-template-columns: 1fr;
  }
`;

const Included = styled.ul`
  list-style: none;
  padding: 0;
  margin: 32px 0 36px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px 24px;
  font: 500 16px/1.35 var(--display);

  li {
    display: flex;
    gap: 10px;
    align-items: flex-start;
  }
  svg {
    flex: none;
    width: 20px;
    height: 20px;
    margin-top: 1px;
  }

  ${MEDIA_QUERY.PHONE} {
    grid-template-columns: 1fr;
  }
`;

const Photos = styled.figure`
  position: relative;
  padding: 0 0 40px 40px;

  .main {
    width: 100%;
    aspect-ratio: 635 / 420;
    object-fit: cover;
    border-radius: 14px;
  }
  .inset {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 38%;
    aspect-ratio: 1;
    object-fit: cover;
    border-radius: 12px;
    border: 6px solid var(--paper);
  }
  figcaption {
    position: absolute;
    right: 16px;
    top: 16px;
    background: rgba(15, 36, 26, 0.75);
    color: #F2F3EC;
    font: 500 13px/1 var(--display);
    padding: 8px 12px;
    border-radius: 99px;
    backdrop-filter: blur(6px);
  }

  ${MEDIA_QUERY.PHONE} {
    padding: 0 0 28px 20px;
  }
`;
