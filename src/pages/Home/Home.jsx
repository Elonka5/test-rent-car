import React from 'react';
import {
  ContainerHome,
  FindText,
  MainText,
  RentWrap,
  TextAnimated,
  Underline,
  WrapText,
} from './HomeStyled';
import { useSpring } from 'react-spring';
import { Container } from 'components/Container/Container';
import imgcar from '../../images/marek-pospisil.webp';
import imgrent from '../../images/roberto-nickson.jpg';
import imgtrip from '../../images/reinhart-julian.webp';
import Slider from 'components/Slider/Slider';

const Home = () => {
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 5000 },
  });

  const underlineAnimation = useSpring({
    width: '100%',
    left: '0%',
    from: { width: '0%', left: '0%' },
    to: async next => {
      await next({ width: '100%', left: '0%' });
    },
    config: { duration: 3000 },
  });

  return (
    <>
      <ContainerHome>
        <TextAnimated style={fadeIn}>
          <MainText>Let's discover Ukraine together</MainText>
        </TextAnimated>
        <Underline style={underlineAnimation}></Underline>
      </ContainerHome>
      <Container>
        <FindText>
          Find <span>your</span> drive
        </FindText>
        <WrapText>
          <p>Explore the Ukraine's largest car sharing marketplace</p>
        </WrapText>
        <RentWrap>
          <p>How Do I Rent A Car?</p>
          <ul>
            <li>
              <img src={imgcar} alt="car" />
              <p>Choose the car you like</p>
            </li>
            <li>
              <img src={imgrent} alt="car" />
              <p>Make payment</p>
            </li>
            <li>
              <img src={imgtrip} alt="car" />
              <p>Take a trip by car</p>
            </li>
          </ul>
        </RentWrap>
        <Slider />
      </Container>
    </>
  );
};

export default Home;
