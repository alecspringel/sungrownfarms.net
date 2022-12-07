import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import HandlingPlantsJPG from '../images/handling-plants.jpg';
import LeafPNG from '../images/leaf.png';

const OurPartnershipWithFarms = () => (
  <section className="max-width m-auto flex-row align-c" style={{ paddingBottom: 200 }}>
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
      <Button to="/#" className="m-t4">Contact us for Availability</Button>
    </SplitContent>
    <SplitContent style={{ marginLeft: 50 }}>
      <img src={HandlingPlantsJPG} alt="person handling cannabis plants" width="100%" />
      <RoundedPhoto>
        <img src={LeafPNG} alt="cannabis leaf" style={{ height: 109 }} />
      </RoundedPhoto>
    </SplitContent>
  </section>
);

export default OurPartnershipWithFarms;

const SplitContent = styled.div`
  width: 50%;
  padding: 0 16px;
  position: relative;
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
