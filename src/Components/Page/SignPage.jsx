import React from 'react';
import useSign from '../../Hooks/useSign';
import ErrorModal from '../Modal/ErrorModal';
import SignModal from '../Modal/SignModal';

const SignPage = () => {const { userId, setUserId, password, setPassword, email, setEmail, address, setAddress, phone, setPhone,
         handleSign, showPopup, confirmPopup, closePopup} = useSign();
    return(
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20vh' }}>
            <div style={{
                display: 'flex', // 동적으로 지정
                flexDirection: 'column', // 컴포넌트 정렬 방향
                alignItems: 'center', // 수평 가운데
                justifyContent: 'center', // 수직 가운데
                width: '15%', // 너비
                height: '40%', // 높이(내부 컴포넌트에 맞춰서)
                border: '1px solid #ccc', // 외곽선 스타일 및 색상 설정
                borderRadius: '10px', // 모서리 둥글기 설정
                padding: '8%', // 내부 여백
                margin: 'auto auto', // 가운데 정렬을 위한 margin 설정
            }}>
                <h1>회원가입</h1>
                <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} placeholder="아이디" />
                <br />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="비밀번호" />
                <br />
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="e-mail" />
                <br />
                <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="주소" />
                <br />
                <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="휴대폰 번호" />
                <br />
                    <button onClick={ () => handleSign() } style={{width: 'fit-content'}}>회원가입</button>
            </div>
            <ErrorModal text={'회원가입 실패'} show={showPopup} onClose={closePopup} message={"입력되지 않은 항목이 있습니다."}/>
            <SignModal text={'회원가입 성공'} show={confirmPopup} onClose={closePopup} message={'로그인 페이지로 돌아갑니다'}/>
        </div>
    );
};

export default SignPage;