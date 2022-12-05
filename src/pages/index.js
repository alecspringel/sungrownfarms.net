import React from 'react';
import Navigation from '../components/Navigation';
import SEO from '../components/seo';
import '../components/index.css';

export default function Home() {
  return (
    <>
      <SEO />
      <Navigation />
      <p>Hello World</p>
    </>
  );
}
