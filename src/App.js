import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './Components/LoginPage';
import DashBoard from './Components/DashBoard';
import SignPage from './Components/SignPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="/DashBoard" element={<DashBoard />}></Route>
          <Route path='/SignPage' element={<SignPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;