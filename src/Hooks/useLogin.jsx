import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiLogin } from '../Services/apiLogin';
import { reservationStore, useUserStore } from '../store/store';

const useLogin = () => {
  const [ id, setId ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ error, setError ] = useState('');
  const [ showPopup, setShowPopup ] = useState(false);
  const { userInfo } = useUserStore();
  const { reservationList, setReservationList } = reservationStore();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await apiLogin(id, password);
      // 서버로부터 받은 응답의 상태 코드 확인
      if (response.status === 200) {
        // 상태 코드가 200이면 대쉬보드 페이지로 이동
        console.log(response.reservations);
        userInfo.name = response.userName;
        setReservationList(response.reservations);
        navigate('/DashBoard');

        // setReservationList 이후에 reservationList가 업데이트 되는 것을 확인하기 위해
      setTimeout(() => {
        console.log(reservationList);
      }, 1000); // 예: 1초 후에 reservationList를 콘솔에 출력
      } 
    } catch (error) {
      console.error('로그인 에러:', error);
      setError('아이디 또는 비밀번호가 잘못되었습니다. 다시 시도하세요.');
      setShowPopup(true);
    }
  };


  
  const closePopup = () => {
    setShowPopup(false);
  };

  return {
    id,
    setId,
    password,
    setPassword,
    error,
    handleLogin,
    showPopup,
    closePopup
  };
};

export default useLogin;
