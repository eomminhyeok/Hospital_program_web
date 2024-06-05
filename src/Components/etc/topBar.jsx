import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { verticalLine } from './verticalLine';
import LogOutModal from '../Modal/LogOutModal';
import { useUserStore } from '../../store/store';

const vertical = verticalLine('4vh');

const usePopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handlePopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return {
    handlePopup,
    showPopup,
    closePopup
  };
};

const TopBar = () => {
  const { showPopup, handlePopup, closePopup } = usePopup();
  const { userInfo } = useUserStore();
  const navigate = useNavigate();

  return (
    <div style={{ background: 'linear-gradient(to bottom, rgb(160, 210, 255), #ffffff)', height: '20vh', width: '100%'}}>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', textAlign: 'left', padding: '2vh 2vw' }}>
        <h1 onClick={() => navigate('/Dashboard')} style={{ fontSize: '1.8rem', cursor: 'pointer' }}>병원관리 시스템</h1>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', flexGrow: 1, fontSize: '1.5rem' }}>
          <div style={vertical}></div>
          <p onClick={() => navigate('/ReservationPage')} style={{ cursor: 'pointer' }}>예약관리</p>
          <div style={vertical}></div>
          <p onClick={() => navigate('/PatientPage')} style={{ cursor: 'pointer' }}>환자관리</p>
          <div style={vertical}></div>
          <p onClick={() => navigate('/StatisticsPage')} style={{ cursor: 'pointer' }}>병원통계</p>
          <div style={vertical}></div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <p style={{ fontSize: '1rem', marginRight: '1vw' }}>사용자: {userInfo.userName}</p>
          <button onClick={handlePopup} style={{height: '3.2vh',marginTop: '2.1vh' }}>로그아웃</button>
        </div>
      </div>
      <hr />
      <LogOutModal text={'로그아웃'} show={showPopup} onClose={closePopup} message={'로그아웃 하시겠습니까?'} />
    </div>
  );
}

export default TopBar;
