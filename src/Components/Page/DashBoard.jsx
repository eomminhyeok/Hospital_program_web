import React, { useEffect } from 'react';
import { tableStyle, thStyle, buttonStyle } from '../../styles/style';
import DoughnutChart from '../etc/doughnutChart';
import TopBar from '../etc/topBar';
import useDashBoard from '../../Hooks/useDashBoard'; // useDashBoard 훅 임포트
import { countsStore } from '../../store/store';
import useReservationCount from '../etc/useReservationCount';

const DashBoard = () => {
    const { counts } = countsStore();
    const { calculateCounts } = useReservationCount();

    const {
        reservations,
        registrations,
        selectedReservation,
        selectedRegistration,
        handleRegisterClick,
        handleDeleteClick,
        renderRows,
    } = useDashBoard();

    useEffect(() => {
        calculateCounts(); // reservationList가 변경될 때마다 counts를 업데이트하기 위해 calculateCounts 호출
    }, [calculateCounts]); // useEffect의 의존성 배열에 calculateCounts 추가

    return (
        <div>
            <TopBar/>

            {/* 탑 바 아래*/}
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', padding: '2vw' }}>
                <div style={{ width: '25%', textAlign: 'center' }}>
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
                        ...buttonStyle, width: '100%', height: '4vh', borderRadius: '0.3vw',
                        color: selectedReservation ? 'black' : 'gray',
                        borderColor: selectedReservation ? 'black' : 'gray'
                    }}>접수</button>
                </div>
                <div style={{ width: '25%', textAlign: 'center' }}>
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
                        ...buttonStyle, width: '100%', height: '4vh', borderRadius: '0.3vw',
                        color: selectedRegistration ? 'black' : 'gray',
                        borderColor: selectedRegistration ? 'black' : 'gray'
                    }}>삭제</button>
                </div>
                <DoughnutChart morning={counts.morning} afternoon={counts.afternoon} />
            </div>
        </div>
    );
};

export default DashBoard;
