import FaqItem from 'components/FAQItem/FAQItem';
import { faqData } from 'helpers/sliderscars';
import { ContainerFAQ, WrapAnswers, WrapTitle } from './FAQSectionStyled';

const FaqSection = () => {
  return (
    <ContainerFAQ>
      <WrapTitle>
        <h2>Frequently asked questions</h2>
      </WrapTitle>
      <WrapAnswers>
        {faqData.map((item, index) => (
          <FaqItem key={index} question={item.question} answer={item.answer} />
        ))}
      </WrapAnswers>
    </ContainerFAQ>
  );
};

export default FaqSection;
