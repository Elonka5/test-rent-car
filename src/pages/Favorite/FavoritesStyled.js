import styled from 'styled-components';

export const FavoriteWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`;
