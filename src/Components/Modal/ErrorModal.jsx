// 에러 모달
import React from 'react';
import Modal from 'react-modal';

const ErrorModal = ({ text, show, onClose, message}) => {
  const modalStyle = {
    content: {
      width: '30%',
      height: 'fit-content', 
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      padding: '20px',
      textAlign: 'center',
      zIndex: 1000 // z-index를 설정하여 모달이 최상위에 위치
    },
    overlay: {
      zIndex: 1000 // content와 overlay 두 영역 모두에서 최상위에 위치하게 하여 모든 요소에서 최상위에 위치하도록 보장
    }
  };

  return (
    <Modal isOpen={show} onRequestClose={onClose} style={modalStyle}>
      <h2>{text}</h2>
      <p style={{ color: 'red' }}>{message}</p>
      <button onClick={onClose}>확인</button>
    </Modal>
  );
};

export default ErrorModal;
