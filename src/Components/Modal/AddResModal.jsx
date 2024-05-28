import React from 'react';
import Modal from 'react-modal';
import useAddRes from '../../Hooks/useAddRes';
import useConfirmRes from '../../Hooks/useConfirmRes';
import { patientStore } from '../../store/store';
import { thStyle, tableStyle } from '../../styles/style'; 
import ConfirmResModal from './ConfirmResModal';

const AddResModal = ({show, onClose}) => {
  const { patientList } = patientStore();
  const { searchName, setSearchName } = useAddRes();
  const { showPopup, closePopup, getResList, patientInfo } = useConfirmRes();

  const modalStyle = {
    content: {
      width: '50%',
      height: '80%', 
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      padding: '2vh 1vw 0 1vw',
      textAlign: 'center',
      zIndex: 1000,
    },
    overlay: {
        zIndex: 1000,
    },
};

  return (
    <Modal isOpen={show} onRequestClose={onClose} style={modalStyle}>
      <div style={{ display: 'flex', flexDirection: 'row', width: 'auto', height: '5vh', padding: '1vh 2vw 1vh 2vw' }}>
                <h2 style={{ margin: '0 1vw 0 0' }}>환자 검색</h2>
                <input type='text' value={searchName} onChange={(e) => setSearchName(e.target.value)}
                    style={{ height: '3vh', width: '10vw', fontSize: '1rem', marginRight: '1vw' }} placeholder="이름을 입력하세요"></input>
                <button style={{ height: '4vh', width: '4vw' }}>검색</button>
            </div>
            <div style={{ maxHeight: '65vh', overflowY: 'scroll', backgroundColor: 'solid #ccc' }}>
                <table style={{ ...tableStyle, borderCollapse: 'collapse', backgroundColor: 'white'}}>
                    <thead> 
                        <tr>
                            <th style={thStyle}>환자 번호</th>
                            <th style={thStyle}>이 름</th>
                            <th style={thStyle}>주민등록번호(앞)</th>
                            <th style={thStyle}>주민등록번호(뒤)</th>
                            <th style={thStyle}>예약 등록</th>
                        </tr>
                    </thead>
                    <tbody>
                    {patientList.map((patient, index) => (
                            <tr key={index}>
                                <td style={{border : '1px solid #ccc'}}>{patient.patientNum}</td>
                                <td style={{border : '1px solid #ccc'}}>{patient.name}</td>
                                <td style={{border : '1px solid #ccc'}}>{patient.frontRRN}</td>
                                <td style={{border : '1px solid #ccc'}}>{patient.backRRN}</td>
                                <td style={{border : '1px solid #ccc'}}><button onClick={()=>getResList(patient)}>예약 등록</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <button onClick={()=>onClose()} style={{ height: '3.5vh', width: '4vw', marginTop:'2vh' }}>닫 기</button>
            <ConfirmResModal show={showPopup} onClose={closePopup} patientInfo={patientInfo}></ConfirmResModal>
    </Modal>
  );
};

export default AddResModal;