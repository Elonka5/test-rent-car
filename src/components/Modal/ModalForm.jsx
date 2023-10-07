import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import { Backdrop, ModalContainer } from './ModalFormStyled';
import { openModal } from 'redux/modal/modalSlice';

const modalContainer = document.getElementById('modal');

const ModalForm = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const onCloseModalEsc = evt => {
      if (evt.code === 'Escape') {
        dispatch(openModal());
      }
    };

    window.addEventListener('keydown', onCloseModalEsc);
    return () => {
      window.removeEventListener('keydown', onCloseModalEsc);
    };
  }, [dispatch]);

  const onCloseModal = evt => {
    if (evt.currentTarget === evt.target) {
      dispatch(openModal());
    }
  };
  const handleCloseModal = () => {
    dispatch(openModal());
  };

  return createPortal(
    <Backdrop onClick={onCloseModal}>
      <ModalContainer>
        <button onClick={handleCloseModal}></button>
        {children}
      </ModalContainer>
    </Backdrop>,
    modalContainer
  );
};

export default ModalForm;
