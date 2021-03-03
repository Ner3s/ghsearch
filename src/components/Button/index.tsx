import React, { ButtonHTMLAttributes, CSSProperties } from 'react';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  buttonDisable?: boolean;
  extraStyles?: CSSProperties;
  size?: string;
  variant?: string;
  letterSpacing?: boolean;
  width: number;
};

const Button: React.FC<ButtonProps> = ({
  loading,
  buttonDisable,
  extraStyles,
  width,
  children,
  ...rest
}) => (
  <Container
    type="button"
    width={width}
    disabled={buttonDisable}
    buttonDisable={buttonDisable}
    style={extraStyles}
    {...rest}
  >
    {loading ? (
      // fazer alguma coisa.
      <></>
    ) : (
      <p>{children}</p>
    )}
  </Container>
);

export default Button;
