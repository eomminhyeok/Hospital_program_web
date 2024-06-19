// 예약관리 -> 추가버튼 클릭시 팝업되는 CanclePatientModal의 훅
// 검색환 환자의 결과를 저장. 검색 버튼 이벤트 시 결과를 서버에 요청해 reservationList에 저장
import { useState } from 'react';
import { reservationStore } from '../../store/store';

const useCancelRes = () => {
  const { reservationList } = reservationStore();
  const [showPopup, setShowPopup] = useState(false);
  const [searchName, setSearchName] = useState(''); // 사용자가 검색한 이름을 저장할 state
  const [searchedList, setSearchedList] = useState([  // 검색 결과를 저장할 state
    {
      reservationNum: '',
      patientNum: '',
      name: '',
      frontRRN: '',
      backRRN: '',
      reservationDate: '',
    }
  ]);

  const formatDateTime = (dateTime) => {  // 예약날짜 출력시 날짜와 시간 사이의 T문자를 삭제
    const [date, time] = dateTime.split('T');
    return `${date} ${time}`;
  };

  const handlePopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const handleSearch = (result) => {
    const filteredList = reservationList.filter(reservation => reservation.name === result); // store의 reservationList에서 검색한 환자의 이름과 같은 예약 내역을 searchedList에 저장
    setSearchedList(filteredList);
  } 


  return {
    searchedList,
    handleSearch,
    formatDateTime,
    searchName, setSearchName,
    showPopup,
    handlePopup,
    closePopup
  }
}

export default useCancelRes;