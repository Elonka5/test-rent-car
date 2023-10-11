import React from 'react';
import { ContainerHome, MainText, TextAnimated, Underline } from './HomeStyled';
import { useSpring } from 'react-spring';
import HomeDetails from 'components/HomeDetails/HomeDetails';
import FaqSection from 'components/FAQSection/FAQSection';

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
      <HomeDetails />
      <FaqSection />
    </>
  );
};

export default Home;
