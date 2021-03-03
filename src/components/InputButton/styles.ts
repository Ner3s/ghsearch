import styled, { css } from 'styled-components';

import Tooltip from '~/components/Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
  placeholderColor?: string;
  width: number;
}

export const Container = styled.div<ContainerProps>`
  ${(props) =>
    props.hidden
      ? css`
          display: none;
        `
      : css`
          display: flex;
        `}

  align-items: center;

  background: transparent;
  width: ${(props) => props.width}rem;
  height: 50px;

  padding-left: 15px;

  border: 2px solid #fff;
  color: #fff;

  border-radius: 1rem;

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}
  ${(props) =>
    props.isFocused &&
    css`
      border-color: #f1f1f1;
    `}


  input {
    background: transparent;
    width: 100%;
    border: transparent;
    color: #fff;

    &::placeholder {
      font-weight: bold;
      color: ${(props) => props.placeholderColor};

      ${(props) =>
        props.isFocused &&
        css`
          color: #f1f1f1;
        `};
    }
  }

  @media (max-width: 400px) {
    & {
      width: 100%;
    }
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  svg {
    margin-right: 8px;
    margin-left: 0px;
  }
`;
