import React from 'react';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import { buttonStyle } from '../../styles/style';

const LogOutModal = ({ text, show, onClose, message }) => {
  const navigate = useNavigate();

  const customStyles = { // 모달 스타일
    content: {
      width: '30%',
      height: 'fit-content', 
      top: '50%', // 모달이 화면 상단에서 50% 위치
      left: '50%', // 모달이 화면 왼쪽에서 50% 위치
      transform: 'translate(-50%, -50%)', // 모달을 수평 및 수직으로 정확히 가운데로 이동
      padding: '20px',
      textAlign: 'center',
      zIndex: 1000 // z-index를 설정하여 모달이 최상위에 위치
    },
    overlay: {
      zIndex: 1000 // content와 overlay 두 영역 모두에서 최상위에 위치하게 하여 모든 요소에서 최상위에 위치하도록 보장
    }
  };

  const handleConfirm = () => { // 확인 버튼 이벤트
    sessionStorage.clear();
    localStorage.clear();
    onClose(); // 모달 닫기
    navigate('/'); // 로그인 페이지로 이동
  };

  const handleReject = () =>{ // 취소 버튼
    onClose();
  }

  return (
    <Modal isOpen={show} onRequestClose={onClose} style={customStyles}>
      <h2>{text}</h2>
      <p style={{ color: 'gray' }}>{message}</p>
      <button onClick={handleConfirm} style={{...buttonStyle, marginRight: '3vw'}}>확인</button>
      <button onClick={handleReject} style={{...buttonStyle}}>취소</button>
    </Modal>
  );
};

export default LogOutModal;
