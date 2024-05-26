import React from 'react';
import Modal from 'react-modal';
import useChartRegi from '../../Hooks/useChartRegi';

const ChartRegiModal = ( {show, onClose }) => {
    const { chartName, setChartName, chartFront, setChartFront, chartBack, setChartBack, 
        chartDate, setChartDate, diagnosis, setDiagnosis, notes, setNotes, } = useChartRegi();

    const customStyles = { // 모달 스타일
        content: {
          width: '30%',
          height: 'fit-content',
          top: '50%', // 모달이 화면 상단에서 50% 위치
          left: '50%', // 모달이 화면 왼쪽에서 50% 위치
          transform: 'translate(-50%, -50%)', // 모달을 수평 및 수직으로 정확히 가운데로 이동
          padding: '20px',
          textAlign: 'center',
          zIndex: 1000 // z-index를 설정하여 모달이 최상위에 위치
        },
        overlay: {
          zIndex: 1000 // content와 overlay 두 영역 모두에서 최상위에 위치하게 하여 모든 요소에서 최상위에 위치하도록 보장
        }
      };

    return(
        <Modal isOpen={show} onRequestClose={onClose} style={customStyles}>
            <div>
                <p>x</p>
            </div>
        </Modal>
    );
};

export default ChartRegiModal;