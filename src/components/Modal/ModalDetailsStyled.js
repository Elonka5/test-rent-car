import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ImgModal = styled.img`
  border-radius: 14px;
  width: 300px;
  height: 130px;
  object-fit: cover;
  margin-bottom: 8px;
  margin-top: 18px;

  @media screen and (min-width: 340px) and (max-width: 767.9px) {
    width: 100%;
    height: 160px;
  }

  @media only screen and (min-width: 768px) {
    width: 469px;
    height: 200px;
  }
`;

export const ModalList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-bottom: 10px;

  li {
    color: var(--descr-text);
    font-size: 12px;
    font-weight: 400;
  }
`;

export const DescrText = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
  color: var(--main-text);
  margin-bottom: 12px;
`;

export const Text = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
  color: var(--main-text);
  margin-bottom: 8px;
`;

export const WrapAccesories = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 14px;

  p {
    font-size: 12px;
    font-weight: 400;
    color: var(--descr-text);
  }
`;

export const RentalWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 8px;

  p {
    width: auto;
    padding: 7px 14px;
    background-color: var(--rent);
    border-radius: 35px;
    color: var(--rent-text);
    font-size: 12px;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: -0.24px;
  }

  span {
    color: var(--skyblue);
  }
`;

export const LinkStyled = styled(Link)`
  display: flex;
  width: 274px;
  padding: 12px 99px;
  margin-top: 12px;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 12px;
  background-color: var(--skyblue);
  color: var(--white);
  transition: all 0.3s ease-in-out;
  font-size: 14px;
  line-height: 1.4;
  margin-left: auto;
  margin-right: auto;

  &:focus,
  &:hover {
    background-color: var(--blue);
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.2),
      0px 1px 5px 0px rgba(0, 0, 0, 0.14), 0px 2px 5px -1px rgba(0, 0, 0, 0.12);
  }
`;
