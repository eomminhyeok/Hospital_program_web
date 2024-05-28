import { useState } from "react";

const usePatient = () => {      // 환자 이름 검색 처리
    const [searchName, setSearchName] = useState(''); // 환자이름 검색결과 저장   

    // const searchPatient = () => { 서버에서 useName에 해당하는 환자 리스트를 받아 patientList에 저장해야함

    // }
    
    return{
        // searchPatient,
        searchName,
        setSearchName,
    }
};

export default usePatient;