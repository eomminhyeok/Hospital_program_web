// 선택 환자 진료기록 리스트
import axios from "axios";

export const apiChartList = async (patientNum) => {
    try {
        const response = await axios.post("http://localhost:8080/api/chartList", { patientNum }, {
            headers: {
                "Content-Type": 'application/json'
            }
        });

        return {
            data: response.data,
            status: response.status
        };
    } catch (error) {
        throw error;
    }
}