import styled from 'styled-components';

interface IImageProps {
  width?: number;
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  background: #232323;
`;

export const WrapperCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const Card = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #232323;
  background: #fff;
  box-shadow: 0px 0px 2rem #000;
  margin: 1rem 4rem;
  border-radius: 1rem;
  height: 100%;
  min-height: 17rem;
  padding: 2rem;
`;

export const WrapperBack = styled.section`
  display: flex;
  margin: 2rem 4rem 0rem;

  & > a {
    display: flex;
    align-items: center;
    flex: 0;
    transition: transform 200ms ease-in-out;
    cursor: pointer;
    font-size: 18px;
    font-weight: 600;
    color: #fff;
  }

  & > a:hover {
    transform: translateX(20px) scale(1.25);
  }

  & span {
    display: flex;
    flex: 2;
    width: 100%;
  }
`;

export const WrapperImg = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

export const UserContainer = styled.section`
  display: flex;
`;
