import React from 'react';
import Modal from 'react-modal';
import DatePicker from 'react-datepicker';
import Select from 'react-select';
import 'react-datepicker/dist/react-datepicker.css';
import useConfirmRes from '../../Hooks/useConfirmRes';

const ConfirmResModal = ({show, onClose, patientInfo}) => {
  const { selectedDate, setSelectedDate, selectedTime, setSelectedTime} = useConfirmRes();

  const modalStyle = {
    content: {
      width: '30%',
      height: '70%', 
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      padding: '2vh 1vw 0 2vw',
      textAlign: 'left',
      zIndex: 1001,
    },
    overlay: {
        zIndex: 1001,
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

  // 현재 날짜를 가져오고, 그 이전의 날짜를 비활성화하기 위해 minDate 변수 설정
  const currentDate = new Date();
  const minDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - 1);

  const selectBoxStyles = {  // select box 스타일 커스텀
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
        <button onClick={onClose} style={{ marginRight: '3vw' }}>확인</button>
        <button onClick={onClose}>취소</button>
      </div>
    </Modal>
  );
};

export default ConfirmResModal;
