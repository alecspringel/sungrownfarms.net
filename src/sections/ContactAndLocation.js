import React from 'react';
import styled from 'styled-components';
import PhoneSVG from '../images/phone.svg';
import EmailSVG from '../images/email.svg';
import { MEDIA_QUERY } from '../constants';

const ContactAndLocation = () => (
  <Section id="contact" className="max-width m-auto text-center mw-padding" style={{ paddingTop: 100 }}>
    <h3>Contact and Location</h3>
    <p style={{ maxWidth: 1000 }} className="m-t20 m-b20 m-auto">
      Sungrown Farms is located just south of lorem ipsum. Have questions about starting
      a lease with us? Reach out by phone or email.
    </p>
    <ButtonRow className="flex-row jstfy-c">
      <ButtonWrapper href="tel:702-290-0858" className="m-r8 text-right flex-col jstfy-c">
        <ContactIcon src={PhoneSVG} alt="phone icon" className="m-r8" />
        <h6 className="text-bold">Call Us</h6>
        <p>+1 702 290-0858</p>
      </ButtonWrapper>
      <ButtonWrapper href="mailto:help@sungrownfarms.net" className="m-l8 text-left flex-col jstfy-c">
        <ContactIcon src={EmailSVG} alt="email icon" className="m-r12" />
        <h6 className="text-bold">Send an Email</h6>
        <p>hello@sungrown.net</p>
      </ButtonWrapper>
    </ButtonRow>
  </Section>
);

export default ContactAndLocation;

const ButtonRow = styled.div`
  margin: 40px 0;
  ${MEDIA_QUERY.PHONE} {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`;

const ButtonWrapper = styled.a`
  flex: 1;
  background: #FFFFFF;
  border: 2px solid rgba(74, 69, 61, 0.3);
  border-radius: 6px;
  text-align: center;
  gap: 15px;
  padding: 30px;
  h6 { 
    color: var(--text-color);
  }
  ${MEDIA_QUERY.PHONE} {
    width: 100%;
    margin: 0;
  }
`;

const Section = styled.section`
  max-width: 1080px;
  margin-bottom: 40px;
`;

const ContactIcon = styled.img`
  height: 45px;
`;
