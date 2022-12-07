import React from 'react';
import styled from 'styled-components';
import SungrownJPG from '../images/sungrown-drone.jpg';
import CannabisJPG from '../images/cannabis-stalks.jpg';
import Button from '../components/Button';

const LandLeasesForYourBusiness = () => (
  <section className="max-width m-auto flex-row align-c" style={{ padding: '200px 0' }}>
    <SplitContent>
      <TitleDecoration>Land Leases for Your Business</TitleDecoration>
      <div style={{ marginLeft: 25 }}>
        <p className="m-t20 m-b20">
          Sungrown Farms is a premier cannabis business park located in cannabis friendly Mason
          County Washington. The park offers leases and services catered towards cannabis, a
          great location, clean water, consistent power, and a secure community. The park is
          home to multiple grows and sits on a X acre gated development. At Sungrown Farms,
          we are here to help each of our tenants. We have full time staff available to help
          acquire and transfer licenses to our park and assist with getting you off on the right
          foot.
        </p>
        <Button to="/#" className="m-t4">View Available Licenses</Button>
      </div>
    </SplitContent>
    <SplitContent style={{ marginLeft: 50 }}>
      <img src={SungrownJPG} alt="drone view of Sungrown Farms" width="100%" />
      <RoundedPhoto src={CannabisJPG} alt="cannabis plants" />
    </SplitContent>
  </section>
);

export default LandLeasesForYourBusiness;

const SplitContent = styled.div`
  width: 50%;
  padding: 0 16px;
  position: relative;
`;

const RoundedPhoto = styled.img`
  position: absolute;
  height: 172px;
  bottom: -46px;
  left: -46px;
  border-radius: 16px;
`;

const TitleDecoration = styled.h3`
  border-left: 9px solid var(--primary);
  padding-left: 16px;
`;
