import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import { MEDIA_QUERY } from '../constants';
import FloweringJPG from '../images/flowering.jpg';
import DryingPlantsJPG from '../images/drying-plants.jpg';

const TENANTS = [
  {
    img: FloweringJPG,
    alt: 'Flowering cannabis plant in a greenhouse',
    tag: 'Producers & cultivators',
    title: 'Room for any tier, from 1 to 3',
    text: "We're home to several tier 3 grows plus a collection of tier 1 and 2 operations, with land to meet your license requirements. Every lease comes fenced, with water and power supplied.",
    cta: 'Ask about grow plots',
  },
  {
    img: DryingPlantsJPG,
    alt: 'Worker hanging cannabis plants to dry',
    tag: 'Processors',
    title: 'Process flower into oil and more',
    text: "We support both producer and processor licenses. Tenants here already turn flower into oil and a range of other products, and we're glad to talk through your plans.",
    cta: 'Ask about processing space',
  },
];

const OurTenants = () => (
  <section id="tenants" className="band g">
    <div className="head">
      <div>
        <p className="eyebrow">Our tenants</p>
        <h2 className="h2">Who leases at Sungrown</h2>
      </div>
      <p className="lead">We lease to any cannabis-related business. Tenants here have built a real community and support each new arrival.</p>
    </div>
    <Cards>
      {TENANTS.map(({
        img, alt, tag, title, text, cta,
      }) => (
        <Card key={tag}>
          <img src={img} alt={alt} loading="lazy" />
          <div>
            <Tag>{tag}</Tag>
            <h3>{title}</h3>
            <p>{text}</p>
            <a className="arrow" href="/#contact">{`${cta} →`}</a>
          </div>
        </Card>
      ))}
    </Cards>
    <Community>
      <p>Already licensed somewhere else? We can help transfer your license to the park.</p>
      <Button href="/#contact">Talk to our team</Button>
    </Community>
  </section>
);

export default OurTenants;

const Cards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-top: 48px;

  ${MEDIA_QUERY.PHONE} {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.article`
  background: var(--card);
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  border: 1px solid var(--line);

  img {
    width: 100%;
    aspect-ratio: 16 / 9;
    object-fit: cover;
  }
  & > div {
    padding: 28px 30px 32px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    flex: 1;
  }
  h3 {
    font-weight: 800;
    font-size: 27px;
    line-height: 1.1;
    letter-spacing: -0.015em;
  }
  p {
    color: var(--mute);
  }
  .arrow {
    margin-top: auto;
    padding-top: 10px;
  }
`;

const Tag = styled.span`
  font: 600 12px/1 var(--display);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--leaf);
`;

const Community = styled.div`
  margin-top: 24px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 16px 32px;
  padding: 26px 30px;
  border-radius: 16px;
  background: var(--forest);
  color: var(--cream);

  p {
    font: 500 19px/1.4 var(--display);
    max-width: 60ch;
  }
`;
