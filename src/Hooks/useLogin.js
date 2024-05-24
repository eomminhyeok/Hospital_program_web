import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserStore } from '../store/store';

const useLogin = () => {
  const { userId, setUserId, password, setPassword } = useUserStore(); // 로그인 스토어 (전역으로 사용될 수 있는 변수들은 스토어에서 정의)
  const [ useId, setUseId] = useState('');
  const [ usePassword, setUsePassword] = useState('');
  const [error, setError] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (id, pw) => {
    if (id === '1' && pw === '1') { // 로그인 성공
      console.log('로그인 성공');
      setUserId(id);
      setPassword(pw);
      navigate('/DashBoard'); // 대쉬보드 페이지로 이동
    } else {
      setError('아이디 또는 비밀번호가 잘못되었습니다. 다시 시도하세요.'); // 에러 메세지
      setShowPopup(true); // 팝업 창 true
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return {
    useId,
    setUseId,
    usePassword,
    setUsePassword,
    error,
    handleLogin,
    showPopup,
    closePopup
  };
};

export default useLogin;
