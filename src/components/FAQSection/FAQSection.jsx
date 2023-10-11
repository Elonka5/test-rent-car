import FaqItem from 'components/FAQItem/FAQItem';
import { faqData } from 'helpers/sliderscars';

const FaqSection = () => {
  return (
    <div>
      <h2>Frequently asked questions</h2>
      {faqData.map((item, index) => (
        <FaqItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
};

export default FaqSection;
