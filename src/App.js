import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './Components/Page/LoginPage';
import DashBoard from './Components/Page/DashBoard';
import SignPage from './Components/Page/SignPage';
import ReservationPage from './Components/Page/ReservationPage';
import PatientPage from './Components/Page/PatientPage';
import StatisticsPage from './Components/Page/StatisticsPage';
import TestPage from './TestPage';

// import axios from 'axios';


function App() {
  const [data, setData] = useState('');

  // useEffect(() => { // 서버 동기화 테스트
  //   // Spring Boot 서버로 HTTP GET 요청 보내기
  //   axios.get('/hello')
  //     .then(response => {
  //       setData(response.data);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching data:', error);
  //     });
  // }, []);

  return (
    <div>
      {/* <h1>Spring Boot와 React 연동 예제</h1>
      <p>백엔드에서 받은 데이터: {data}</p> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/DashBoard" element={<DashBoard />} />
          <Route path='/SignPage' element={<SignPage />} />
          <Route path='/ReservationPage' element={<ReservationPage/>} />
          <Route path='/PatientPage' element={<PatientPage/>} />
          <Route path='/StatisticsPage' element={<StatisticsPage/>} />
          <Route path='/TestPage' element={<TestPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;