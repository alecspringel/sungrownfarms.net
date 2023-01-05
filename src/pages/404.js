import React from 'react';
import Button from '../components/Button';
import SungrownFarmsLogo from '../images/sungrown-logo-gray.svg';

const Page404 = () => (
  <div className="text-center section-p-t mw-padding">
    <img alt="sungrown farms logo" src={SungrownFarmsLogo} style={{ maxWidth: '100%' }} />
    <p className="m-b20 m-t16">Uh oh! The page you&apos;re looking for doesn&apos;t exist.</p>
    <Button to="/" style={{ marginTop: 40 }}>Back to Home</Button>
  </div>
);

export default Page404;
