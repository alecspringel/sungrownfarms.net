import React from 'react';
import Navigation from '../components/Navigation';
import SEO from '../components/seo';
import LandingVideo from '../components/LandingVideo';
import '../index.css';
import '../fonts.css';

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
