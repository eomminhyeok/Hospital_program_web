// 예약등록 최종단계 모달의 훅. 
// 예약 최종 등록창에서 확인 버튼을 누를 시 스토어의 reservationList에 patientInfo+dateTime 값을 저장하여 데이터베이스에 저장할 예약정보를 서버에 전송한다.
import { useState } from 'react';

const useCancleConfirm = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [reservationNum, setReservationNum] = useState('');

  const getReservationNum = (resNumber) => { // 예약취소 버튼 이벤트 시 해당 예약의 예약번호를 저장
    setReservationNum(resNumber)
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };


  return {
    reservationNum,
    getReservationNum,
    showPopup,
    closePopup
  }
}

export default useCancleConfirm;