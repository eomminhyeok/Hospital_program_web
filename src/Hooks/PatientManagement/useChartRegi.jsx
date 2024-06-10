import { useState } from 'react';
import currentDateTime from '../../Components/etc/dateTime';
import { ChartRegiService } from '../../Services/apiChartRegi';

const useChartRegi = () => {
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

  const handleChange = (e) => {    // 진료 등록시 사용자의 입력값을 받아와 formData에 저장
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCancel = () => {
    setFormData({
      chartNum: '',
      patientNum: '',
      name: '',
      frontRRN: '',
      backRRN: '',
      chartDate: '',
      diagnosis: '',
      notes: '',
    });
  };


  const handlePopup = (patient) => {  // 2.환자리스트에서 선택한 환자 해당 행의 정보를 받아와 formData에 저장
    setFormData({     // 진료 등록시 이름과 주민등록번호, 진료날짜는 입력할 필요가 없음
      chartNum: '',
      patientNum: patient.patientNum,
      name: patient.name,
      frontRRN: patient.frontRRN,
      backRRN: patient.backRRN,
      chartDate: currentDateTime(), // 현재 날짜+시간
      diagnosis: '',
      notes: '',
    });
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const apiChartRegi = async (chart) => { // 진료 정보 전달
    try {
      const response = await ChartRegiService(chart);
      if (response.status === 200) {
        console.log(response.status);
        console.log('진료등록 성공:');
        setFormData({
          patientNum: '',
          name: '',
          frontRRN: '',
          backRRN: '',
          chartDate: '',
          diagnosis: '',
          notes: '',
        });
      }
    } catch (error) {
      if (error.response) {
        console.log("에러 상태 코드:", error.response.status);
      }
      console.log("진료등록 실패");
    }
  }


  return {
    apiChartRegi,
    formData,
    handleChange,
    handleCancel,
    showPopup,
    handlePopup,
    closePopup
  }
}

export default useChartRegi;