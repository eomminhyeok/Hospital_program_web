import { useState } from 'react';

const useChartRegi = () => {
  const [chartName, setChartName] = useState('');
  const [chartFront, setChartFront] = useState('');
  const [chartBack, setChartBack] = useState('');
  const [chartDate, setChartDate] = useState('');
  const [diagnosis, setDiagnosis] = useState('');
  const [notes, setNotes] = useState('');
  const [showPopup, setShowPopup] = useState(false);


  const handlePopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };


  return {
    chartName, setChartName,
    chartFront, setChartFront,
    chartBack, setChartBack,
    chartDate, setChartDate,
    diagnosis, setDiagnosis,
    notes, setNotes,
    showPopup,
    handlePopup,
    closePopup
  }
}

export default useChartRegi;