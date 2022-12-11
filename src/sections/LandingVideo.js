import React from 'react';
import styled from 'styled-components';
import { MEDIA_QUERY } from '../constants';
import DroneVideo from '../images/drone-video-optimized.mp4';
import LocationSVG from '../images/landing-location.svg';

const LandingVideo = () => (
  <VideoContainer>
    <Video playsInline autoPlay loop muted>
      <source src={DroneVideo} type="video/mp4" />
      {/* <source src="movie.ogg" type="video/ogg" /> */}
      Your browser does not support the video tag.
    </Video>
    <TextWrapper className="flex-col jstfy-e">
      <TextContainer className="max-width m-auto">
        <FloatingContent>
          <h1 className="text-regular">Cannabis Land Leases and Licensing</h1>
          <img src={LocationSVG} className="m-t20 m-b20" alt="location icon titled: Olympia, Washington" style={{ maxWidth: '100%', opacity: 0.85 }} />
          <p className="text-regular" style={{ maxWidth: 500 }}>
            Sungrown Farms offers turnkey leases for cannabis growers and processors in
            Mason County, Washington. Our cannabis business park offers a space where
            like-minded businesses can grow together.
          </p>
        </FloatingContent>
      </TextContainer>
    </TextWrapper>
  </VideoContainer>
);

export default LandingVideo;

const FloatingContent = styled.div`
  margin-bottom: 180px;
  margin-left: 120px;
`;

const VideoContainer = styled.section`
  height: 100vh;
  max-height: 1440px;
  min-height: 588px;
  width: 100%;
  position: relative;
  &:before {
    height: 100%;
    background: linear-gradient(0deg, #000000b5 0%, #000000a3 90%, #4C4C4C 100%);
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  ${MEDIA_QUERY.TABLET} {
    & ${FloatingContent} {
      margin: 0;
      padding: var(--max-width-padding);
      padding-bottom: 60px;
    }
  }
`;

const Video = styled.video`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const TextWrapper = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const TextContainer = styled.div`
  max-width: 1440px;
  width: 100%;
  color: #fff;
  font-weight: 400;
`;
