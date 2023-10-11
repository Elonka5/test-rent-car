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
import { cards } from 'helpers/sliderscars';

const Slider = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

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
