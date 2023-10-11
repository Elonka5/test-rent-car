import React, { useState } from 'react';

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div onClick={toggleAnswer} style={{ cursor: 'pointer' }}>
        <h3>{question}</h3>
      </div>
      {isOpen && <p>{answer}</p>}
    </div>
  );
};

export default FaqItem;
