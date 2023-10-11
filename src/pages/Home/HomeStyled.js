import styled from 'styled-components';
import backImg from '../../images/Car_background.jpg';
import { animated } from 'react-spring';

export const ContainerHome = styled.div`
  max-width: 100%;
  height: 100vh;
  padding: 0 10px;
  margin: 0 auto;
  background-image: linear-gradient(
      rgba(46, 47, 66, 0.5),
      rgba(46, 47, 66, 0.5)
    ),
    url(${backImg});
  background-size: cover;
  background-position: 0 0;
  background-repeat: no-repeat;
  height: 500px;
  background-position-x: center;
  background-position-y: center;
  background-attachment: fixed;

  @media only screen and (min-width: 768px) {
    padding: 0 32px;
  }

  @media screen and (min-width: 1280px) {
    padding: 10px;
  }
`;

export const MainText = styled.h1`
  font-size: 28px;
  color: var(--rent);
  margin-bottom: 8px;

  @media only screen and (min-width: 768px) {
    font-size: 44px;
  }
`;

export const Underline = styled(animated.div)`
  width: 0%;
  height: 3px;
  background-color: var(--skyblue);
  position: relative;
  bottom: 0;
  left: 0;
  transition: width 0.3s ease-in-out;
`;

export const TextAnimated = styled(animated.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding-top: 280px;
  padding-left: 40px;

  @media only screen and (min-width: 768px) {
    padding-top: 240px;
  }
`;

export const FindText = styled.p`
  font-family: Montserrat;
  font-size: 24px;
  margin-top: 12px;
  margin-bottom: 10px;
  text-align: center;

  span {
    color: var(--skyblue);
    text-transform: uppercase;
  }

  @media only screen and (min-width: 768px) {
    font-size: 48px;
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const WrapText = styled.div`
  background-color: rgba(52, 112, 255, 0.3);
  position: relative;
  height: 30px;
  margin-bottom: 50px;

  p {
    position: absolute;
    text-align: center;

    top: 20%;
    font-size: 18px;
    padding-left: 8px;
  }

  @media only screen and (min-width: 768px) {
    height: 30px;
  }
  p {
    font-size: 28px;
    padding-left: 32px;
    left: 20%;
  }
`;

export const RentWrap = styled.div`
  background-color: rgba(52, 112, 255, 0.1);
  display: flex;
  flex-direction: column;
  padding: 20px;
  justify-content: center;
  margin-bottom: 30px;

  ul {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  img {
    width: 220px;
    height: 210px;
    border-radius: 50%;
    border: 5px solid var(--skyblue);
    background-size: cover;
    margin-bottom: 12px;
  }

  p {
    font-size: 24px;
    text-transform: uppercase;
    margin-bottom: 16px;
    text-align: center;
    background-color: var(--white);
  }
  @media screen and (min-width: 1280px) {
    padding: 18px;

    ul {
      flex-direction: row;
      justify-content: center;
      gap: 72px;
    }

    img {
      width: 330px;
      height: 68%;
      background-size: cover;
      margin-bottom: 32px;
    }

    p {
      font-size: 28px;
    }
  }
`;
