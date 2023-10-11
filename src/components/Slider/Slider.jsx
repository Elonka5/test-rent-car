import React, { useState } from 'react';
import {
  InactiveLeftArrow,
  InactiveRightArrow,
  LeftArrow,
  RightArrow,
  SliderWrap,
  SliderwrapText,
  WrapBtn,
} from './SliderStyled';
import { LinkFav } from 'components/FavoriteItems/FavoriteItemsStyled';

const Slider = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const cards = [
    {
      id: 1,
      text: 'Find the perfect car <span class="highlight">to conquer the great outdoors</span>',
      subtext:
        'Go prepared in a rugged 4x4 to take on winter roads with ease, or a camper van to take you to the trees.',
      image: require('../../images/image_outdoors_416x285.jpg'),
    },
    {
      id: 2,
      text: 'Find the perfect car <span class="highlight">to upgrade your vacation plans</span>',
      subtext:
        'Skip the rental car counter and find the perfect car to complement your vacation vibe.',
      image: require('../../images/image_errand_416x285.jpg'),
    },
    {
      id: 3,
      text: 'Find the perfect car <span class="highlight">for scenic corners & curves</span>',
      subtext:
        'Get your fill of high-performance thrills, with the richest selection of luxury and exotic vehicles anywhere.',
      image: require('../../images/image_scenic_416x285.jpg'),
    },
    {
      id: 4,
      text: 'Find the perfect car <span class="highlight">to try before you buy</span>',
      subtext:
        'Make sure your future wheels work well with your lifestyle by taking your time in the driver’s seat.',
      image: require('../../images/image_try_416x285.jpg'),
    },
    {
      id: 5,
      text: 'Find the perfect car <span class="highlight">to make errand day easier</span>',
      subtext:
        'Book a roomy truck or SUV to ease your errand day stress, or to motivate your moving day.',
      image: require('../../images/image_upgrade_416x285.jpg'),
    },
  ];

  const nextCard = () => {
    if (currentCardIndex < cards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
    }
  };

  const prevCard = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
    }
  };

  const isLastSlide = currentCardIndex === cards.length - 1;

  return (
    <div>
      <WrapBtn>
        <button onClick={prevCard} disabled={currentCardIndex === 0}>
          {currentCardIndex === 0 ? <InactiveLeftArrow /> : <LeftArrow />}
        </button>
        <button onClick={nextCard} disabled={isLastSlide}>
          {isLastSlide ? <InactiveRightArrow /> : <RightArrow />}
        </button>
      </WrapBtn>
      <SliderWrap>
        <img src={cards[currentCardIndex].image} alt="cars" />
        <SliderwrapText>
          <h3
            dangerouslySetInnerHTML={{ __html: cards[currentCardIndex].text }}
          />
          <p>{cards[currentCardIndex].subtext}</p>
          <LinkFav to="/catalog">Go to Catalog</LinkFav>
        </SliderwrapText>
      </SliderWrap>
    </div>
  );
};

export default Slider;
