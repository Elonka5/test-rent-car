import styled from 'styled-components';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

export const ItemFAQ = styled.div`
  position: relative;
  cursor: pointer;
  border-top: 1px solid var(--descr-text);
  height: 60px;
  padding: 4px;

  h3 {
    width: 260px;
  }

  @media only screen and (min-width: 768px) {
    h3 {
      width: 460px;
    }
  }
`;

export const ArrowUp = styled(IoIosArrowUp)`
  position: absolute;
  top: 28%;
  right: 3%;
  width: 18px;
  height: 18px;
`;
export const ArrowDown = styled(IoIosArrowDown)`
  position: absolute;
  top: 28%;
  right: 3%;
  width: 18px;
  height: 18px;
`;

export const AnswerText = styled.p`
  line-height: 1.4;

  @media screen and (min-width: 1280px) {
    width: 460px;
    text-align: justify;
  }
`;
