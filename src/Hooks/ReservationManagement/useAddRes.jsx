// 예약관리 -> 추가버튼 클릭시 팝업되는 AddPatientModal의 훅
// 검색한 환자의 이름을 저장. 검색 버튼 이벤트 시 저장한 이름을 service 페이지로 보내야 함

import { useState } from 'react';
import { patientStore } from '../../store/store';
import { apiSearch } from '../../Services/apiSearch';


const useAddRes = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [searchName, setSearchName] = useState('');
  const { setPatientList } = patientStore();

  const searchPatient = async () => {       // 서버에서 useName에 해당하는 환자 리스트를 받아 patientList에 저장
    try {
        const response = await apiSearch(searchName);
        if (response.status === 200) {
            setPatientList(response.data);
          } 
        } catch (error) {
            if (error.response) {
                console.log("에러 상태 코드:", error.response.status);
            }
            console.log("환자 조회 실패");
      }
}

  const handlePopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };


  return {
    searchPatient,
    searchName, setSearchName,
    showPopup,
    handlePopup,
    closePopup
  }
}

export default useAddRes;