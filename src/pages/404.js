import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import Navigation from '../sections/Navigation';
import Footer from '../sections/Footer';
import SEO from '../sections/seo';
import '../index.css';
import '../fonts.css';

const Page404 = () => (
  <>
    <SEO title="Page not found | Sungrown Farms" />
    <Navigation />
    <Main className="band g">
      <p className="eyebrow">404</p>
      <h1 className="h2">We couldn&apos;t find that page.</h1>
      <p className="lead">The link may be old, or the page may have moved.</p>
      <Button to="/" $variant="dark">Back to home</Button>
    </Main>
    <Footer />
  </>
);

export default Page404;

const Main = styled.main`
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`;
