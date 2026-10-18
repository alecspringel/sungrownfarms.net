import React from 'react';
import styled from 'styled-components';
import { MEDIA_QUERY } from '../constants';
import HandlingPlantsJPG from '../images/handling-plants.jpg';

const FREQUENTLY_ASKED_QUESTIONS = [
  {
    question: 'What lease durations do you offer?',
    answer: "Our leases are flexible and shaped around each tenant's needs. Call or email us to talk through the term that fits your business.",
  },
  {
    question: 'What is the largest tier grow you support?',
    answer: 'We support any size grow and can work with tenants who hold multiple licenses. Sungrown Farms is home to several tier 3 grows, as well as tier 1 and 2 grows.',
  },
  {
    question: 'What security is in place?',
    answer: 'Security is our top priority. The entire property sits within a gated development, with surveillance cameras and staff on site, and we work with each tenant to put the right security in place for their business.',
  },
  {
    question: 'What are the benefits of industrial zoning?',
    answer: 'Industrial zoning means fewer restrictions from the county. Tenants face fewer limits on handling nutrients and plant run-off, and can set up facilities faster than they could on commercially zoned land.',
  },
  {
    question: 'Can you help me transfer my license?',
    answer: 'Yes. Our team helps tenants acquire new licenses, transfer existing licenses to Sungrown Farms, and sell licenses.',
  },
];

const FAQ = () => (
  <section id="faq" className="band g">
    <Grid>
      <div>
        <p className="eyebrow">FAQ</p>
        <h2 className="h2">Frequently asked questions</h2>
        <List>
          {FREQUENTLY_ASKED_QUESTIONS.map(({ question, answer }, i) => (
            <details key={question} open={i === 0}>
              <summary>{question}</summary>
              <p>{answer}</p>
            </details>
          ))}
        </List>
      </div>
      <Aside>
        <img src={HandlingPlantsJPG} alt="Person tending cannabis plants" loading="lazy" />
        <Ask>
          <b>Have a question that isn&apos;t here?</b>
          <p>We&apos;re available around the clock to help.</p>
          <a className="arrow" href="/#contact">Get in touch →</a>
        </Ask>
      </Aside>
    </Grid>
  </section>
);

export default FAQ;

const Grid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(0, 0.8fr);
  gap: clamp(40px, 6vw, 96px);
  align-items: start;

  ${MEDIA_QUERY.SMALL_LAPTOPS} {
    grid-template-columns: 1fr;
  }
`;

const List = styled.div`
  margin-top: 36px;
  border-top: 1px solid var(--line);

  details {
    border-bottom: 1px solid var(--line);
  }
  summary {
    list-style: none;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    padding: 22px 0;
    font: 600 19px/1.3 var(--display);
  }
  summary::-webkit-details-marker {
    display: none;
  }
  summary::after {
    content: '';
    flex: none;
    width: 14px;
    height: 14px;
    background:
      linear-gradient(currentColor 0 0) center / 14px 2px no-repeat,
      linear-gradient(currentColor 0 0) center / 2px 14px no-repeat;
    transition: transform 0.2s ease;
  }
  details[open] summary::after {
    transform: rotate(45deg);
  }
  details p {
    color: var(--mute);
    padding: 0 40px 24px 0;
    max-width: 62ch;
  }
`;

const Aside = styled.aside`
  position: sticky;
  top: calc(var(--nav-h) + 32px);

  img {
    width: 100%;
    aspect-ratio: 4 / 5;
    object-fit: cover;
    border-radius: 16px;
  }

  ${MEDIA_QUERY.SMALL_LAPTOPS} {
    position: static;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    align-items: stretch;

    img {
      aspect-ratio: auto;
      height: 100%;
      max-height: 320px;
    }
    & > div {
      margin-top: 0;
    }
  }
  ${MEDIA_QUERY.PHONE} {
    grid-template-columns: 1fr;

    img {
      display: none;
    }
  }
`;

const Ask = styled.div`
  margin-top: 16px;
  background: var(--card);
  border: 1px solid var(--line);
  border-radius: 14px;
  padding: 22px 24px;

  b {
    font: 700 17px/1.3 var(--display);
    display: block;
  }
  p {
    color: var(--mute);
    font-size: 15.5px;
    margin: 6px 0 14px;
  }
`;
