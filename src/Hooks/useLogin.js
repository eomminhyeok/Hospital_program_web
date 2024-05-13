import { useState } from 'react';

const useLogin = () => {
  const [error, setError] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleLogin = (id, pw) => {
    if (id === 'admin' && pw === 'password') {
      console.log('Login successful!');
      // 로그인 성공 처리를 할 수 있습니다.
    } else {
      setError('아이디 또는 비밀번호가 잘못되었습니다. 다시 시도하세요.');
      setShowPopup(true);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return {
    error,
    handleLogin,
    showPopup,
    closePopup
  };
};

export default useLogin;
