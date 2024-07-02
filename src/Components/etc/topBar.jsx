import React from 'react';
import { useNavigate } from 'react-router-dom';
import { verticalLine } from './verticalLine';
import LogOutModal from '../Modal/LogOutModal';
import { useUserStore } from '../../store/store';
import useTopBar from '../../Hooks/useTopBar';


const TopBar = () => {
  const { userInfo } = useUserStore();
  const { showPopup, getChartList, handlePopup, closePopup } = useTopBar();
  const navigate = useNavigate();
  const vertical = verticalLine('4vh');
  
  const updateChartList = () => {
    getChartList();
    navigate('/StatisticsPage')
  }

  return (
    <div style={{ background: 'linear-gradient(to bottom, rgb(160, 210, 255), #ffffff)', height: '18vh', width: '100%'}}>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', textAlign: 'left', padding: '2vh 2vw' }}>
        <h1 onClick={() => navigate('/Dashboard')} style={{ fontSize: '1.8rem', cursor: 'pointer' }}>병원관리 시스템</h1>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', flexGrow: 1, fontSize: '1.5rem' }}>
          <div style={vertical}></div>
          <p onClick={() => navigate('/ReservationPage')} style={{ cursor: 'pointer' }}>예약관리</p>
          <div style={vertical}></div>
          <p onClick={() => navigate('/PatientPage')} style={{ cursor: 'pointer' }}>환자관리</p>
          <div style={vertical}></div>
          <p onClick={() => updateChartList()} style={{ cursor: 'pointer' }}>병원통계</p>
          <div style={vertical}></div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <p style={{ fontSize: '1rem', marginRight: '1vw' }}>사용자: {userInfo.name}</p>
          <button onClick={()=>handlePopup()} style={{height: '3.2vh',marginTop: '2.1vh' }}>로그아웃</button>
        </div>
      </div>
      <hr />
      <LogOutModal text={'로그아웃'} show={showPopup} onClose={closePopup} message={'로그아웃 하시겠습니까?'} />
    </div>
  );
}

export default TopBar;
