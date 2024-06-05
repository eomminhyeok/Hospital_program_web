import { useState } from 'react';
import { chartStore } from '../../store/store';

const useChartDetail = () => {
  const [formData, setFormData] = useState({
    chartNum: '',
    patientNum: '',
    name: '',
    frontRRN: '',
    backRRN: '',
    chartDate: '',
    diagnosis: '',
    notes: '',
  }
  );
  const [showPopup, setShowPopup] = useState(false);
  const { chartList } = chartStore();

  const getChartNum = (chartNum) => { // chartNum을 매개변수로 받아옴. 이번엔 chartNum을 이용해 서버에서 해당하는 정보를 받아올 필요가 없음.
    const selectedChart = chartList.find(chart => chart.chartNum === chartNum); // ChartList에서 chartNum과 일치하는 진료 기록을 찾습니다.
    
    if (selectedChart) {    // chartList에 이미 내가 보고싶은 환자의 진료기록 리스트들을 저장해 놓았음. 이 중에 내가 보고싶은 기록의 chartNum과 같은 form을 finde함수를 이용해 formData에 저장함
      setFormData({   // formData에 사용자가 원하는 진료기록 정보가 저장되었다. ChartListModal에서 이 formData를 ChartDetailModal로 넘겨주면 끝이다.
        chartNum: selectedChart.chartNum,
        patientNum: selectedChart.patientNum,
        name: selectedChart.name,
        frontRRN: selectedChart.frontRRN,
        backRRN: selectedChart.backRRN,
        chartDate: selectedChart.chartDate,
        diagnosis: selectedChart.diagnosis,
        notes: selectedChart.notes,
      });
      setShowPopup(true); // 팝업을 표시합니다.

    } else {
      console.error(`Chart with number ${chartNum} not found.`);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };


  return {
    formData,
    showPopup,
    getChartNum,
    closePopup
  }
}

export default useChartDetail;