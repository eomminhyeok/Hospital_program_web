import { useState } from "react";
import { AddPatientnService } from "../../Services/apiAddPatient";

const useAddPatient = () => {
    const [patient, setPatient] = useState({
        patientnum: 1, 
        name: '',
        frontrrn: '',
        backrrn: '',
        sex: '',
        address: '',
        phone: '',
    });

    const [showPopup, setShowPopup] = useState(false); // 환자등록 모달 컨트롤 변수

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPatient({ ...patient, [name]: value });
    };

    const handleCancel = () => {
        setPatient({
            patientnum: 1, // 8자리 고유한 랜덤 숫자 재설정
            name: '',
            frontrrn: '',
            backrrn: '',
            sex: '',
            address: '',
            phone: '',
        });
    };

    const handlePopup = () => {
        setShowPopup(true);
    };
    
    const closePopup = () => {
        setShowPopup(false);
    };

    const handleRegistration = async () => {    // 환자 등록
        try {
            const response = await AddPatientnService(patient); 
            if(response.status === 200){
                console.log(response.status);
                console.log('환자등록 성공:');
                setPatient({
                    patientnum: 1, 
                    name: '',
                    frontrrn: '',
                    backrrn: '',
                    sex: '',
                    address: '',
                    phone: '',
                });
            }
        } catch (error) {
            console.error('시스템 에러:', error);
        }
    }

    return {
        handleRegistration,
        patient, setPatient,
        handleChange,
        handleCancel,
        showPopup,
        handlePopup,
        closePopup
    };

    
};

export default useAddPatient;
