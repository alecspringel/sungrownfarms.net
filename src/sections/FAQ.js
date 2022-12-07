import React, { useState } from 'react';
import styled from 'styled-components';
import Question from '../components/Question';
import DryingPlantsJPG from '../images/drying-plants.jpg';

const FAQ = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(1);
  return (
    <section className="max-width m-auto flex-row align-c" style={{ paddingBottom: 200 }}>
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
          What lease durations does Sungrown Farms offer?
        </Question>
        <Question
          isActive={selectedQuestion === 3}
          onClick={() => setSelectedQuestion(3)}
        >
          What lease durations does Sungrown Farms offer?
        </Question>
        <Question
          isActive={selectedQuestion === 4}
          onClick={() => setSelectedQuestion(4)}
        >
          What lease durations does Sungrown Farms offer?
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
      <SplitContent style={{ marginLeft: 50 }}>
        <img src={DryingPlantsJPG} alt="person harvesting and drying plants" width="100%" />
      </SplitContent>
    </section>
  );
};

export default FAQ;

const SplitContent = styled.div`
  width: 50%;
  position: relative;
`;
