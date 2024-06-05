// 환자 등록

import axios from "axios";

export const AddPatientnService = async (patient) => {
    try {
        console.log(patient);
        const response = await axios.post("http://localhost:8080/api/patient", patient, {
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