// 예약등록 최종단계 모달의 훅. 
// 예약 최종 등록창에서 확인 버튼을 누를 시 스토어의 reservationList에 patientInfo+dateTime 값을 저장하여 데이터베이스에 저장할 예약정보를 서버에 전송한다.
import { useState } from 'react';

const useConfirmRes = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [patientInfo, setPatientInfo] = useState({
    patientNum: '',
    name: '',
    frontRRN: '',
    backRRN: '',
  });

  const combineDateTime = () => {     // 사용자가 선택한 예약일과 예약시간을 합치는 함수.
    // 날짜 객체인 date에서 년, 월, 일을 각각 분리한다
    const year = selectedDate.getFullYear();
    const month = ('0' + (selectedDate.getMonth() + 1)).slice(-2); // 월은 0부터 시작한다. 0월은 없으므로 월+1 을 해줘야 정상적인 달로 출력된다. 월 앞에 0을 붙여 '01월' '02월'이 된다. 
    const day = ('0' + selectedDate.getDate()).slice(-2); // '011월', '012월'로 출력되는것을 막기 위해 slice(-2)를 해준다. 문자를 처음부터 끝이아닌 마지막 두번째에서 끝부분까지 출력한다.
    setDateTime(`${year}-${month}-${day}T${selectedTime}`); // 합쳐진 예약날짜와 시간을 dateTime에 저장
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

  const closePopup = () => {
    setShowPopup(false);
  };


  return {
    dateTime,
    combineDateTime,
    selectedDate, setSelectedDate,
    selectedTime, setSelectedTime,
    patientInfo,
    getResList,
    showPopup,
    closePopup
  }
}

export default useConfirmRes;