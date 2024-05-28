import React, { useState } from 'react';
import TopBar from '../etc/topBar';
import { tableStyle, thStyle } from '../../styles/style';
import { reservationStore } from '../../store/store';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';

const ReservationPage = () => {
    const { reservationList } = reservationStore();
    const [selectedDate, setSelectedDate] = useState(new Date());
    const formattedDate = format(selectedDate, 'yyyy-MM-dd');

    const timeSlot = [
        '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
        '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
        '15:00', '15:30', '16:00', '16:30', '17:00', '17:30'
    ];

    return (
        <div>
            <TopBar />
            <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center'}}>
                <h2>&lt;{formattedDate}&gt;</h2>
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
                                    <td style={{ border: '1px solid #ccc' }}>{time}</td>
                                    <td style={{ border: '1px solid #ccc' }}>
                                        {reservationList
                                            .filter(reservation => reservation.DateTime.includes(time))
                                            .map((reservation, i) => (
                                                i === 0 ? <div key={i}>{reservation.name}</div> : null
                                            ))}
                                    </td>
                                    <td style={{ border: '1px solid #ccc' }}>
                                        {reservationList
                                            .filter(reservation => reservation.DateTime.includes(time))
                                            .map((reservation, i) => (
                                                i === 1 ? <div key={i}>{reservation.name}</div> : null
                                            ))}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div style={{ display: 'flex', width: '100%', margin: '1vh 0' }}>
                        <button style={{ flexGrow: 1, height: '4vh', margin: '0 0.5vw' }}>추가</button>
                        <button style={{ flexGrow: 1, height: '4vh', margin: '0 0.5vw' }}>삭제</button>
                    </div>
                </div>
                <div style={{ width: '40%', height: '80%' }}>
                    <DatePicker
                        selected={selectedDate}
                        onChange={(date) => setSelectedDate(date)}
                        inline  // 이 부분이 누락되어 있었습니다.
                        style={{ width: '1%', height: '1%' }}

                    />
                </div>
            </div>
        </div>
    );
};

export default ReservationPage;
