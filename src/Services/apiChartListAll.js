// 모든 환자 진료기록 리스트
import axios from "axios";

export const apiChartListAll = async () => {
    try {
        const response = await axios.post("http://localhost:8080/api/chartListAll");

        return {
            data: response.data,
            status: response.status
        };
    } catch (error) {
        throw error;
    }
}
