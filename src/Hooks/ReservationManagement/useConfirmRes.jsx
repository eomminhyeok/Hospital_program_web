import { useState } from 'react';
import { apiConfirmRes } from '../../Services/apiConfirmRes';

const useConfirmRes = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [SuccessPopup, setSuccessPopup] = useState(false);  // 예약 성공 모달
  const [FailPopup, setFailPopup] = useState(false);  // 예약 실패 모달

  const [patientInfo, setPatientInfo] = useState({
    patientNum: '',
    name: '',
    frontRRN: '',
    backRRN: '',
  });

  const combineDateTime = async () => {     // 사용자가 선택한 예약일과 예약시간을 합치는 함수.
    if (selectedDate && selectedTime) {
      const year = selectedDate.getFullYear();
      const month = ('0' + (selectedDate.getMonth() + 1)).slice(-2);
      const day = ('0' + selectedDate.getDate()).slice(-2);
      const hours = ('0' + selectedTime.split(':')[0]).slice(-2); // 시간을 추출하고 2자리 숫자로 포맷팅
      const minutes = ('0' + selectedTime.split(':')[1]).slice(-2); // 분을 추출하고 2자리 숫자로 포맷팅

      // LocalDateTime 형식으로 조합
      setDateTime(`${year}-${month}-${day}T${hours}:${minutes}`);
    }
  };

  const getResList = (patient) => { // AddResModal에서 환자 검색시 선택한 환자의 정보를 가져옴
    setPatientInfo({
      patientNum: patient.patientNum,
      name: patient.name,
      frontRRN: patient.frontRRN,
      backRRN: patient.backRRN,
    });

    setShowPopup(true);
  };

  const confirmResService = async (reservationInfo) => {
    try {
      const response = await apiConfirmRes(reservationInfo);
      if (response.status === 200) {
        console.log(response.status);
        console.log('진료등록 성공:');
        return true;
      }
      else if (response.status === 500) {
        console.log(response.status);
        console.log(response.message);
        return false;
      }
    } catch (error) {
      console.log('해당 날짜에 예약이 불가능합니다.');
      return false;
    }
  };

  const closePopup = () => {
    setShowPopup(false);
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
    SuccessPopup, setSuccessPopup,
    FailPopup, setFailPopup,
    confirmResService,
    dateTime, setDateTime,
    combineDateTime,
    selectedDate, setSelectedDate,
    selectedTime, setSelectedTime,
    patientInfo,
    getResList,
    showPopup,
    closePopup
  };
};

export default useConfirmRes;
