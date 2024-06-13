import { useState, useEffect } from 'react';
import Modal from 'react-modal';
import DatePicker from 'react-datepicker';
import Select from 'react-select';
import 'react-datepicker/dist/react-datepicker.css';
import useConfirmRes from '../../../Hooks/ReservationManagement/useConfirmRes';
import BasicModal from '../BasicModal';
import ErrorModal from '../ErrorModal';

const ConfirmResModal = ({ show, onClose, patientInfo }) => {
  const {
    selectedDate, setSelectedDate, selectedTime, setSelectedTime, confirmResService, combineDateTime, dateTime, setDateTime,
    SuccessPopup, setSuccessPopup, FailPopup, setFailPopup, closeSuccessPopup, closeFailPopup
  } = useConfirmRes();

  const [reservationInfo, setReservationInfo] = useState({
    reservationNum: '',
    patientNum: '',
    name: '',
    frontRRN: '',
    backRRN: '',
    reservationDate: ''
  });

  const modalStyle = {
    content: {
      width: '30%',
      height: '70%', 
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      padding: '2vh 1vw 0 2vw',
      textAlign: 'left',
      zIndex: 1000,
    },
    overlay: {
      zIndex: 1000,
    },
  };

  const timeSlot = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
    '15:00', '15:30', '16:00', '16:30', '17:00', '17:30'
  ];

  const textMargin = {
    marginBottom: '5vh'
  }

  const timeOptions = timeSlot.map(time => ({ value: time, label: time }));

  const currentDate = new Date();
  const minDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());

  const makeReservation = async () => { // 예약 정보를 취합
    await combineDateTime();  // 사용자가 선택한 날짜와 시간을 합쳐 DateTime 형으로 만듦
    setReservationInfo({  // 최종 예약 정보 업데이트
      reservationNum: '',
      patientNum: patientInfo.patientNum,
      name: patientInfo.name,
      frontRRN: patientInfo.frontRRN,
      backRRN: patientInfo.backRRN,
      reservationDate: dateTime
    });
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { // reservationInfo의 값이 변경될 때 실행
    const handleReservation = async () => {
      if (reservationInfo.reservationDate) {
        const isSuccess = await confirmResService(reservationInfo);
        if (isSuccess) {  // confirmResService의 리턴값에 따라 성공/실패 모달 오픈
          setSuccessPopup(true);
        } else {
          setFailPopup(true);
        }
        setDateTime('');
      }
    };

    handleReservation();
  }, [reservationInfo , setDateTime, setFailPopup, setSuccessPopup]);

  const selectBoxStyles = {
    control: (provided) => ({
      ...provided,
      minHeight: '1.8rem', 
      height: '1.8rem',
      width: '9.3rem',
    }),
    valueContainer: (provided) => ({
      ...provided,
      height: '1.8rem',
      padding: '0 0.375rem',
    }),
    input: (provided) => ({
      ...provided,
      margin: '0rem',
    }),
    indicatorsContainer: (provided) => ({
      ...provided,
      height: '1.875rem',
    }),
  };

  return (
    <Modal isOpen={show} onRequestClose={onClose} style={modalStyle}>
      <div style={{display:'flex', flexDirection:'row', justifyContent:'center', marginBottom:'3vh'}}>
        <h2>아래 정보로 예약하시겠습니까?</h2>
      </div>
      <p style={textMargin}>환자 번호 : {patientInfo.patientNum}</p>
      <p style={textMargin}>이름 : {patientInfo.name}</p>
      <p style={textMargin}>주민등록번호 : {patientInfo.frontRRN} - {patientInfo.backRRN}</p>
      <div style={textMargin}>
        <label>예약일자 : </label>
        <DatePicker 
          selected={selectedDate} 
          onChange={(date) => setSelectedDate(date)} 
          dateFormat="yyyy/MM/dd"
          minDate={minDate}
        />
      </div>
      <div style={{display:'flex', flexDirection:'row', marginBottom:'3vh'}}>
        <p style={{margin: '0.3vw'}}>예약시간 : </p>
        <Select 
          options={timeOptions} 
          value={timeOptions.find(option => option.value === selectedTime)} 
          onChange={(option) => setSelectedTime(option.value)} 
          styles={selectBoxStyles}
        />
      </div>
      <div style={{display:'flex', flexDirection:'row', justifyContent:'center', marginTop: '2vh'}}>
        <button onClick={makeReservation} style={{ marginRight: '3vw' }}>확인</button>  {/* 확인버튼 클릭 시 makeReservation이 실행. rservationInfo가 업데이트 되면서 useEffect 실행 */}
        <button onClick={onClose}>취소</button>
      </div>
      <BasicModal show={SuccessPopup} onClose={closeSuccessPopup} text={"예약 완료"} message={"해당 날짜에 예약을 성공하였습니다"}></BasicModal>
      <ErrorModal show={FailPopup} onClose={closeFailPopup} text={"예약 실패"} message={"더 이상 해당 날짜에 예약할 수 없습니다."}></ErrorModal>
    </Modal>
  );
};

export default ConfirmResModal;
