import React from 'react';
import styled from 'styled-components';
import DroneVideo from '../images/drone-video.mp4';

const LandingVideo = () => (
  <VideoContainer>
    <Video autoPlay loop muted>
      <source src={DroneVideo} type="video/mp4" />
      {/* <source src="movie.ogg" type="video/ogg" /> */}
      Your browser does not support the video tag.
    </Video>
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
