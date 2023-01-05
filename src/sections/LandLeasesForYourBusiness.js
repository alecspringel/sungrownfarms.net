import React from 'react';
import styled from 'styled-components';
import SungrownJPG from '../images/sungrown-drone.jpg';
import CannabisJPG from '../images/cannabis-stalks.jpg';
import Button from '../components/Button';
import { MEDIA_QUERY } from '../constants';

const LandLeasesForYourBusiness = () => (
  <Section className="max-width mw-padding m-auto flex-row align-c section-p-t">
    <SplitContent>
      <TitleDecoration>Land Leases for Your Business</TitleDecoration>
      <p className="m-t20 m-b20">
        Sungrown Farms is a premier cannabis business park located in cannabis friendly Mason
        County Washington. The park offers leases and services catered towards cannabis, a
        great location, clean water, consistent power, and a secure community. The park is
        home to multiple grows and sits on more than 5 acres within a gated development.
        At Sungrown Farms, we are here to help each of our tenants. We have full time staff
        available to help acquire and transfer licenses to our park and assist with getting
        you off on the right foot.
      </p>
      {/* <Button to="/licenses" className="m-t4">View Available Licenses</Button> */}
      <Button to="/#contact" className="m-t4">Contact us for Availability</Button>
    </SplitContent>
    <SplitContent>
      <Image src={SungrownJPG} alt="drone view of Sungrown Farms" />
      <RoundedPhoto src={CannabisJPG} alt="cannabis plants" />
    </SplitContent>
  </Section>
);

export default LandLeasesForYourBusiness;

const SplitContent = styled.div`
  width: 50%;
  padding: 0 16px;
  position: relative;
`;

const Image = styled.img`
  height: 100%;
`;

const RoundedPhoto = styled.img`
  position: absolute;
  height: 172px;
  bottom: -46px;
  left: -46px;
  border-radius: 16px;
`;

const Section = styled.section`
  overflow: hidden;
  padding-bottom: 100px;

  & ${SplitContent}:nth-child(2) {
    margin-left: 50px;
  }

  ${MEDIA_QUERY.SMALL_LAPTOPS} {
    align-items: stretch;
    & ${Image} {
      object-fit: cover;
      width: 100%;
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
    }
    & ${SplitContent}:nth-child(2) {
      margin-left: 0;
    }
    & ${Image} {
      width: 100%;
    }
  }

  ${MEDIA_QUERY.PHONE} {
    ${RoundedPhoto} {
      height: 100px;
      bottom: -37px;
      left: -20px;
    }
  }
`;

const TitleDecoration = styled.h3`
  border-left: 9px solid var(--primary);
  padding-left: 16px;
`;
