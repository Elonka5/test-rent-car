import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsOpen } from 'redux/modal/modalSelectors';
import { closeModal } from 'redux/modal/modalSlice';

const ModalForm = () => {
  const isModalOpen = useSelector(selectIsOpen);
  //   const modalData = useSelector(selectModalData);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isModalOpen) return;
    const onCloseModalEsc = evt => {
      if (evt.code === 'Escape') {
        dispatch(closeModal());
      }
    };
    window.addEventListener('keydown', onCloseModalEsc);
    return () => {
      window.removeEventListener('keydown', onCloseModalEsc);
    };
  }, [dispatch, isModalOpen]);

  //   const onCloseBackdrop = evt => {
  //     if (evt.currentTarget === evt.target) {
  //       dispatch(closeModal());
  //     }
  //   };
  //   const handleCloseBtn = () => {
  //     dispatch(closeModal());
  //   };

  return <div>ModalForm</div>;
};

export default ModalForm;
