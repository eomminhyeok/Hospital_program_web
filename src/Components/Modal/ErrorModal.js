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
      textAlign: 'center'
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
