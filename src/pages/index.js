import React from 'react';
import Navigation from '../sections/Navigation';
import SEO from '../sections/seo';
import Hero from '../sections/Hero';
import ThePark from '../sections/ThePark';
import Infrastructure from '../sections/Infrastructure';
import OurTenants from '../sections/OurTenants';
import Process from '../sections/Process';
import FAQ from '../sections/FAQ';
import Location from '../sections/Location';
import Contact from '../sections/Contact';
import Footer from '../sections/Footer';
import '../index.css';
import '../fonts.css';

export default function Home() {
  return (
    <>
      <SEO />
      <Navigation />
      <main>
        <Hero />
        <ThePark />
        <Infrastructure />
        <OurTenants />
        <Process />
        <FAQ />
        <Location />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
