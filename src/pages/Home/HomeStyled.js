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
