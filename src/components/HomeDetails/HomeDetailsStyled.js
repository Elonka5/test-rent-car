import styled from 'styled-components';
export const RentWrap = styled.div`
  background-color: rgba(52, 112, 255, 0.1);
  display: flex;
  flex-direction: column;
  padding: 20px;
  justify-content: center;
  margin-bottom: 30px;

  ul {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  img {
    width: 220px;
    height: 210px;
    border-radius: 50%;
    border: 5px solid var(--skyblue);
    background-size: cover;
    margin-bottom: 12px;
  }

  p {
    font-size: 24px;
    text-transform: uppercase;
    margin-bottom: 16px;
    text-align: center;
    background-color: var(--white);
  }
  @media screen and (min-width: 1280px) {
    padding: 18px;

    ul {
      flex-direction: row;
      justify-content: center;
      gap: 72px;
    }

    img {
      width: 330px;
      height: 68%;
      background-size: cover;
      margin-bottom: 32px;
    }

    p {
      font-size: 28px;
    }
  }
`;

export const WrapText = styled.div`
  background-color: rgba(52, 112, 255, 0.3);
  position: relative;
  height: 30px;
  margin-bottom: 50px;

  p {
    position: absolute;
    text-align: center;
    top: 20%;
    font-size: 18px;
    padding-left: 8px;
  }

  @media only screen and (min-width: 768px) {
    height: 30px;

    p {
      font-size: 28px;
      left: 8%;
      width: 600px;
    }
  }

  @media screen and (min-width: 1280px) {
    height: 40px;

    p {
      font-size: 28px;
      left: 18%;
      width: 800px;
    }
  }
`;

export const FindText = styled.h2`
  font-family: Montserrat;
  font-size: 24px;
  margin-top: 12px;
  margin-bottom: 10px;
  text-align: center;

  span {
    color: var(--skyblue);
    text-transform: uppercase;
  }

  @media only screen and (min-width: 768px) {
    font-size: 48px;
  }
`;
