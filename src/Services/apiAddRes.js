// 예약 등록 정보 서버로 전송

import axios from "axios";

export const apiAddRes = async (reservation) => {
    console.log(reservation);
    try { 
        const response = await axios.post("http://localhost:8080/api/addReservation", reservation , {
            headers: {
                'Content-Type' : 'application/json'
            }
        });

        return {
            reservations: response.data.reservations,
            reservationsToday: response.data.reservationsToday,
            status: response.status,
        };
        
    } catch (error) {
        throw error;
    }
}