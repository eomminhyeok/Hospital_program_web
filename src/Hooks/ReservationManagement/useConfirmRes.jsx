import { useState } from 'react';
import { apiAddRes } from '../../Services/apiAddRes';
import { reservationStore } from '../../store/store';

const useConfirmRes = () => {
  const { reservationList, setReservationList, reservationTodayList, setReservationTodayList } = reservationStore();
  const [showPopup, setShowPopup] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [ConfirmPopup, setConfirmPopup] = useState(false);  // LastCheckModal Open 훅
  const [SuccessPopup, setSuccessPopup] = useState(false);  // LastCheckModal -> 예약 성공 모달 open
  const [FailPopup, setFailPopup] = useState(false);  // LastCheckModal -> 예약 실패 모달 open

  const [patientInfo, setPatientInfo] = useState({ // AddResModal에서 사용자가 선택한 환자의 정보를 저장할 훅
    patientNum: '',
    name: '',
    frontRRN: '',
    backRRN: '',
  });

  const [reservationInfo, setReservationInfo] = useState({ // ConfirmResModal에서 최종 예약 정보를 저장할 훅
    reservationNum: '',
    patientNum: '',
    name: '',
    frontRRN: '',
    backRRN: '',
    reservationDate: ''
  });


  const getResList = (patient) => { // AddResModal에서 사용자 선택시 사용자의 정보를 patientInfo에 저장 후 ConfirmResModal 오픈
    setPatientInfo({
      patientNum: patient.patientNum,
      name: patient.name,
      frontRRN: patient.frontRRN,
      backRRN: patient.backRRN,
    });
    setShowPopup(true);
  };

  const createReservation = (patientInfo, date, time) => {     // 최종 예약 정보 취합 메서드
    const year = date.getFullYear();
      const month = ('0' + (date.getMonth() + 1)).slice(-2);
      const day = ('0' + date.getDate()).slice(-2);
      const hours = ('0' + time.split(':')[0]).slice(-2); // 시간을 추출하고 2자리 숫자로 포맷팅
      const minutes = ('0' + time.split(':')[1]).slice(-2); // 분을 추출하고 2자리 숫자로 포맷팅

      // LocalDateTime 형식으로 조합
      const dateTime = `${year}-${month}-${day}T${hours}:${minutes}`

    setReservationInfo({  // 최종 예약 정보 업데이트
      reservationNum: '',
      patientNum: patientInfo.patientNum,
      name: patientInfo.name,
      frontRRN: patientInfo.frontRRN,
      backRRN: patientInfo.backRRN,
      reservationDate: dateTime
    });

    setConfirmPopup(true);
  };

  const confirmResService = async (reservationInfo) => {  // LastAddCheckModal에서 호출하여 서버로 예약정보 전송
    try {
      const response = await apiAddRes(reservationInfo);
      if (response.status === 200) {
        console.log(response.status);
        console.log('예약등록 성공:');
        setReservationList(response.reservations);
        setReservationTodayList(response.reservationsToday);
        setSuccessPopup(true);

        setTimeout(() => {
          console.log('예약내역: ' + reservationList);
          console.log('금일 예약 내역:' + reservationTodayList);
        }, 1000);
      }
      else if (response.status === 500) {
        console.log(response.status);
        console.log(response.message);
        setFailPopup(true);
      }
    } catch (error) {
      console.log('해당 날짜에 예약이 불가능합니다.');
      setFailPopup(true);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const closeConfirmPopup = () => {
    setConfirmPopup(false);
  }

  const closeSuccessPopup = () => {
    setSuccessPopup(false);
  }

  const closeFailPopup = () => {
    setFailPopup(false);
  }

  return {
    reservationInfo,
    createReservation,
    closeConfirmPopup,
    closeSuccessPopup,
    closeFailPopup,
    ConfirmPopup, setConfirmPopup,
    SuccessPopup, setSuccessPopup,
    FailPopup, setFailPopup,
    confirmResService,
    getResList,
    patientInfo,
    selectedDate, setSelectedDate,
    selectedTime, setSelectedTime,
    showPopup,
    closePopup
  };
};

export default useConfirmRes;
