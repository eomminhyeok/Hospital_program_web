// 예약등록 최종단계 모달의 훅. 
// 예약 최종 등록창에서 확인 버튼을 누를 시 스토어의 reservationList에 patientInfo+dateTime 값을 저장하여 데이터베이스에 저장할 예약정보를 서버에 전송한다.
import { useState } from 'react';
import { apiCancelReservation } from '../../Services/apiCancelReservation';
import { reservationStore } from '../../store/store';

const useCancelConfirm = () => {
  const { setReservationList } = reservationStore();
  const [showPopup, setShowPopup] = useState(false);
  const [reservationNum, setReservationNum] = useState('');
  const [SuccessPopup, setSuccessPopup] = useState(false);  // LastCheckModal -> 예약 성공 모달 open
  const [FailPopup, setFailPopup] = useState(false);  // LastCheckModal -> 예약 실패 모달 open

  const getReservationNum = (number) => { // CancleResModal에서 예약취소 버튼 이벤트 시 해당 예약의 예약번호를 저장
    setReservationNum(number)
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const cancleReservation = async (reservationNum) => { // CancleConfirmModal에서 예약 취소 확정문구에서 확인 버튼 이벤트시 서버로 예약번호 전송
    try {
      const response = await apiCancelReservation(reservationNum); // 회원가입 서비스 함수 호출 후 응답 저장
      if (response.status === 200) {
        console.log('예약취소 성공');
        setReservationList(response.data);
        setSuccessPopup(true);
      }
      else if (response.status === 500) {
        console.log('예약취소 실패');
      }
    } catch (error) {
      console.error('예약취소 실패:', error);
      setFailPopup(true);
    }
  };


  const closeSuccessPopup = () => {
    setSuccessPopup(false);
  }

  const closeFailPopup = () => {
    setFailPopup(false);
  }

  return {
    closeSuccessPopup,
    closeFailPopup,
    SuccessPopup,
    FailPopup,
    cancleReservation,
    reservationNum,
    getReservationNum,
    showPopup,
    closePopup
  }
}

export default useCancelConfirm;