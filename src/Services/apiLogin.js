// 로그인 서비스 파일

import axios from "axios";

export const LoginService = async (id, password) => {
    try {
        console.log(id, password);
        const response = await axios.post("http://localhost:8080/api/login", {id, password}, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        
        console.log(response.status);
        console.log(response.data);

        return {
            data: response.data,
            status: response.status
        };
        
    } catch (error) {
        throw error;
    }
};