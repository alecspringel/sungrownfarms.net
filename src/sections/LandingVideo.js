import React from 'react';
import styled from 'styled-components';
import DroneVideo from '../images/drone-video.mp4';
import LocationSVG from '../images/landing-location.svg';

const LandingVideo = () => (
  <VideoContainer>
    <Video autoPlay loop muted>
      <source src={DroneVideo} type="video/mp4" />
      {/* <source src="movie.ogg" type="video/ogg" /> */}
      Your browser does not support the video tag.
    </Video>
    <TextWrapper className="flex-col jstfy-e">
      <TextContainer className="max-width m-auto">
        <FloatingContent>
          <h1 className="text-regular">Cannabis Land Leases and Licensing</h1>
          <img src={LocationSVG} className="m-t20 m-b20" alt="location icon titled: Olympia, Washington" />
          <h5 className="text-regular" style={{ maxWidth: 500 }}>
            Sungrown Farms offers turnkey leases for cannabis growers and processors in
            Mason County, Washington. Our cannabis business park offers a space where
            like-minded businesses can grow together.
          </h5>
        </FloatingContent>
      </TextContainer>
    </TextWrapper>
  </VideoContainer>
);

export default LandingVideo;

const VideoContainer = styled.section`
  height: 100vh;
  max-height: 1440px;
  width: 100%;
  position: relative;
  &:before {
    height: 100%;
    background: linear-gradient(180deg,rgba(0,0,0,0.76) 0%,rgba(0,0,0,0.53) 71.87%,rgba(0,0,0,0.22) 100%);
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
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

const FloatingContent = styled.div`
  margin-bottom: 180px;
  margin-left: 120px;
`;