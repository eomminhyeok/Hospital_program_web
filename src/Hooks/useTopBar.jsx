import { useState } from 'react';
import { chartStore, reservationStore } from '../store/store';
import { apiChartListAll } from '../Services/apiChartListAll';
import { apiReservationToday } from '../Services/apiReservationToday';

const useTopBar = () => {
    const { setChartList } = chartStore();
    const { setReservationTodayList } = reservationStore();
    const [ showPopup, setShowPopup ] = useState(false);

    const getChartList = async () => {
        try {
            const response = await apiChartListAll();
            if (response.status === 200) {
                setChartList(response.data);
                console.log(response.status);
                console.log(response.data);
                console.log("진료기록 불러오기 성공");
            }
            else {
                console.log(response.status);
                console.log("진료기록 불러오기 실패");
            }
        } catch (error) {
            console.log(error);
        }
    }

    const getReservationTodayList = async () => { // 금일 예약 리스트 요청
        try {
            const response = await apiReservationToday();
            if (response.status === 200) {
                console.log(response.status);
                setReservationTodayList(response.reservationsToday);
                console.log("예약기록 불러오기 성공");
            }
            else {
                console.log(response.status);
                console.log("예약기록 불러오기 실패");
            }
        } catch (error) {
            console.log(error);
        }
    }

    const handlePopup = () => {
        setShowPopup(true);
    };

    const closePopup = () => {
        setShowPopup(false);
    };

    return {
        getChartList,
        getReservationTodayList,
        handlePopup,
        showPopup,
        closePopup
    }
}

export default useTopBar;