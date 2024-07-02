import { useState } from 'react';
import { chartStore } from '../store/store';
import { apiChartListAll } from '../Services/apiChartListAll';

const useTopBar = () => {
    const { setChartList } = chartStore();
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

    const handlePopup = () => {
        setShowPopup(true);
    };

    const closePopup = () => {
        setShowPopup(false);
    };

    return {
        getChartList,
        handlePopup,
        showPopup,
        closePopup
    }
}

export default useTopBar;