import React from 'react';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';

const SignModal = ({ text, show, onClose, message }) => {
  const navigate = useNavigate();
  const customStyles = {
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

  const handleConfirm = () => {
    onClose(); // 모달 닫기
    navigate('/'); // 로그인 페이지로 이동
  };

  return (
    <Modal isOpen={show} onRequestClose={onClose} style={customStyles}>
      <h2>{text}</h2>
      <p style={{ color: 'gray' }}>{message}</p>
      <button onClick={handleConfirm}>확인</button>
    </Modal>
  );
};

export default SignModal;
