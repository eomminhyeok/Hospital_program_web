// 예약취소 최종 모달

import React from 'react';
import Modal from 'react-modal';
import 'react-datepicker/dist/react-datepicker.css';
import useCancleConfirm from '../../../Hooks/ReservationManagement/useCancelConfirm';
import BasicModal from '../BasicModal';
import ErrorModal from '../ErrorModal';

const CancelConfirmModal = ({show, onClose, reservationNum}) => {

  const { cancleReservation, SuccessPopup, FailPopup, closeSuccessPopup, closeFailPopup } = useCancleConfirm();

  const modalStyle = {
    content: {
      width: '25%',
      height: '25%', 
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      padding: '2vh 1vw 0 2vw',
      textAlign: 'left',
      zIndex: 1000,
    },
    overlay: {
        zIndex: 1000,
    },
  };



  return (
    <Modal isOpen={show} onRequestClose={onClose} style={modalStyle}>
      <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
        <h2 style={{marginBottom:'1vh'}}>예약을 취소하시겠습니까?</h2>
        <p style={{color:'red'}}>예약 취소 시 복구가 불가능합니다</p>
      <div style={{display:'flex', felxDirection:'row', marginTop:'3vh'}}>
        <button onClick={()=>cancleReservation(reservationNum)} style={{ marginRight: '3vw', width:'3.5vw'}}>확인</button> {/* 이벤트 시 모달 매개변수로 받은 reservationNum을 서버 파일에 전송 */}
        <button onClick={onClose} style={{width:'3.5vw'}}>취소</button>
      </div>
      </div>

      <BasicModal show={SuccessPopup} onClose={closeSuccessPopup} text={"예약취소 완료"} message={"예약이 취소 되었습니다."}></BasicModal>
      <ErrorModal show={FailPopup} onClose={closeFailPopup} text={"예약취소 실패"} message={"예약취소에 실패 하였습니다."}></ErrorModal>
    </Modal>
  );

  };

export default CancelConfirmModal;