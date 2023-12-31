import styled from 'styled-components';

export const Container = styled.div`
  max-width: 320px;
  padding: 0 10px;
  margin: 0 auto;

  @media only screen and (min-width: 768px) {
    max-width: 768px;
    padding: 10 32px;
  }
  @media screen and (min-width: 1280px) {
    max-width: 1280px;
    padding: 10px;
  }
`;
