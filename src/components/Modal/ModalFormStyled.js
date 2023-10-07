import styled from 'styled-components';

export const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;

  background-color: rgba(18, 20, 23, 0.5);
  overscroll-behavior: contain;
  z-index: 5;
`;

export const ModalContainer = styled.div`
  width: 541px;
  height: 500px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  padding: 40px;
  background-color: #fff;
  border-radius: 24px;
`;
