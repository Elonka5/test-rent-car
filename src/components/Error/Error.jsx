import React from 'react';
import errImg from '../../images/error_car.gif';
import { ErrorBackdrop, ErrorImage, ErrorText } from './ErrorStyled';

export const ErrorImg = ({ text }) => {
  return (
    <ErrorBackdrop>
      <ErrorImage src={errImg} alt="popcorn" />
      <ErrorText>{text}</ErrorText>
    </ErrorBackdrop>
  );
};
