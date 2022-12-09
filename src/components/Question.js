import React from 'react';
import styled, { css } from 'styled-components';

const Question = ({ children, isActive, onClick }) => (
  <Container isActive={isActive} onClick={onClick}>
    <p>{children}</p>
  </Container>
);

export default Question;

const Container = styled.div`
  width: 100%;
  padding: 12px;
  margin-bottom: 10px;
  cursor: pointer;

  ${(props) => (props.isActive
    ? css`
    border: 1px solid #5D8F51;
    border-left: 9px solid #5D8F51;
    border-radius: 6px;
  `
    : css`
    background-color: #F1EFEC;
    border: 1px solid #F1EFEC;
    border-left: 9px solid #F1EFEC;
    :hover {
      background-color: #F7F6F4;
    }
  `)
}
`;
