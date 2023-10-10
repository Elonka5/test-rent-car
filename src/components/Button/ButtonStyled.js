import styled from 'styled-components';

export const BtnStyled = styled.button`
  display: flex;
  width: 274px;
  padding: 12px 99px;
  margin-top: 28px;
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
  cursor: pointer;

  &:focus,
  &:hover {
    background-color: var(--blue);
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.2),
      0px 1px 5px 0px rgba(0, 0, 0, 0.14), 0px 2px 5px -1px rgba(0, 0, 0, 0.12);
  }
`;
