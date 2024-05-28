import { useState } from 'react';
import currentDateTime from '../Components/etc/dateTime';

const useChartRegi = () => {
  const [formData, setFormData] = useState({
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
      patienttNum: '',
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


  return {
    formData,
    handleChange,
    handleCancel,
    showPopup,
    handlePopup,
    closePopup
  }
}

export default useChartRegi;