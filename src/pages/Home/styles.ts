import styled from 'styled-components';

interface IImageProps {
  width?: number;
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
}

export const Container = styled.div`
  font-family: 'Poppins', 'helvetica', sans-serif;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;

  background-color: #232323;

  @media (max-width: 1400px) {
    & #github {
      width: 400px;
    }
  }

  @media (max-width: 1350px) {
    & #github {
      width: 350px;
    }
  }

  @media (max-width: 1100px) {
    & #github {
      width: 300px;
    }
  }

  @media (max-width: 950px) {
    & #github {
      width: 200px;
    }
  }

  @media (max-width: 850px) {
    & #github {
      width: 150px;
    }
  }

  @media (max-width: 400px) {
    & #github {
      top: 100px;
      left: 0;
      right: 0;
      margin: 0 auto;
      width: 100px;
    }
  }
`;

export const ImageAbsolute = styled.img<IImageProps>`
  position: absolute;
  width: ${(props) => props.width}px;
  top: ${(props) => props.top}px;
  right: ${(props) => props.right}px;
  bottom: ${(props) => props.bottom}px;
  left: ${(props) => props.left}px;

  z-index: 0;
`;

export const ContainerUser = styled.div`
  margin-top: 2rem;
  z-index: 2;

  @media (max-width: 400px) {
    margin: 2rem 1rem 0rem;
  }
`;

export const TextIcon = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
