import React, { useState } from 'react';
import { AnswerText, ArrowDown, ArrowUp, ItemFAQ } from './FAQItemStyled';

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <ItemFAQ onClick={toggleAnswer}>
        <h3>
          {question}
          {isOpen ? <ArrowUp /> : <ArrowDown />}
        </h3>
      </ItemFAQ>
      {isOpen && <AnswerText>{answer}</AnswerText>}
    </div>
  );
};

export default FaqItem;
