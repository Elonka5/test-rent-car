import { Container } from 'components/Container/Container';
import React from 'react';
import { FindText, RentWrap, WrapText } from './HomeDetailsStyled';
import imgcar from '../../images/marek-pospisil.webp';
import imgrent from '../../images/roberto-nickson.jpg';
import imgtrip from '../../images/reinhart-julian.webp';
import Slider from 'components/Slider/Slider';

const HomeDetails = () => {
  return (
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
  );
};

export default HomeDetails;
