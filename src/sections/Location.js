import React from 'react';
import styled from 'styled-components';
import { MEDIA_QUERY } from '../constants';

// OpenStreetMap tiles at zoom 11 (x 321-325, y 717-719), named t_<x>_<y>.png.
// The park (47.2406, -123.1361) sits at 50% / 41.9% of the stitched image.
const tileContext = require.context('../images/map', false, /\.png$/);
const TILE_ROWS = [717, 718, 719];
const TILE_COLS = [321, 322, 323, 324, 325];
const TILES = TILE_ROWS.flatMap((y) => TILE_COLS.map((x) => tileContext(`./t_${x}_${y}.png`)));

const FACTS = [
  { label: 'County', value: 'Mason County, WA' },
  { label: 'Nearest city', value: 'Shelton' },
  { label: 'Highway access', value: 'Short drive to I‑5' },
  { label: 'Power grid', value: 'Shared with Shelton Airport' },
];

const Location = () => (
  <Section id="location" className="band g">
    <Grid>
      <div>
        <p className="eyebrow">Location</p>
        <h2 className="h2">Mason County, a short drive from I‑5</h2>
        <p className="lead" style={{ marginTop: 20 }}>
          To protect our tenants, we share the park&apos;s exact address once you get in touch.
          The map shows the approximate area.
        </p>
        <Facts>
          {FACTS.map(({ label, value }) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </Facts>
      </div>
      <Map role="img" aria-label="Map of the Shelton area with the approximate location of Sungrown Farms circled">
        <Tiles aria-hidden="true">
          {TILES.map((src) => <img key={src} src={src} alt="" loading="lazy" />)}
        </Tiles>
        <Zone />
        <small>
          ©
          {' '}
          <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>
          {' '}
          contributors
        </small>
      </Map>
    </Grid>
  </Section>
);

export default Location;

const Section = styled.section`
  background: var(--card);
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.2fr);
  gap: clamp(32px, 5vw, 72px);
  align-items: center;

  ${MEDIA_QUERY.SMALL_LAPTOPS} {
    grid-template-columns: 1fr;
  }
`;

const Facts = styled.dl`
  margin-top: 28px;
  border-top: 1px solid var(--line);

  & > div {
    display: flex;
    justify-content: space-between;
    gap: 16px;
    padding: 14px 0;
    border-bottom: 1px solid var(--line);
    font: 500 16px/1.3 var(--display);
  }
  dt {
    color: var(--mute);
    font-weight: 400;
  }
  dd {
    text-align: right;
  }
`;

const Map = styled.figure`
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  aspect-ratio: 1280 / 768;
  background: #E4E8E0;

  small {
    position: absolute;
    right: 8px;
    bottom: 6px;
    font: 400 11px/1 var(--display);
    color: #3A3A3A;
    background: rgba(255, 255, 255, 0.8);
    padding: 3px 6px;
    border-radius: 4px;
  }
`;

const Tiles = styled.div`
  position: absolute;
  inset: 0;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  filter: grayscale(0.7) sepia(0.18) hue-rotate(40deg) saturate(1.1) contrast(0.95);

  img {
    width: 100%;
    height: 100%;
  }
`;

const Zone = styled.div`
  position: absolute;
  left: 50%;
  top: 41.9%;
  width: 26%;
  aspect-ratio: 1;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: rgba(62, 122, 71, 0.22);
  border: 2px solid #3E7A47;

  &::after {
    content: 'Sungrown Farms · approx. area';
    position: absolute;
    left: 50%;
    top: -14px;
    transform: translate(-50%, -100%);
    white-space: nowrap;
    background: #173326;
    color: #F2F3EC;
    font: 600 13px/1 var(--display);
    padding: 9px 12px;
    border-radius: 8px;
  }

  ${MEDIA_QUERY.PHONE} {
    &::after {
      font-size: 11px;
      padding: 7px 9px;
    }
  }
`;
