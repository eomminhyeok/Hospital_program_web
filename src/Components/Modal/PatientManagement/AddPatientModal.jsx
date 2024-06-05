// 환자관리 페이지의 환자등록 버튼 모달
import React from 'react';
import Modal from 'react-modal';
import useAddPatient from '../../../Hooks/PatientManagement/useAddPatient';


const AddPatientModal = ({ show, onClose }) => {
  const { patient, handleChange, handleCancel, handleRegistration} = useAddPatient();

  const modalStyle = { // 모달 스타일
    content: {
      width: '30%',
      height: 'fit-content',
      top: '50%', // 모달이 화면 상단에서 50% 위치
      left: '50%', // 모달이 화면 왼쪽에서 50% 위치
      transform: 'translate(-50%, -50%)', // 모달을 수평 및 수직으로 정확히 가운데로 이동
      padding: '20px',
      textAlign: 'center',
      zIndex: 998 // z-index를 설정하여 모달이 최상위에 위치
    },
    overlay: {
      zIndex: 998 // content와 overlay 두 영역 모두에서 최상위에 위치하게 하여 모든 요소에서 최상위에 위치하도록 보장
    }
  };

  const handleReject = () => { // 환자 등록 모달 취소
    handleCancel();
    onClose();
  }

  const handleConfirm = () => { // 등록 완료 모달 close
    handleRegistration();
    onClose();
  }

  return (
    <Modal isOpen={show} onRequestClose={onClose} style={modalStyle}>
      <h2 style={{textAlign: 'center'}}>신규환자 등록</h2>

      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '2vh 1vw'}}>

        <div style={{display: 'flex', alignItems: 'center', marginBottom: '4vh'}}> 
          <label style={{marginRight: '6vw'}}>이름</label>
          <input type='text' name='name' value={patient.name} onChange={handleChange} style={{ height: '2vh'}} />
        </div>

        <div style={{display: 'flex', alignItems: 'center', marginBottom: '4vh'}}>
          <label style={{marginRight: '6vw'}}>성별</label>
          <div style={{marginRight: '1vw'}}>
            <label>
              <input type="radio" name='sex' value="남" checked={patient.sex === '남'} onChange={handleChange} style={{ marginRight: '0.5vw' }} />
              남자
            </label>
          </div>
          <div>
            <label>
              <input type="radio" name='sex' value="여" checked={patient.sex === '여'} onChange={handleChange} style={{ marginRight: '0.5vw' }} />
              여자
            </label>
          </div>
        </div>

        <div style={{display: 'flex', alignItems: 'center', marginBottom: '4vh'}}>
          <label style={{marginRight: '2.2vw'}}>주민등록번호</label>
          <input type='text' name='frontrrn' value={patient.frontrrn} onChange={handleChange} style={{ width:'5vw', height: '2vh', marginRight: '0.5vw'}} />
          <span>-</span>
          <input type='text' name='backrrn' value={patient.backrrn} onChange={handleChange} style={{ width:'5vw', height: '2vh', marginLeft: '0.5vw'}} />
        </div>

        <div style={{display: 'flex', alignItems: 'center', marginBottom: '4vh'}}>
          <label style={{marginRight: '6vw'}}>주소</label>
          <input type='text' name='address' value={patient.address} onChange={handleChange} style={{ height: '2vh'}} />
        </div>

        <div style={{display: 'flex', alignItems: 'center', marginBottom: '4vh'}}>
          <label style={{marginRight: '3vw'}}>휴대폰번호</label>
          <input type='text' name='phone' value={patient.phone} onChange={handleChange} style={{ height: '2vh'}} />
        </div>



      </div>
      <div style={{textAlign: 'center'}}>
        <button onClick={() => handleConfirm()} style={{marginRight: '1vw'}}>확인</button>
        <button onClick={handleReject}>취소</button>
      </div>
    </Modal>

  );
};

export default AddPatientModal;