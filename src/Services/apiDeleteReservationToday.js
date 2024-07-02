// 대쉬보드에서 환자 접수시 해당 환자의 예약번호를 서버로 전송, 환자가 접수를 하였으므로 금일 예약 목록에서 삭제함

import axios from "axios";

export const apiDeleteReservationToday = async (reservationNum) => {
    console.log(reservationNum);
    try { 
        const response = await axios.post("http://localhost:8080/api/cancelReservation", {reservationNum}, {
            headers: {
                'Content-Type' : 'application/json'
            }
        });

        return {
            reservations: response.data.reservations,
            reservationsToday: response.data.reservationsToday,
            status: response.status
        };
        
    } catch (error) {
        throw error;
    }
}