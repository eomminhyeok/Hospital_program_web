// 진료 등록

import axios from "axios";

export const ChartRegiService = async (chart) => {
    try {
        console.log(chart);
        const response = await axios.post("http://localhost:8080/api/chart", chart, {
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