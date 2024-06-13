import { useState } from 'react';
import { apiSign } from '../Services/apiSign';

const useSign = () => {
    const [userInfo, setUserInfo] = useState({
        userId: '',
        password: '',
        name: '',
        email: '',
        address: '',
        phone: '',
    });

    const [showPopup, setShowPopup] = useState(false);
    const [confirmPopup, setConfirmPopup] = useState(false);

    const handleSign = async () => {
        if (userInfo.userId && userInfo.password && userInfo.name && userInfo.email && userInfo.address && userInfo.phone) {  
            try {
                const response = await apiSign(userInfo); // 회원가입 서비스 함수 호출 후 응답 저장
                console.log('Sign up response:', response);
                setConfirmPopup(true); // 회원가입 성공
            } catch (error) {
                console.error('회원가입 에러:', error);
                setShowPopup(true); // 회원가입 실패
            }
        } else {
            setShowPopup(true); // 입력되지 않은 항목이 있을 때 알림
        }
    };

    const closePopup = () => {
        setShowPopup(false);
        setConfirmPopup(false);
    };

    return {
        userInfo, setUserInfo,
        handleSign,
        showPopup,
        confirmPopup,
        closePopup
    };
};

export default useSign;
