import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';

export const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;

  background-color: rgba(18, 20, 23, 0.5);
  overscroll-behavior: contain;
  z-index: 5;

  @media only screen and (min-width: 768px) {
    backdrop-filter: blur(3.5px);
  }
`;

export const ModalContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  top: 50%;
  left: 50%;
  position: absolute;
  padding: 10px;
  overscroll-behavior: contain;
  transform: translate(-50%, -50%);
  background-color: var(--white);

  @media only screen and (min-width: 768px) {
    width: 500px;
    max-height: 620px;
    padding: 10px 20px;
  }
`;

export const CloseBtn = styled.button`
  width: 18px;
  height: 18px;
  padding: 2px;
  position: absolute;
  top: 1%;
  right: 1%;
  background-color: transparent;
  border: none;
`;

export const CloseSvg = styled(AiOutlineClose)`
  width: 15px;
  height: 15px;
  color: var(--black);

  &:focus,
  &:hover {
    color: var(--skyblue);
  }
`;
