import { useState } from "react";

const usePatient = () => {
    const [useName, setUseName] = useState('');   
    const [showPopup, setShowPopup] = useState(false);
  
    const handlePopup = () => {
      setShowPopup(true);
    };
  
    const closePopup = () => {
      setShowPopup(false);
    };
    
    return{
        useName,
        setUseName,
        handlePopup,
        showPopup,
        closePopup
    }
};

export default usePatient;