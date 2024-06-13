// 회원가입 서비스 파일

import axios from "axios";

export const apiSign = async (userInfo) => {
    try {
        console.log(userInfo);
        const response = await axios.post("http://localhost:8080/api/sign", userInfo, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        
        return response.data;
        
    } catch (error) {
        throw error;
    }
};