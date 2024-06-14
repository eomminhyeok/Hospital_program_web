import Modal from 'react-modal';
import DatePicker from 'react-datepicker';
import Select from 'react-select';
import 'react-datepicker/dist/react-datepicker.css';
import useConfirmRes from '../../../Hooks/ReservationManagement/useConfirmRes';
import LastAddCheckModal from './LastAddCheckModal';
// import BasicModal from '../BasicModal';
// import ErrorModal from '../ErrorModal';

const ConfirmResModal = ({ show, onClose, patientInfo }) => {
  const { selectedDate, setSelectedDate, selectedTime, setSelectedTime, createReservation, reservationInfo, ConfirmPopup, closeConfirmPopup } = useConfirmRes();

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
    marginRight: '1vw',
  }

  const textArrayStyle = {
    display: 'flex',
    flexDirection: 'row',
    margin: '0 0 6vh 0'
  };

  const inputStyle = {
     height: '2vh', 
     width: '7vw', 
     marginTop:'1.5vh'
  }

  const timeOptions = timeSlot.map(time => ({ value: time, label: time }));

  const currentDate = new Date();
  const minDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());


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
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginBottom: '3vh' }}>
        <h2>예약 일자 선택</h2>
      </div>
      <div style={textArrayStyle}>
        <p style={textMargin}>환자 번호 :</p>
        <input
          type="text"
          name="diagnosis"
          value={patientInfo.patientNum}
          style={inputStyle}
          readOnly
        />
      </div>
      <div style={textArrayStyle}>
        <p style={textMargin}>이 름 :</p>
        <input
          type="text"
          name="diagnosis"
          value={patientInfo.name}
          style={inputStyle}
          readOnly
        />
      </div>
      <div style={textArrayStyle}>
        <p style={textMargin}>주민등록번호  :</p>
        <input
          type="text"
          name="diagnosis"
          value={patientInfo.frontRRN}
          style={inputStyle}
          readOnly
        />
        <p style={{ marginRight: '0.5vw', marginLeft: '0.5vw'}}> - </p>
        <input
          type="text"
          name="diagnosis"
          value={patientInfo.backRRN}
          style={inputStyle}
          readOnly
        />
      </div>
      <div style={textArrayStyle}>
        <label style={textMargin}>예약일자 : </label>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          dateFormat="yyyy/MM/dd"
          minDate={minDate}

        />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '5vh' }}>
        <p style={{ margin: '0.2vw' }}>예약시간 : </p>
        <Select
          options={timeOptions}
          value={timeOptions.find(option => option.value === selectedTime)}
          onChange={(option) => setSelectedTime(option.value)}
          styles={selectBoxStyles}
        />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: '2vh' }}>
        <button onClick={() => createReservation(patientInfo, selectedDate, selectedTime)} style={{ marginRight: '3vw' }}>확인</button>  {/* 확인버튼 클릭 시 makeReservation이 실행. rservationInfo가 업데이트 되면서 useEffect 실행 */}
        <button onClick={onClose}>취소</button>
      </div>
      <LastAddCheckModal show={ConfirmPopup} onClose={closeConfirmPopup} reservationInfo={reservationInfo}></LastAddCheckModal>
    </Modal>
  );
};

export default ConfirmResModal;
