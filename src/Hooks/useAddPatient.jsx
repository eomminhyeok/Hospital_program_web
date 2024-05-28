import { useState } from "react";

const useAddPatient = () => {
    const [formData, setFormData] = useState({
        name: '',
        frontRRN: '',
        backRRN: '',
        sex: '',
        address: '',
        phone: '',
    });

    const [showPopup, setShowPopup] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleCancel = () => {
        setFormData({
            name: '',
            frontRRN: '',
            backRRN: '',
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

    return {
        formData, setFormData,
        handleChange,
        handleCancel,
        showPopup,
        handlePopup,
        closePopup
    };
};

export default useAddPatient;