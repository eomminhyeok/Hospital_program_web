import { useState } from "react";

const usePatient = () => {      // 환자 이름 검색 처리
    const [useName, setUseName] = useState('');   
    
    return{
        useName,
        setUseName,
    }
};

export default usePatient;