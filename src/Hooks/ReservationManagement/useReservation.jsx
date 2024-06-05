import { useState } from "react";

const useReservation = () => {   // 예약선택 날짜 및 시간 저장
    const [selectedDate, setSelectedDate] = useState(new Date());
    
    return{
        selectedDate, setSelectedDate,
    }
}

export default useReservation;