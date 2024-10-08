import { useState } from 'react';
import { tdStyle } from '../styles/style';
import { reservationStore } from '../store/store';
import { apiDeleteReservationToday } from '../Services/apiDeleteReservationToday';

const useDashBoard = () => {
    const { reservationTodayList, setReservationTodayList, registrations, setRegistrations } = reservationStore(); // Zustand를 이용한 상태 관리

    const [selectedReservation, setSelectedReservation] = useState(null); // 선택된 예약자
    const [selectedRegistration, setSelectedRegistration] = useState(null); // 선택된 접수자


    const handleReservationClick = (reservation) => { // 사용자가 클릭한 환자를 매개변수로 받아와 selectedReservation에 저장
        setSelectedReservation(reservation);
    };

    const handleRegisterClick = async () => {
        if (selectedReservation) {  // 사용자가 현재 선택한 예약자가 있으면 접수버튼 클릭시 registrations에 접수
            setRegistrations([...registrations, selectedReservation]);
            setReservationTodayList(reservationTodayList.filter((r) => r.reservationNum !== selectedReservation.reservationNum)); // reservationTodayList에서 접수한 예약자 삭제
            // 재로그인시 reservationTodayList가 다시 초기화 되기때문에 실제로는 서버에 reservationNum을 전송해 데이터베이스에서 삭제해야함
            try{
                const response = await apiDeleteReservationToday(selectedReservation.reservationNum);
                if (response.status === 200){
                    console.log(response.status);
                    setReservationTodayList(response.reservationsToday);
                    console.log('접수 성공');
                }
                else {
                    console.log(response.status);
                    console.log('접수 실패');
                }
            }catch (error){
                console.error('접수 실패: ', error);
            }
            
            setSelectedReservation(null); // 현재 선택된 예약자 null로 초기화
        }
    };

    const handleRegistrationClick = (registration) => { // 사용자가 클릭한 접수 환자를 매개변수로 받아와 selectedRegistration에 저장
        setSelectedRegistration(registration);
    };

    const handleDeleteClick = () => {
        if (selectedRegistration) { // 현재 selectedRegistration에 선택한 환자가 있으면 삭제
            setRegistrations(registrations.filter((r) => r.reservationNum !== selectedRegistration.reservationNum));
            setSelectedRegistration(null); // 접수자 선택 null로 초기화
        }
    };

    // 시:분 형식으로 시간을 포맷하는 함수
    const formatTime = (time) => {
        const date = new Date(time);
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`;
    };

    const renderRows = (reservationToday, isReservation = true) => {    // td 랜더링 메서드, 
        const rows = reservationToday.map((reservation) => (
            <tr
                key={reservation.reservationNum}
                onClick={() => isReservation ? handleReservationClick(reservation) : handleRegistrationClick(reservation)}
                style={{
                    backgroundColor: (isReservation ? selectedReservation?.reservationNum : selectedRegistration?.reservationNum) === reservation.reservationNum ? 'yellow' : 'white',
                    cursor: 'pointer',
                }}
            >
                {isReservation ? (
                    <>
                        <td style={{ ...tdStyle }}>{reservation.name}</td>
                        <td style={{ ...tdStyle }}>{formatTime(reservation.reservationDate)}</td>
                    </>
                ) : (
                    <>
                        <td style={{ ...tdStyle }}>{reservation.name}</td>
                        <td style={{ ...tdStyle, color: reservationToday.indexOf(reservation) === 0 ? 'red' : 'black' }}>{reservationToday.indexOf(reservation) === 0 ? '진료중' : '대기중'}</td>
                    </>
                )}
            </tr>
        ));

        // 최소 20개의 빈 행을 추가하여 길이 유지
        const emptyRowsCount = Math.max(20 - rows.length, 0);
        for (let i = 0; i < emptyRowsCount; i++) {
            rows.push(
                <tr key={`empty-${i}`}>
                    <td style={{ ...tdStyle }}>&nbsp;</td>
                    <td style={{ ...tdStyle }}>&nbsp;</td>
                </tr>
            );
        }

        return rows;
    };

    return {
        reservations: reservationTodayList, // 예약 목록을 reservationTodayList로 대체
        registrations,
        selectedReservation,
        selectedRegistration,
        handleRegisterClick,
        handleDeleteClick,
        renderRows,
    };
};

export default useDashBoard;
