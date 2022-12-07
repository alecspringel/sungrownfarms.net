import { Link } from 'gatsby';
import React from 'react';
import styled, { css } from 'styled-components';

const Button = ({
  children, className, to, outline, style,
}) => (
  <ButtonLink to={to} className={className} outline={outline} style={style}>
    {children}
  </ButtonLink>
);

export default Button;

const ButtonLink = styled(Link)`
  display: inline-block;
  font-family: "Roboto";
  padding: 10px 40px;
  border-radius: 21px;
  
  ${(props) => (props.outline
    ? css`
    color: var(--text-color);
    background-color: none;
    border: 2px solid var(--text-color);
    padding: 8px 40px;
  `
    : css`
    background-color: var(--primary);
    color: #fff;
  `
  )};
`;
