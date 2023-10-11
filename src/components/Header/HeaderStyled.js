import styled from 'styled-components';

export const HeaderWrap = styled.header`
  border-bottom: 3px solid var(--skyblue);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 5px 0px,
    rgba(0, 0, 0, 0.14) 0px 1px 5px 0px, rgba(0, 0, 0, 0.12) 0px 2px 5px -1px;
`;

export const ContainerHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 6px;
  @media screen and (min-width: 340px) and (max-width: 767.9px) {
    gap: 50px;
  }

  @media only screen and (min-width: 1280px) {
    gap: 90px;
  }
`;

export const Logo = styled.img`
  width: 90px;
  height: 50px;

  @media only screen and (min-width: 768px) {
    width: 110px;
    height: 60px;
  }

  @media only screen and (min-width: 1280px) {
    width: 150px;
    height: 70px;
  }
`;
