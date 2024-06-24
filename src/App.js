import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './Components/Page/LoginPage';
import DashBoard from './Components/Page/DashBoard';
import SignPage from './Components/Page/SignPage';
import ReservationPage from './Components/Page/ReservationPage';
import PatientPage from './Components/Page/PatientPage';
import StatisticsPage from './Components/Page/StatisticsPage';
import TestPage from './TestPage';



function App() {

  return (
    <div>
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