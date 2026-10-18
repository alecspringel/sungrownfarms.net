import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Button from '../components/Button';
import { CONTACT, MEDIA_QUERY } from '../constants';
import DroneVideo from '../images/drone-video-optimized.mp4';

const STATS = [
  { label: 'Total property', value: '250,000+ ft²' },
  { label: 'Locations', value: '3' },
  { label: 'Private wells', value: '3' },
  { label: 'Gated development', value: '5+ acres' },
];

const Hero = () => {
  const video = useRef(null);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      video.current.pause();
      setPlaying(false);
    }
  }, []);

  const toggleVideo = () => {
    if (video.current.paused) {
      video.current.play().catch(() => {});
      setPlaying(true);
    } else {
      video.current.pause();
      setPlaying(false);
    }
  };

  return (
    <Section id="top">
      <Grid className="g">
        <Copy>
          <Title>
            Lease-ready land for
            {' '}
            <span>Washington cannabis.</span>
          </Title>
          <Lede>
            A gated business park in Mason County with water, three-phase power and
            industrial zoning in place. Bring your license, or we&apos;ll help you get one.
          </Lede>
          <Ctas>
            <Button href="/#contact">Check availability</Button>
            <Button href="/#park" $variant="line">Tour the park</Button>
          </Ctas>
        </Copy>
        <Media>
          <video
            ref={video}
            src={DroneVideo}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-label="Drone flyover of the Sungrown Farms park"
          />
          <VideoToggle type="button" onClick={toggleVideo}>
            {playing ? 'Pause' : 'Play'}
          </VideoToggle>
          <LiveCard>
            <Dot />
            <div>
              <b>Now leasing in Mason County</b>
              <span>{`Call ${CONTACT.PHONE}`}</span>
            </div>
          </LiveCard>
        </Media>
      </Grid>
      <Stats className="g">
        {STATS.map(({ label, value }) => (
          <div key={label}>
            <dt>{label}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </Stats>
    </Section>
  );
};

export default Hero;

const pulse = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(63, 163, 77, 0.45); }
  70% { box-shadow: 0 0 0 9px rgba(63, 163, 77, 0); }
  100% { box-shadow: 0 0 0 0 rgba(63, 163, 77, 0); }
`;

const Section = styled.section`
  background: var(--forest);
  color: var(--cream);
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.12fr);
  min-height: clamp(560px, calc(86vh - var(--nav-h)), 820px);
  && {
    padding-right: 0;
  }

  ${MEDIA_QUERY.SMALL_LAPTOPS} {
    grid-template-columns: 1fr;
    min-height: 0;
    && {
      padding-right: var(--gut);
    }
  }
`;

const Copy = styled.div`
  padding-top: clamp(48px, 6vw, 96px);
  padding-bottom: clamp(48px, 6vw, 96px);
  padding-right: clamp(24px, 4vw, 64px);
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${MEDIA_QUERY.SMALL_LAPTOPS} {
    padding-right: 0;
  }
`;

const Title = styled.h1`
  font-weight: 800;
  font-size: clamp(44px, 5.6vw, 84px);
  line-height: 0.98;
  letter-spacing: -0.03em;

  span {
    color: var(--sun);
  }
`;

const Lede = styled.p`
  font-size: clamp(17px, 1.4vw, 20px);
  line-height: 1.55;
  color: var(--soft);
  max-width: 46ch;
  margin-top: 22px;
`;

const Ctas = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 34px;
`;

const Media = styled.div`
  position: relative;
  background: var(--deep);
  overflow: hidden;

  video {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, rgba(23, 51, 38, 0.35) 0%, rgba(23, 51, 38, 0) 22%);
    pointer-events: none;
  }

  ${MEDIA_QUERY.SMALL_LAPTOPS} {
    min-height: 360px;
    margin-left: calc(-1 * var(--gut));
    margin-right: calc(-1 * var(--gut));
  }
`;

const VideoToggle = styled.button`
  position: absolute;
  z-index: 1;
  right: 20px;
  top: 20px;
  font: 600 13px/1 var(--display);
  color: var(--cream);
  background: rgba(15, 36, 26, 0.55);
  backdrop-filter: blur(6px);
  border: 1px solid rgba(242, 243, 236, 0.3);
  border-radius: 99px;
  padding: 9px 13px;
  cursor: pointer;
`;

const LiveCard = styled.div`
  position: absolute;
  z-index: 1;
  left: 24px;
  bottom: 24px;
  max-width: calc(100% - 48px);
  background: #F2F3EC;
  color: #1D2B22;
  border-radius: 10px;
  padding: 16px 20px;
  display: flex;
  gap: 14px;
  align-items: center;
  box-shadow: 0 14px 36px rgba(0, 0, 0, 0.28);

  b {
    font: 700 15px/1.2 var(--display);
    display: block;
  }
  span {
    font: 400 14px/1.3 var(--display);
    color: #5D6B61;
    font-variant-numeric: tabular-nums;
  }

  ${MEDIA_QUERY.PHONE} {
    left: 16px;
    bottom: 16px;
    max-width: calc(100% - 32px);
  }
`;

const Dot = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #3FA34D;
  flex: none;
  animation: ${pulse} 2.4s infinite;
`;

const Stats = styled.dl`
  background: var(--deep);
  color: var(--cream);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding-top: 28px;
  padding-bottom: 28px;

  & > div {
    display: flex;
    flex-direction: column-reverse;
    gap: 6px;
  }
  dd {
    font: 800 clamp(26px, 2.6vw, 36px)/1 var(--display);
    letter-spacing: -0.02em;
    font-variant-numeric: tabular-nums;
  }
  dt {
    font: 400 14px/1.3 var(--display);
    color: var(--soft);
  }

  ${MEDIA_QUERY.PHONE} {
    grid-template-columns: 1fr 1fr;
  }
`;
