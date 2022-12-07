import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import WaterTowerJPG from '../images/water-tower.jpg';
import MountainsJPG from '../images/mountains.jpg';
import IndoorFarmJPG from '../images/indoor-farm.jpg';
import SungrownLotJPG from '../images/sungrown-lot.jpg';

const TurnkeyLeases = () => (
  <section className="max-width m-auto text-center" style={{ paddingBottom: 200 }}>
    <h2>Turnkey Leases for Cannabis</h2>
    <p style={{ maxWidth: 1000 }} className="m-t20 m-b20 m-auto">
      Our park offers uparalleled, turnkey leases with clean water, power,
      security and more. Sungrown Farms offers a convenient location along I-5,
      and is industrially zoned.
    </p>
    <Button outline to="/#" style={{ marginBottom: 40 }}>
      FAQ
    </Button>
    <Grid className="text-left">
      <ImageWithText img={WaterTowerJPG}>
        <div style={{ marginTop: 'auto', padding: 40 }}>
          <h4>Clean Water</h4>
          <p>
            Sungrown Farms is home to the largest aquifer in Mason county.
            The park provides 3 private wells with 0.003 ppm, 6.5 pH water.
          </p>
        </div>
      </ImageWithText>
      <ImageWithText img={IndoorFarmJPG}>
        <div style={{ marginTop: 'auto', padding: 40 }}>
          <h4> Consistent Power</h4>
          <p>
            Our park is on the same power grid as Shelton Airport and Washington
            State Patrol Academy, meaning power outages are rare. All of our proprty
            is connected to 3-phase power.
          </p>
        </div>
      </ImageWithText>
      <ImageWithText img={MountainsJPG}>
        <div style={{ marginTop: 'auto', padding: 40 }}>
          <h4>Convenient & Securely Located</h4>
          <p>
            We are a short drive from I-5 and South Puget Sound businesses,
            located within a gated property. We work with all of our tenants to provide security.
          </p>
        </div>
      </ImageWithText>
      <ImageWithText img={SungrownLotJPG}>
        <div style={{ marginTop: 'auto', padding: 40 }}>
          <h4>Industrially Zoned</h4>
          <p>
            One of the greatest benefits of being at Sungrown Farms is our industrial zoning.
            Industrial zoning allows tenants to use the property with less red tape and fewer
            county restrictions.
          </p>
        </div>
      </ImageWithText>
    </Grid>
  </section>
);

export default TurnkeyLeases;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-row: auto auto;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  color: #fff;
`;

const ImageWithText = styled.div`
  height: 300px;
  background: linear-gradient(179.42deg, rgba(0, 0, 0, 0) 0.5%, rgba(0, 0, 0, 0.72) 36.17%), url(${(props) => props.img});
  background-size: cover;
  display: flex;
  align-content: flex-end;

  p {
    font-size: 18px;
    margin-top: 20px;
  }
`;
