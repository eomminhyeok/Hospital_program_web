import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useLogin = () => {
  const [ useId, setUseId ] = useState('');
  const [ usePassword, setUsePassword ] = useState('');
  const [ error, setError ] = useState('');
  const [ showPopup, setShowPopup ] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (useId === '1' && usePassword === '1') { // 로그인 성공
      console.log('로그인 성공');
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
