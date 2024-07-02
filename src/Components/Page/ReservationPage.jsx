// 예약 관리 페이지
import React from 'react';
import TopBar from '../etc/topBar';
import { tableStyle, thStyle, tdStyle } from '../../styles/style';
import { reservationStore } from '../../store/store';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';
import AddResModal from '../Modal/ReservationManagement/AddResModal';
import useAddRes from '../../Hooks/ReservationManagement/useAddRes';
import useReservation from '../../Hooks/ReservationManagement/useReservation';
import useCancleRes from '../../Hooks/ReservationManagement/useCancelRes';
import CancleResModal from '../Modal/ReservationManagement/CancelResModal';


const ReservationPage = () => {
    const { reservationList } = reservationStore();
    const { showPopup, handlePopup, closePopup } = useAddRes();
    const { selectedDate, setSelectedDate } = useReservation();
    const formattedDate = format(selectedDate, 'yyyy-MM-dd');   // 사용자가 선택한 날짜의 데이터를 yyyy-MM-dd 형태로 포맷팅하여 저장
    const { showPopup:showPopup2, handlePopup:handlePopup2, closePopup:closePopup2} = useCancleRes();

    const timeSlot = [
        '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
        '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
        '15:00', '15:30', '16:00', '16:30', '17:00', '17:30'
    ];

    // 현재 날짜를 가져오고, 그 이전의 날짜를 비활성화하기 위해 minDate 변수 설정
    const currentDate = new Date();
    const minDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());

    return (
        <div>
            <TopBar />
            <div style={{ display: 'flex', alignItems: 'center'}}>
                <h2 style={{margin:'0 32vw 0 30vw'}}>&lt;{formattedDate}&gt;</h2>
                <h2>&lt;Calendar&gt;</h2>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <div style={{ width: '40%', height:'100%', margin: '0 2vw 0 2vw' }}>
                    <table style={{ ...tableStyle, borderCollapse: 'collapse', backgroundColor: 'white', width: '100%', height:'auto'}}>
                        <thead>
                            <tr>
                                <th style={{ ...thStyle, width: '20%' }}>예약시간</th>
                                <th style={{ ...thStyle, width: '40%' }}>이 름</th>
                                <th style={{ ...thStyle, width: '40%' }}>이 름</th>
                            </tr>
                        </thead>
                        <tbody>
                            {timeSlot.map((time, index) => (
                                <tr key={index}>
                                    <td style={tdStyle}>{time}</td>
                                    <td style={tdStyle}>
                                        {reservationList    // 해당 시간에 예약한 예약자를 판별
                                            .filter(reservation => reservation.reservationDate.includes(formattedDate + 'T' + time)) // 사용자가 선택한 날짜와 시간을 LocalDateTime 형태로 조합한 값을 포함한 예약자 선별
                                            .map((reservation, i) => (
                                                i === 0 ? <div key={i}>{reservation.name}</div> : null
                                            ))}
                                    </td>
                                    <td style={tdStyle}>
                                        {reservationList
                                            .filter(reservation => reservation.reservationDate.includes(formattedDate + 'T' + time))
                                            .map((reservation, i) => (
                                                i === 1 ? <div key={i}>{reservation.name}</div> : null
                                            ))}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div style={{ display: 'flex', width: '100%', margin: '1vh 0' }}>
                        <button onClick={handlePopup} style={{ flexGrow: 1, height: '4vh', margin: '0 0.5vw' }}>예약 등록</button>
                        <button onClick={handlePopup2} style={{ flexGrow: 1, height: '4vh', margin: '0 0.5vw' }}>예약 조회(삭제)</button>
                    </div>
                </div>
                <div style={{ width: '20%', height: '10%' }}>
                <DatePicker
                        selected={selectedDate}
                        onChange={(date) => setSelectedDate(date)}
                        inline 
                        minDate={minDate}
                    />  {/*날짜를 선택하면 해당 날짜가 selectedDate에 저장. */}
                </div>
            </div>
            <AddResModal show={showPopup} onClose={closePopup}></AddResModal>
            <CancleResModal show={showPopup2} onClose={closePopup2}></CancleResModal>
        </div>
    );
};

export default ReservationPage;
