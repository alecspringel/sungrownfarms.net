import React from 'react';
import Button from '../components/Button';
import PhoneSVG from '../images/phone.svg';
import EmailSVG from '../images/email.svg';

const ContactAndLocation = () => (
  <section className="max-width m-auto text-center" style={{ paddingBottom: 40 }}>
    <h2>Contact and Location</h2>
    <p style={{ maxWidth: 1000 }} className="m-t20 m-b20 m-auto">
      Sungrown Farms is located just south of lorem ipsum. Have questions about starting
      a lease with us? Reach out by phone or email.
    </p>
    <div className="flex-row jstfy-c">
      <div style={{ width: '50%' }} className="m-r8 text-right">
        <Button outline className="align-c" style={{ display: 'inline-flex' }}>
          <img src={PhoneSVG} alt="phone icon" className="m-r8" />
          702-290-0858
        </Button>
      </div>
      <div style={{ width: '50%' }} className="m-l8 text-left">
        <Button outline className="align-c" style={{ display: 'inline-flex' }}>
          <img src={EmailSVG} alt="email icon" className="m-r12" />
          hello@sungrown.net
        </Button>
      </div>
    </div>
    <div className="text-center">
      <p style={{ maxWidth: 800, fontSize: 14, color: '#8a867f' }} className="m-t20 m-auto">
        Security is our highest priority at Sungrown Farms. The precise location of our park
        is hidden to protect our tenants and their businesses. Please
        reach out to us to schedule a tour or learn more about our location.
      </p>
    </div>
  </section>
);

export default ContactAndLocation;
