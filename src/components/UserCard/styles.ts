import styled from 'styled-components';

interface TextProps {
  fontSize: number;
  fontWeight: string;
  margin: string;
  color: string;
  textAlign: 'center' | 'end' | 'justify' | 'left' | 'right' | 'start';
}

export const Container = styled.div`
  width: 35rem;
  border: 0.2rem #fff solid;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 400px) {
    & {
      width: 100%;
    }
  }
`;

export const Image = styled.img`
  width: 15rem;
  height: 15rem;
  object-fit: cover;
  border-radius: 50%;
`;

export const ContainerDetails = styled.div``;

export const Text = styled.p<TextProps>`
  font-size: ${(props) => props.fontSize}rem;
  font-weight: ${(props) => props.fontWeight};
  margin: ${(props) => props.margin};
  color: ${(props) => props.color};
  text-align: ${(props) => props.textAlign};
`;
