// 금일 예약자 목록 리퀘스트

import axios from "axios";

export const apiReservationToday = async (id, password) => {
    try {
        console.log(id, password);
        const response = await axios.post("http://localhost:8080/api/reservationTodayList");
        
        console.log(response.status);
        console.log(response.data);


        return {
            reservationsToday: response.data.reservationsToday,
        };
        
    } catch (error) {
        throw error;
    }
};