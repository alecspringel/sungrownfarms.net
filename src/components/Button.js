import { Link } from 'gatsby';
import React from 'react';
import styled, { css } from 'styled-components';

const Button = ({
  to, href, children, ...rest
}) => (to
  ? (
    <ButtonLink to={to} {...rest}>
      {children}
    </ButtonLink>
  )
  : (
    <ALink href={href} {...rest}>
      {children}
    </ALink>
  )
);

export default Button;

const styles = css`
  display: inline-block;
  font-family: "Inter";
  padding: 10px 40px;
  border-radius: 21px;

  ${(props) => props.small && css`
    padding: 8px 20px;
    font-size: 15px;
  `}

  ${(props) => (props.outline
    ? css`
    color: var(--text-color);
    background-color: none;
    border: 2px solid var(--text-color);
    padding: 8px 40px;
    :hover {
      opacity: 0.8;
    }
  `
    : css`
    background-color: var(--primary);
    color: #fff;
    :hover {
      background-color: #66995a;
    }
  `
  )};
`;

const ButtonLink = styled(Link)`${styles}`;

const ALink = styled.a`${styles}`;
