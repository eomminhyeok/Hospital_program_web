import React from 'react';
import useLogin from '../../Hooks/useLogin';
import ErrorModal from '../Modal/ErrorModal';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const { useId, setUseId, usePassword, setUsePassword, error, showPopup, closePopup, handleLogin } = useLogin(); // 로그인 훅 (로그인 관련 에러메세지와 팝업창은 로그인페이지에서만 사용하기 때문에 훅에 정의)
    const navigate = useNavigate();

    return (
        <div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '10vh' }}>
                <h1>병원 정보 관리 시스템</h1>
            </div>
            <div style={{
                display: 'flex', // 동적으로 지정
                flexDirection: 'column', // 컴포넌트 정렬 방향
                alignItems: 'center', // 수평 가운데
                justifyContent: 'center', // 수직 가운데
                width: '22%', // 너비
                height: 'fit-content', // 높이(내부 컴포넌트에 맞춰서)
                border: '1px solid #ccc', // 외곽선 스타일 및 색상 설정
                borderRadius: '10px', // 모서리 둥글기 설정
                padding: '3%', // 내부 여백
                margin: 'auto auto', // 가운데 정렬을 위한 margin 설정
            }}>
                <h1>로그인</h1>
                <input type="text" value={useId} onChange={(e) => setUseId(e.target.value)} placeholder="아이디" />
                <br />
                <input type="password" value={usePassword} onChange={(e) => setUsePassword(e.target.value)} placeholder="비밀번호" />
                <br />
                <div style={{ display: 'flex', width: '60%' }}> {/* 로그인 버튼과 회원가입 버튼을 같은 행에 배치 */}
                    <button onClick={ () => handleLogin(useId, usePassword) } style={{width: '40%'}}>로그인</button>
                    <div style={{width: '20%'}}></div>
                    <button onClick ={() => navigate('/SignPage')} style={{width: '40%'}}>회원가입</button>
                </div>
            </div>
            <ErrorModal text={'로그인 실패'} show={showPopup} onClose={closePopup} errorMessage={error} />
        </div>
    );
};

export default LoginPage;
