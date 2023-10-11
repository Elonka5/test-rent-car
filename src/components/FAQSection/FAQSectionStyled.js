import styled from 'styled-components';

export const ContainerFAQ = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 320px;
  padding: 0 10px;
  margin: 0 auto;

  @media only screen and (min-width: 768px) {
    max-width: 768px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1280px;
    padding: 10px;
  }
`;

export const WrapTitle = styled.div`
  background-color: rgba(52, 112, 255, 0.3);
  position: relative;
  height: 30px;
  margin-bottom: 24px;

  h2 {
    font-family: Montserrat;
    position: absolute;
    top: 38%;
    font-size: 17px;
    padding-left: 4px;
    text-transform: uppercase;
  }

  @media only screen and (min-width: 768px) {
    height: 40px;

    h2 {
      font-size: 24px;
    }
  }
`;

export const WrapAnswers = styled.div`
  @media screen and (min-width: 1280px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;
