import { Link } from 'gatsby';
import React from 'react';
import styled, { css } from 'styled-components';

// $variant: 'sun' (default) | 'line' | 'dark'; $small for compact padding
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

const VARIANTS = {
  sun: css`
    background: var(--sun);
    color: var(--deep);
  `,
  line: css`
    border: 1px solid rgba(242, 243, 236, 0.4);
    color: var(--cream);
    :hover {
      background: rgba(242, 243, 236, 0.08);
    }
  `,
  dark: css`
    background: var(--forest);
    color: var(--cream);
  `,
};

const styles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font: 600 16px/1 var(--display);
  padding: ${(props) => (props.$small ? '12px 18px' : '16px 22px')};
  border-radius: 8px;
  transition: transform 0.15s ease, background-color 0.15s ease;
  :hover {
    transform: translateY(-1px);
  }
  ${(props) => VARIANTS[props.$variant] || VARIANTS.sun}
`;

const ButtonLink = styled(Link)`${styles}`;

const ALink = styled.a`${styles}`;
