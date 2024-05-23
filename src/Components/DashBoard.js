import React, { useState } from 'react';
import { verticalLine, tableStyle, tdStyle, thStyle, buttonStyle } from '../styles/style';
import DoughnutChart from './Chart/doughnutChart';

const DashBoard = () => {
    const vertical = verticalLine('4vh');  // 탑 바 수직선 길이

    const [reservations, setReservations] = useState([   // 예약자 명단 ui 테스트 값
        { id: 1, name: '박오이', time: '08:30' },
        { id: 2, name: '김수박', time: '09:30' },
        { id: 3, name: '최참외', time: '10:00' },
        { id: 4, name: '김김밥', time: '11:00' },
        { id: 5, name: '박오이', time: '08:30' },
        { id: 6, name: '김수박', time: '09:30' },
        { id: 7, name: '최참외', time: '10:00' },
        { id: 8, name: '김김밥', time: '11:00' },
        { id: 9, name: '박오이', time: '08:30' },
        { id: 10, name: '김수박', time: '09:30' },
        { id: 11, name: '최참외', time: '10:00' },
        { id: 12, name: '김김밥', time: '11:00' },
    ]);
    const [registrations, setRegistrations] = useState([]);  // 접수자 명단
    const [selectedReservation, setSelectedReservation] = useState(null); // 현재 선택된 예약자
    const [selectedRegistration, setSelectedRegistration] = useState(null); // 현재 선택된 접수자

    const handleReservationClick = (reservation) => { // 예약자 선택 
        setSelectedReservation(reservation); // 매개변수 전달
    };

    const handleRegisterClick = () => { // 예약자 접수 버튼
        if (selectedReservation) {
            setRegistrations([...registrations, selectedReservation]); // 접수목록에 등록
            setReservations(reservations.filter((r) => r.id !== selectedReservation.id)); // 예약자 목록에서 삭제
            setSelectedReservation(null);   // 예약자 목록 선택 초기화
        }
    };

    const handleRegistrationClick = (registration) => { // 접수자 선택
        setSelectedRegistration(registration);
    };

    const handleDeleteClick = () => { // 접수 삭제 버튼
        if (selectedRegistration) {
            setRegistrations(registrations.filter((r) => r.id !== selectedRegistration.id)); // 접수자 삭제
            setSelectedRegistration(null);
        }
    };

    const renderRows = (data, isReservation = true) => { // 예약자, 접수자 목록 렌더링
        const rows = data.map((item) => ( // data = 렌더링할 목록
            <tr
                key={item.id}
                onClick={() => isReservation ? handleReservationClick(item) : handleRegistrationClick(item)}
                style={{
                    backgroundColor: (isReservation ? selectedReservation?.id : selectedRegistration?.id) === item.id ? '#333333' : 'white',
                    color: (isReservation ? selectedReservation?.id : selectedRegistration?.id) === item.id ? 'white' : 'black',
                    cursor: 'pointer',
                }}
            >
                {/* isReservation 값에 따라 td 스타일을 다르게 적용 */}
                {isReservation ? ( 
                    <>  {/* 예약자 명단은 예약자 이름과 예약 시간을 나타낸다 */}
                        <td style={{ ...tdStyle, color: 'black' }}>{item.name}</td>
                        <td style={{ ...tdStyle, color: 'black' }}>{item.time}</td>
                    </>
                    ) 
                    : 
                    (
                    <>  {/* 접수자 명단은 접수자 이름과 현재 진료중인지 대기중인지를 나타낸다 */}
                        <td style={{ ...tdStyle, color: 'black' }}>{item.name}</td>
                        <td style={{ ...tdStyle, color: data.indexOf(item) === 0 ? 'red' : 'black' }}>{data.indexOf(item) === 0 ? '진료중' : '대기중'}</td>
                    </>
                )}
            </tr>
        ));

        for (let i = rows.length; i < 8; i++) { // 행이 8개 미만일 경우 빈 행을 추가하여 길이 유지
            rows.push(
                <tr key={`empty-${i}`}>
                    <td style={tdStyle}>&nbsp;</td>
                    <td style={tdStyle}>&nbsp;</td>
                </tr>
            );
        }

        return rows;
    };

    /* ----------------------------------------------- UI ------------------------------------------------ */

    return (
        <div style={{ background: 'linear-gradient(to bottom, rgb(160, 210, 255), #ffffff)', height: '30vh' }}>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', textAlign: 'left', padding: '2vh 2vw' }}>
                <h1 style={{ fontSize: '1.8rem' }}>병원관리 시스템</h1>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', flexGrow: 1, fontSize: '1.5rem' }}>
                    <div style={vertical}></div>
                    <p>예약관리</p>
                    <div style={vertical}></div>
                    <p>환자관리</p>
                    <div style={vertical}></div>
                    <p>병원통계</p>
                    <div style={vertical}></div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <p style={{ fontSize: '1rem', marginRight: '1vw' }}>사용자: 이름</p>
                    <button style={{ height: '3vh', marginTop: '2.1vh' }}>로그아웃</button>
                </div>
            </div>
            <hr />
            {/* 여기서부터 탑 바 아랫부분 */}
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', padding: '2vw' }}>
                <div style={{ width: '25%', textAlign: 'center' }}>
                    {/* 예약자 명단 테이블 */}
                    <h1>금일 예약자 명단</h1>
                    <div style={{ maxHeight: '50vh', overflowY: 'scroll', backgroundColor: 'solid #ccc' }}>
                        <table style={tableStyle}>
                            <thead>
                                <tr>
                                    <th style={thStyle}>이름</th>
                                    <th style={thStyle}>시간</th>
                                </tr>
                            </thead>
                            <tbody>
                                {renderRows(reservations)}
                            </tbody>
                        </table>
                    </div>
                    <button onClick={handleRegisterClick} disabled={!selectedReservation} style={{
                        ...buttonStyle,
                        color: selectedReservation ? 'black' : 'gray',
                        borderColor: selectedReservation ? 'black' : 'gray'
                    }}>접수</button>
                </div>
                <div style={{ width: '25%', textAlign: 'center' }}>
                    {/* 접수자 명단 테이블 */}
                    <h1>접수 명단</h1>
                    <div style={{ maxHeight: '50vh', overflowY: 'scroll' }}>
                        <table style={tableStyle}>
                            <thead>
                                <tr>
                                    <th style={thStyle}>이름</th>
                                    <th style={thStyle}>상태</th>
                                </tr>
                            </thead>
                            <tbody>
                                {renderRows(registrations, false)}
                            </tbody>
                        </table>
                    </div>
                    <button onClick={handleDeleteClick} disabled={!selectedRegistration} style={{
                        ...buttonStyle,
                        color: selectedRegistration ? 'black' : 'gray',
                        borderColor: selectedRegistration ? 'black' : 'gray'
                    }}>삭제</button>
                </div>
                {/* 도넛차트 생성 */}
                <DoughnutChart morning={10} afternoon={20} />
            </div>
        </div>
    );
};

export default DashBoard;

