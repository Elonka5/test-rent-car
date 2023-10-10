import styled from 'styled-components';

export const ErrorBackdrop = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ErrorImage = styled.img`
  margin: 0 auto;
  width: 40vw;
  object-fit: contain;
  object-position: center;
  border-radius: 50%;
`;

export const ErrorText = styled.p`
  font-size: 28px;
  margin-left: auto;
  margin-right: auto;
  color: var(--main-text);
`;
