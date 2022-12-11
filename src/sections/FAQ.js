import React, { useState } from 'react';
import styled from 'styled-components';
import Question from '../components/Question';
import { MEDIA_QUERY } from '../constants';
import DryingPlantsJPG from '../images/drying-plants.jpg';

const FAQ = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(1);
  return (
    <Section id="faq" className="max-width m-auto flex-row align-c mw-padding section-p-b">
      <SplitContent>
        <h3 className="m-b20">Frequently Asked Questions</h3>
        <Question
          isActive={selectedQuestion === 1}
          onClick={() => setSelectedQuestion(1)}
        >
          What lease durations does Sungrown Farms offer?
        </Question>
        <Question
          isActive={selectedQuestion === 2}
          onClick={() => setSelectedQuestion(2)}
        >
          What is the largest tier grow you support?
        </Question>
        <Question
          isActive={selectedQuestion === 3}
          onClick={() => setSelectedQuestion(3)}
        >
          How are utilities billed and paid for?
        </Question>
        <Question
          isActive={selectedQuestion === 4}
          onClick={() => setSelectedQuestion(4)}
        >
          What are the benefits of industrial zoning?
        </Question>
        <div style={{ marginTop: 32 }}>
          <h4>Answer</h4>
          <p className="m-t8">
            Answer to question
            {' '}
            {selectedQuestion}
            .  Lorem ipsum dolor sit amet consectetur. In iaculis nisl lectus mus.
            Lorem ipsum dolor sit amet consectetur. In iaculis nisl lectus mus. Bibendum
          </p>
        </div>
      </SplitContent>
      <SplitContent>
        <Image src={DryingPlantsJPG} alt="person harvesting and drying plants" width="100%" />
      </SplitContent>
    </Section>
  );
};

export default FAQ;

const SplitContent = styled.div`
  width: 50%;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
`;

const Section = styled.section`
  overflow: hidden;
  padding-top: 100px;

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
      margin-right: 0;
    }
    & ${SplitContent}:nth-child(2) {
      margin-left: 0;
    }
    & ${Image} {
      width: 100%;
    }
  }
`;
