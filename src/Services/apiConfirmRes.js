// 예약 등록 정보 서버로 전송

import axios from "axios";

export const apiConfirmRes = async (reservation) => {
    console.log(reservation);
    try { 
        const response = await axios.post("http://localhost:8080/api/addReservation", reservation , {
            headers: {
                'Content-Type' : 'application/json'
            }
        });

        return {
            data: response.data,
            status: response.status,
            message: response.message
        };
        
    } catch (error) {
        throw error;
    }
}