// 보고싶은 환자의 진료기록 상세보기 버튼시 환자의 진료기록 리스트를 불러오는 훅

import { useState } from 'react';
import { ChartListService } from '../../Services/apiChartList';
import { chartStore } from '../../store/store';


const useChartList = () => {
  const [showPopup, setShowPopup] = useState(false);
  const {setChartList} = chartStore();

  const getPatientNum = async (patientNum) => {  
    // 환자 번호를 받아옴. 이 patientNum을 service 파일에서 불러와 서버로 보낸 뒤 해당하는 진료기록 데이터를 store 전역 리스트맵인 chartList에 담는다. 
    //즉 chartList에는 해당하는 환자번호의 진료기록 리스트가 담기게 된다. 
    try{
      const response = await ChartListService(patientNum);
      if(response.status === 200) {
        console.log(response.status);
        setChartList(response.data);
        console.log("진료 리스트 호출 성공");
      }
    } catch (error) {
      if (error.response) {
        console.log("에러 상태 코드:", error.response.status);
      }
      console.log("진료 기록 리스트 불러오기 실패");
    }

    setShowPopup(true);                   // 그 후, handlePopup을 실행해 formData에 진료기록 리스트를 저장하여 PatientPage에서 모달페이
  };                                     

  const closePopup = () => {
    setShowPopup(false);
  };


  return {
    getPatientNum,
    showPopup,
    closePopup
  }
}

export default useChartList;