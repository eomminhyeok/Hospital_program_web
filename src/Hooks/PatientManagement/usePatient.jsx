import { useState } from "react";
import { SearchService } from "../../Services/apiSearch";
import { patientStore } from "../../store/store";


const usePatient = () => {      // 환자 이름 검색 처리
    const [name, setName] = useState(''); // 환자이름 검색결과 저장
    const { setPatientList } = patientStore();  
    const [showSearchPopup, setShowSearchPopup] = useState(false);

    const closeSearchPopup = () => {
        setShowSearchPopup(false);
    }


    const searchPatient = async () => {       // 서버에서 useName에 해당하는 환자 리스트를 받아 patientList에 저장해야함
        try {
            const response = await SearchService(name);
            if (response.status === 200) {
                setPatientList(response.data);
              } 
            } catch (error) {
                if (error.response) {
                    console.log("에러 상태 코드:", error.response.status);
                }
                console.log("환자 조회 실패");
                setShowSearchPopup(true);
          }
    }
    
    return{
        closeSearchPopup,
        showSearchPopup,
        searchPatient,
        name,
        setName,
    }
};

export default usePatient;