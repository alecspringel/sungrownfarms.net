import React from 'react';
import styled from 'styled-components';
import { MEDIA_QUERY } from '../constants';
import PlantsJPG from '../images/wide-plants.jpg';
import ScaleJPG from '../images/wide-scale.jpg';

const OurTenants = () => (
  <section style={{ background: '#F2EFEB', padding: '60px 0 30px 0' }}>
    <div className="max-width m-auto">
      <div className="mw-padding">
        <TitleDecoration className="m-b20">Our Tenants</TitleDecoration>
        <TextDiv className="flex-row m-b20" style={{ justifyContent: 'space-between', marginBottom: 40 }}>
          <TextWrapper>
            <p>
              Sungrown Farms offers leases for any cannabis related business.
              Our tenants have developed a community here, offering a continuous
              network of support to new tenants and one another.
            </p>
          </TextWrapper>
          <FactsDiv>
            <FactWrapper>
              <FactNumber>
                250,000 ft
                <sup>2</sup>
              </FactNumber>
              <p>Total Property Size</p>
            </FactWrapper>
            <FactWrapper>
              <FactNumber>
                15
                <sup />
              </FactNumber>
              <p>Tenants</p>
            </FactWrapper>
          </FactsDiv>
        </TextDiv>
      </div>
      <ImageWrapper>
        <ImageDiv img={PlantsJPG}>
          <h4 className="m-b20">Producers, Growers & Cultivators</h4>
          <p>
            Sungrown Farms provides leases for cannabis growers, producers, and cultivators,
            with ample land available for your license requirements. We are currently home to
            multiple tier 3 grows and a collection of tier 1 & 2 grows as well. All of our leases
            are ready on day one with fencing, water, and power supplied.

          </p>
        </ImageDiv>
        <ImageDiv img={ScaleJPG}>
          <h4 className="m-b20">Processing</h4>
          <p>
            Here at the park, we have tenants who process flower into oil and a variety of other
            products. We support both producer and processor licenses here, and are always available
            to discuss your needs if you would like to process cannabis products.

          </p>
        </ImageDiv>
      </ImageWrapper>
    </div>
  </section>
);

export default OurTenants;

const TextDiv = styled.div`
  ${MEDIA_QUERY.TABLET} {
    flex-direction: column;
  }
`;

const FactsDiv = styled.div`
  display: flex;
  flex: 3;
  white-space: nowrap;
  gap: 40px;
  ${MEDIA_QUERY.TABLET} {
    margin-top: 20px;
  }
`;

const TextWrapper = styled.div`
  padding-right: 60px;
  flex: 4;
`;

const FactWrapper = styled.div`
  flex: 1;
`;

const TitleDecoration = styled.h3`
  border-left: 9px solid var(--primary);
  padding-left: 16px;
`;

const FactNumber = styled.p`
  color: var(--primary);
  font-weight: 600;
  font-size: 28px;
`;

const ImageDiv = styled.div`
  min-height: 256px;
  color: #F2EFEB;
  border-radius: 2px;
  padding: 60px;
  padding-right: 30%;
  background: linear-gradient(90deg, rgba(0, 0, 0, 0.85) 21.92%, rgba(0, 0, 0, 0.65) 70.63%, rgba(0, 0, 0, 0) 103.25%), url(${(props) => props.img});
  background-size: cover;
  p {
    font-size: 17px;
  }
  ${MEDIA_QUERY.TABLET} {
    padding: 40px;
  }
  ${MEDIA_QUERY.PHONE} {
    width: 100%;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0 30px;
  ${MEDIA_QUERY.PHONE} {
    padding: 0px;
  }
`;
