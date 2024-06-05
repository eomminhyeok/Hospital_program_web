// 예약관리 -> 추가버튼 클릭시 팝업되는 AddPatientModal의 훅
// 검색한 환자의 이름을 저장. 검색 버튼 이벤트 시 저장한 이름을 service 페이지로 보내야 함

import { useState } from 'react';

const useAddRes = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [searchName, setSearchName] = useState('');

  const handlePopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };


  return {
    // getPatientNum,
    searchName, setSearchName,
    showPopup,
    handlePopup,
    closePopup
  }
}

export default useAddRes;