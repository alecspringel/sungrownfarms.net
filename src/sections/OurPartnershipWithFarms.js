import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import { MEDIA_QUERY } from '../constants';
import HandlingPlantsJPG from '../images/handling-plants.jpg';
import LeafPNG from '../images/leaf.png';

const OurPartnershipWithFarms = () => (
  <Section className="max-width m-auto flex-row align-c mw-padding">
    <SplitContent>
      <h3>Our Partnership with Farms</h3>
      <p className="m-t20 m-b20">
        Our park offers a space where like-minded cannabis businesses can help one another grow.
        Sungrown Farms offers help getting your business moved into the park and offers assistance
        finding any resources you need to succeed. We understand regulations and compliance in the
        industry can be frustrating. We are available around the clock to help make your move
        seamless. Our team is available to help sell licenses, and get new or existing licenses
        transferred to Sungrown Farms.
      </p>
      <Button to="/#contact" className="m-t4">Contact us for Availability</Button>
    </SplitContent>
    <SplitContent>
      <Image src={HandlingPlantsJPG} alt="person handling cannabis plants" />
      <RoundedPhoto>
        <LeafImage src={LeafPNG} alt="cannabis leaf" />
      </RoundedPhoto>
    </SplitContent>
  </Section>
);

export default OurPartnershipWithFarms;

const SplitContent = styled.div`
  width: 50%;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
`;

const LeafImage = styled.img`
 height: 109px;
`;

const Section = styled.section`
  overflow: hidden;
  padding-bottom: 100px;

  & ${SplitContent}:nth-child(1) {
    margin-right: 32px;
  }

  ${MEDIA_QUERY.SMALL_LAPTOPS} {
    align-items: stretch;
    & ${Image} {
      object-fit: cover;
      object-position: left;
      width: 100%;
      height: 100%;
    }
  }

  ${MEDIA_QUERY.TABLET} {
    flex-direction: column-reverse;

    & ${SplitContent} {
      width: 100%;
      margin-left: 0;
      padding: 0;
    }
    & ${SplitContent}:nth-child(1) {
      margin-top: 80px;
      margin-left: 0;
    }
    & ${Image} {
      width: 100%;
    }
    & ${LeafImage} {
      height: 83px;
      margin-left: 32px;
      margin-bottom: 31px;
    }
  }
`;

const RoundedPhoto = styled.div`
  position: absolute;
  background: #fff;
  height: 132px;
  width: 132px;
  bottom: -62px;
  left: -62px;
  border-radius: 1000px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
