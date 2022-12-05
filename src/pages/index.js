import React from 'react';
import Navigation from '../components/Navigation';
import SEO from '../components/seo';
import '../components/index.css';
import LandingVideo from '../components/LandingVideo';

export default function Home() {
  return (
    <>
      <SEO />
      <Navigation />
      <LandingVideo />
      <p>Hello World</p>
    </>
  );
}
