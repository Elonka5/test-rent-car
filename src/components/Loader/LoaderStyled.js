import styled from 'styled-components';

export const BackdropLoad = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

export const CarLoad = styled.img`
  position: absolute;
  top: 42%;
  left: 39%;
  margin: 0 auto;
  width: 30vw;
  object-fit: contain;
  object-position: center;

  @media only screen and (min-width: 768px) {
    top: 35%;
    left: 40%;
    width: 20vw;
    height: auto;
  }
  @media screen and (min-width: 1280px) {
    top: 38%;
    left: 42%;
    width: 10vw;
    height: auto;
  }
`;
