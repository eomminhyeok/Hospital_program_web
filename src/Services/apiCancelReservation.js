// 예약 취소

import axios from "axios";

export const apiCancelReservation = async (reservationNum) => {    // 예약번호 서버로 전송
    try {
        console.log(reservationNum);
        const response = await axios.post("http://localhost:8080/api/cancelReservation", {reservationNum} , {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        
        return {
            data: response.data,
            status: response.status
        };
        
    } catch (error) {
        throw error;
    }
};