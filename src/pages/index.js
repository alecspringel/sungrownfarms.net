import React from 'react';
import Navigation from '../sections/Navigation';
import SEO from '../sections/seo';
import LandingVideo from '../sections/LandingVideo';
import '../index.css';
import '../fonts.css';
import LandLeasesForYourBusiness from '../sections/LandLeasesForYourBusiness';
import TurnkeyLeases from '../sections/TurnkeyLeases';
import OurPartnershipWithFarms from '../sections/OurPartnershipWithFarms';
import FAQ from '../sections/FAQ';
import ContactAndLocation from '../sections/ContactAndLocation';

export default function Home() {
  return (
    <>
      <SEO />
      <Navigation />
      <LandingVideo />
      <LandLeasesForYourBusiness />
      <TurnkeyLeases />
      <OurPartnershipWithFarms />
      <FAQ />
      <ContactAndLocation />
    </>
  );
}
