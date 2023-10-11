import styled from 'styled-components';
import { FiHeart } from 'react-icons/fi';
import { FaHeart } from 'react-icons/fa';

export const BtnFav = styled.button`
  position: absolute;
  top: 2%;
  right: 4%;
  width: 22px;
  height: 22px;
  background-color: transparent;
  border: none;
  padding: 2px;
  cursor: pointer;
`;

export const FiHeartStyled = styled(FiHeart)`
  width: 18px;
  height: 18px;
  color: var(--white);
  cursor:pointer;
`;

export const FaHeartStyled = styled(FaHeart)`
  width: 18px;
  height: 18px;
  color: var(--skyblue);
  cursor:pointer;
`;

export const Card = styled.li`
  position: relative;
  width: 300px;
  height: auto;
  background: #fff;
  border-radius: 14px;
  box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px #bebebe,
    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
  transition: border-radius 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  img {
    border-radius: 14px;
    width: 300px;
    height: 268px;
    object-fit: cover;
  }
`;

export const DescrWrapper = styled.div`
  padding: 8px;
`;

export const ModelWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-bottom: 10px;
  color: var(--main-text);

  h2 {
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
  }

  span {
    color: var(--skyblue);
  }
`;

export const Price = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 56%;
  right: 0.1%;
  width: 48px;
  height: 48px;
  background-color: var(--skyblue);
  color: var(--white);
  border-radius: 50%;
  padding: 4px;
`;

export const AdressDescr = styled.p`
  color: var(--descr-text);
  font-size: 12px;
  font-weight: 400;
  height: 41px;
`;
