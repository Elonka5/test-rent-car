import styled from 'styled-components';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { AiOutlineArrowRight } from 'react-icons/ai';

export const SliderWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;

  img {
    width: 260px;
  }

  @media only screen and (min-width: 768px) {
    gap: 14px;

    img {
      width: 460px;
      margin-left: auto;
      margin-right: auto;
    }

    p {
      height: 37px;
    }
  }

  @media screen and (min-width: 1280px) {
    gap: 94px;
    flex-direction: row;
    flex-wrap: wrap;
  }

  img {
    width: 460px;
    margin-left: 20px;
    margin-right: 0;
  }
`;

export const WrapBtn = styled.div`
  display: flex;
  justify-content: flex-end;

  button {
    background-color: transparent;
    color: transparent;
    border: none;
  }
`;

export const LeftArrow = styled(AiOutlineArrowLeft)`
  width: 20px;
  height: 20px;
  color: var(--black);
  cursor: pointer;

  &:focus,
  &:hover {
    color: var(--skyblue);
  }
`;

export const RightArrow = styled(AiOutlineArrowRight)`
  width: 20px;
  height: 20px;
  color: var(--black);
  cursor: pointer;

  &:focus,
  &:hover {
    color: var(--skyblue);
  }
`;

export const InactiveLeftArrow = styled(AiOutlineArrowLeft)`
  width: 20px;
  height: 20px;
  color: gray;
`;

export const InactiveRightArrow = styled(AiOutlineArrowRight)`
  width: 20px;
  height: 20px;
  color: gray;
`;

export const SliderwrapText = styled.div`
  @media screen and (min-width: 1280px) {
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 400px;
  }

  h3 {
    font-size: 24px;
    line-height: 32px;
  }
`;
