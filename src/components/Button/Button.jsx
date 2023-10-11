import { BtnStyled } from './ButtonStyled';

const Button = ({ onClick, text, type, id }) => {
  return (
    <BtnStyled type={type} id={id} onClick={onClick}>
      {text}
    </BtnStyled>
  );
};

export default Button;
