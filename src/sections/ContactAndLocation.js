import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import PhoneSVG from '../images/phone.svg';
import EmailSVG from '../images/email.svg';
import { MEDIA_QUERY } from '../constants';
import LocationSVG from '../images/location-marker.svg';

const ContactAndLocation = () => (
  <section id="contact" className="max-width m-auto text-center mw-padding" style={{ paddingTop: 100, paddingBottom: 60 }}>
    <img src={LocationSVG} alt="location marker icon" style={{ height: 36, marginBottom: 10 }} />
    <h3>Contact and Location</h3>
    <p style={{ maxWidth: 1000 }} className="m-t20 m-b20 m-auto">
      Sungrown Farms is located within a gated development in north Shelton, Washington.
      Have questions about starting a lease with us? Reach out by phone or email.
    </p>
    <ButtonRow className="flex-row jstfy-c p-t16">
      <ButtonWrapper className="m-r8 text-right">
        <Button outline className="align-c jstfy-c" style={{ display: 'inline-flex', width: 258 }}>
          <img src={PhoneSVG} alt="phone icon" className="m-r8" />
          702-290-0858
        </Button>
      </ButtonWrapper>
      <ButtonWrapper className="m-l8 text-left">
        <Button outline className="align-c jstfy-c" style={{ display: 'inline-flex', width: 258 }}>
          <img src={EmailSVG} alt="email icon" className="m-r12" />
          hello@sungrown.net
        </Button>
      </ButtonWrapper>
    </ButtonRow>
  </section>
);
export default ContactAndLocation;
const ButtonRow = styled.div`
  ${MEDIA_QUERY.PHONE} {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`;
const ButtonWrapper = styled.div`
  width: 50%;
  ${MEDIA_QUERY.PHONE} {
    width: auto;
    margin: 0;
  }
`;
