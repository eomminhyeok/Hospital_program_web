// 환자 검색

import axios from "axios";

export const SearchService = async (name) => {
    try {
        console.log(name);
        const response = await axios.post("http://localhost:8080/api/search", {name} , {
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