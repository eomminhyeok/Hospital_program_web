// 회원가입 페이지
import React from 'react';
import useSign from '../../Hooks/useSign';
import ErrorModal from '../Modal/ErrorModal';
import SignModal from '../Modal/SignModal';

const SignPage = () => {
    const { userInfo, setUserInfo, handleSign, showPopup, confirmPopup, closePopup, } = useSign();

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20vh' }}>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: '15%',
                height: '40%',
                border: '1px solid #ccc',
                borderRadius: '10px',
                padding: '8%',
                margin: 'auto auto',
            }}>
                <h1>회원가입</h1>
                <input type="text" value={userInfo.userId} onChange={(e) => setUserInfo({ ...userInfo, userId: e.target.value })} placeholder="아이디" />
                <br />
                <input type="password" value={userInfo.password} onChange={(e) => setUserInfo({ ...userInfo, password: e.target.value })} placeholder="비밀번호" />
                <br />
                <input type="text" value={userInfo.name} onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })} placeholder="이름" />
                <br />
                <input type="text" value={userInfo.email} onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })} placeholder="e-mail" />
                <br />
                <input type="text" value={userInfo.address} onChange={(e) => setUserInfo({ ...userInfo, address: e.target.value })} placeholder="주소" />
                <br />
                <input type="text" value={userInfo.phone} onChange={(e) => setUserInfo({ ...userInfo, phone: e.target.value })} placeholder="휴대폰 번호" />
                <br />
                <button onClick={()=>handleSign()} style={{ width: 'fit-content' }}>회원가입</button>
            </div>
            <ErrorModal text={'회원가입 실패'} show={showPopup} onClose={closePopup} message={"입력되지 않은 항목이 있습니다."} />
            <SignModal text={'회원가입 성공'} show={confirmPopup} onClose={closePopup} message={'로그인 페이지로 돌아갑니다'} />
        </div>
    );
};

export default SignPage;
