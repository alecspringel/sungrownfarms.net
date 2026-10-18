import React from 'react';
import styled from 'styled-components';
import { MEDIA_QUERY } from '../constants';
import WaterTowerJPG from '../images/water-tower.jpg';
import IndoorFarmJPG from '../images/indoor-farm.jpg';
import MountainsJPG from '../images/mountains.jpg';
import SungrownLotJPG from '../images/sungrown-lot.jpg';

const FEATURES = [
  {
    img: WaterTowerJPG,
    figure: '0.003',
    unit: 'ppm · pH 6.5',
    title: 'Clean water',
    text: 'Three private wells draw from the largest aquifer in Mason County.',
  },
  {
    img: IndoorFarmJPG,
    figure: '3‑phase',
    unit: 'power',
    title: 'Consistent power',
    text: 'We share a grid with Shelton Airport and the Washington State Patrol Academy, so outages are rare. Every part of the property has three-phase service.',
  },
  {
    img: MountainsJPG,
    figure: 'Gated',
    unit: '& monitored',
    title: 'Securely located',
    text: 'A short drive from I‑5 and South Puget Sound businesses, inside a gated property. We plan security with every tenant.',
  },
  {
    img: SungrownLotJPG,
    figure: 'Industrial',
    unit: 'zoning',
    title: 'Less red tape',
    text: 'Industrial zoning means fewer county restrictions and faster facility setup than commercial land.',
  },
];

const Infrastructure = () => (
  <Section id="infrastructure" className="band g">
    <div className="head">
      <div>
        <p className="eyebrow">Turnkey infrastructure</p>
        <h2 className="h2">Everything a grow depends on, already in the ground.</h2>
      </div>
      <p className="lead">No drilling wells, trenching power or fighting for permits. It&apos;s handled before you sign.</p>
    </div>
    <Grid>
      {FEATURES.map(({
        img, figure, unit, title, text,
      }) => (
        <Card key={title}>
          <img src={img} alt="" loading="lazy" />
          <Figure>
            {figure}
            <small>{unit}</small>
          </Figure>
          <h3>{title}</h3>
          <p>{text}</p>
        </Card>
      ))}
    </Grid>
  </Section>
);

export default Infrastructure;

const Section = styled.section`
  background: var(--card);
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-top: 48px;

  ${MEDIA_QUERY.PHONE} {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.article`
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  min-height: 340px;
  color: #F2F3EC;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 32px;
  isolation: isolate;

  img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -2;
    transition: transform 0.6s ease;
  }
  &:hover img {
    transform: scale(1.03);
  }
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: -1;
    background: linear-gradient(180deg, rgba(15, 36, 26, 0.05) 0%, rgba(15, 36, 26, 0.55) 45%, rgba(15, 36, 26, 0.94) 100%);
  }
  h3 {
    font-weight: 700;
    font-size: 24px;
    margin-top: 14px;
  }
  p {
    font-size: 16px;
    line-height: 1.55;
    color: #D3DCD5;
    margin-top: 8px;
    max-width: 48ch;
  }

  ${MEDIA_QUERY.PHONE} {
    min-height: 300px;
    padding: 24px;
  }
`;

const Figure = styled.div`
  font: 800 44px/1 var(--display);
  letter-spacing: -0.02em;
  color: var(--sun);
  font-variant-numeric: tabular-nums;

  small {
    font: 500 16px var(--display);
    margin-left: 6px;
    color: #F2F3EC;
    letter-spacing: 0;
  }
`;
