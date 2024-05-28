// 보고싶은 환자의 진료기록 상세보기 버튼시 환자의 진료기록 리스트를 불러오는 훅

// 예약관리 -> 추가버튼 클릭시 팝업되는 AddPatientModal의 훅

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