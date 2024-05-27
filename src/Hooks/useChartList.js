// 보고싶은 환자의 진료기록 상세보기 버튼시 환자의 진료기록 리스트를 불러오는 훅

import { useState } from 'react';

const useChartList = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [patientNum, setPatientNum] = useState('');

  const getPatientNum = (patientNum) => { // 환자 번호를 받아옴. 이 patientNum을 service 파일에서 불러와 서버로 보낸 뒤 해당하는 진료기록 데이터를
    setPatientNum(patientNum);            // store 전역 리스트맵인 chartList에 담는다. 즉 chartList에는 해당하는 환자번호의 진료기록 리스트가 담기게 된다. 
    setShowPopup(true);                   // 그 후, handlePopup을 실행해 formData에 진료기록 리스트를 저장하여 PatientPage에서 모달페이
  };                                     

  const closePopup = () => {
    setShowPopup(false);
  };


  return {
    patientNum,
    getPatientNum,
    showPopup,
    closePopup
  }
}

export default useChartList;