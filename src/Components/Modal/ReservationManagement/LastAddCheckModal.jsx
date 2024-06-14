import React from 'react';
import Modal from 'react-modal';
import useConfirmRes from '../../../Hooks/ReservationManagement/useConfirmRes';
import BasicModal from '../BasicModal';
import ErrorModal from '../ErrorModal';

const LastAddCheckModal =({show, onClose, reservationInfo}) => {
    const { confirmResService, SuccessPopup, closeSuccessPopup, FailPopup, closeFailPopup} = useConfirmRes();

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

      const textMargin = {
        marginBottom: '5vh'
      }

      const formatReservationDate = (isoDateString) => {    // 예약 일자 출력 형식 포맷팅
        const date = new Date(isoDateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        
        return `${year}.${month}.${day} - ${hours}:${minutes}`;
    };

      
      return (
        <Modal isOpen={show} onRequestClose={onClose} style={modalStyle}>
      <div style={{display:'flex', flexDirection:'row', justifyContent:'center', marginBottom:'3vh'}}>
        <h2>아래 정보로 예약하시겠습니까?</h2>
      </div>
      <p style={textMargin}>환자 번호 : {reservationInfo.patientNum}</p>
      <p style={textMargin}>이름 : {reservationInfo.name}</p>
      <p style={textMargin}>주민등록번호 : {reservationInfo.frontRRN} - {reservationInfo.backRRN}</p>
      <p style={textMargin}>예약일자 : {formatReservationDate(reservationInfo.reservationDate)}</p>
      <div style={{display:'flex', flexDirection:'row', justifyContent:'center', marginTop: '2vh'}}>
        <button onClick={()=>confirmResService(reservationInfo)} style={{ marginRight: '3vw' }}>확인</button>
        <button onClick={onClose}>취소</button>
      </div>
      <BasicModal show={SuccessPopup} onClose={closeSuccessPopup} text={"예약 완료"} message={"해당 날짜에 예약을 성공하였습니다"}></BasicModal>
      <ErrorModal show={FailPopup} onClose={closeFailPopup} text={"예약 실패"} message={"더 이상 해당 날짜에 예약할 수 없습니다."}></ErrorModal>
    </Modal>
      )     
}

export default LastAddCheckModal;