import { useState } from 'react';

const useSign = () => { // 회원가입시 입력 정보를 저장할 커스텀 훅
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    const [confirmPopup, setConfirmPopup] = useState(false);

    const handleSign = () => {
        if (userId && password && email && address && phone) {  // 모든 항목은 null 이 아니여야 함
            setConfirmPopup(true);
        } else {
            setError('입력되지 않은 항목이 있습니다.');
            setShowPopup(true);
        }
    };

    const closePopup = () => {
        setShowPopup(false);
        setConfirmPopup(false);
    };

    return {
        userId, setUserId,
        password, setPassword,
        email, setEmail,
        address, setAddress,
        phone, setPhone,
        error,
        handleSign,
        showPopup,
        confirmPopup,
        closePopup
    };
};

export default useSign;
