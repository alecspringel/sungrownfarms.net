import React from 'react';

const LandingVideo = () => (
  <video width="100%" height="240" autoPlay loop muted>
    <source src="movie.mp4" type="video/mp4" />
    <source src="movie.ogg" type="video/ogg" />
    Your browser does not support the video tag.
  </video>
);

export default LandingVideo;
