import React from 'react';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';

const SignModal = ({ text, show, onClose, message }) => {
  const navigate = useNavigate();
  const customStyles = {
    content: {
      width: '30%', // 모달의 너비를 조정합니다.
      height: 'fit-content', // 모달의 높이를 내용에 맞게 조정합니다.
      top: '50%', // 모달이 화면 상단에서 50% 위치하도록 합니다.
      left: '50%', // 모달이 화면 왼쪽에서 50% 위치하도록 합니다.
      transform: 'translate(-50%, -50%)', // 모달을 수평 및 수직으로 정확히 가운데로 이동시킵니다.
      padding: '20px', // 내부 여백을 설정합니다.
      textAlign: 'center' // 내용을 가운데 정렬합니다.
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