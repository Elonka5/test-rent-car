import styled from 'styled-components';

export const WrapList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 30px;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`;
