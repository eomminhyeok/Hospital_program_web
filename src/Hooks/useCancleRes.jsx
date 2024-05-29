// 예약관리 -> 추가버튼 클릭시 팝업되는 CanclePatientModal의 훅
// 검색환 환자의 결과를 저장. 검색 버튼 이벤트 시 결과를 서버에 요청해 reservationList에 저장
import { useState } from 'react';

const useCancleRes = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [searchName, setSearchName] = useState('');

  const formatDateTime = (dateTime) => {  // 예약날짜 출력시 날짜와 시간 사이의 T문자를 삭제
    const [date, time] = dateTime.split('T');
    return `${date} ${time}`;
  };

  const handlePopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };


  return {
    formatDateTime,
    searchName, setSearchName,
    showPopup,
    handlePopup,
    closePopup
  }
}

export default useCancleRes;