import { useState } from "react";

const useRegistration = () => {
    const [ name, setName ] = useState('');
    const [ frontRRN, setFrontRRN ] = useState('');
    const [ backRRN, setBackRRN ] = useState('');
    const [ sex, setSex ] = useState('');
    const [ address, setAddress ] = useState();
    const [ phone, setPhone ] = useState();

    return{
        name, setName,
        frontRRN, setFrontRRN,
        backRRN, setBackRRN,
        sex, setSex,
        address, setAddress,
        phone, setPhone,
    };
};

export default useRegistration;