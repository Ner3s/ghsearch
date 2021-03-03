import styled, { css } from 'styled-components';

interface ButtonProps {
  buttonDisable?: boolean;
  size?: string;
  variant?: string;
  letterSpacing?: boolean;
  width: number;
}

export const Container = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  text-align: center;

  width: ${(props) => props.width}rem;
  ${(props) =>
    props.size &&
    css`
      height: ${props.size}rem;
    `};

  ${(props) =>
    props.variant &&
    css`
      background-color: ${props.variant};
    `}

  border-radius: 1rem;

  transition: 180ms ease-in;

  ${(props) =>
    props.buttonDisable &&
    css`
      background: gray;
      cursor: not-allowed;
    `}

  &:hover {
    opacity: 0.85;
  }

  p {
    font-weight: bold;
    ${(props) => {
      switch (props.size) {
        case 'normal':
          return css`
            font-size: 2.5rem;
          `;

        case 'small':
          return css`
            font-size: 1.6rem;
          `;

        default:
          return css`
            font-size: 2.5rem;
          `;
      }
    }}
    ${(props) => {
      switch (props.letterSpacing) {
        case true:
          return css`
            letter-spacing: 0.5rem;
          `;

        case false:
          return '';

        default:
          return '';
      }
    }}
    ${(props) => {
      switch (props.variant) {
        case 'black':
          return css`
            color: ${props.theme.colors.white};
          `;

        case 'red':
          return css`
            color: ${props.theme.colors.white};
          `;

        case 'yellow':
          return css`
            color: #0f0f0f;
          `;

        default:
          return css`
            color: #0f0f0f;
          `;
      }
    }}
  }
`;
