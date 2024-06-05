// 진료기록에서 상세보기 모달
import React from 'react';
import Modal from 'react-modal';
import useChartDetail from '../../../Hooks/PatientManagement/useChartDetail';
import { chartStore } from '../../../store/store';
import { tableStyle, thStyle } from '../../../styles/style';
import ChartDetailModal from './ChartDetailModal';

const ChartListModal = ({ show, onClose }) => {
    const { formData, showPopup, closePopup, getChartNum } = useChartDetail();
    const { chartList } = chartStore();

    const modalStyle = {
        content: {
            width: '70%',
            height: '80%',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            padding: '3vh 7vw 3vh 7vw',
            textAlign: 'center',
            zIndex: 1000,
        },
        overlay: {
            zIndex: 1000,
        },
    };


    return (
        <Modal isOpen={show} onRequestClose={onClose} style={modalStyle}>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', width: 'auto', height: '5vh', marginBottom: '7vh' }}>
                <h2>&lt;진료 기록&gt;</h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ maxHeight: '50vh', overflowY: 'scroll', backgroundColor: 'solid #ccc', width: '100%' }}>
                    <table style={{ ...tableStyle, borderCollapse: 'collapse', backgroundColor: 'white', width: '100%' }}>
                        <thead>
                            <tr>
                                <th style={thStyle}>진료번호</th>
                                <th style={thStyle}>이 름</th>
                                <th style={thStyle}>주민등록번호(앞)</th>
                                <th style={thStyle}>주민등록번호(뒤)</th>
                                <th style={thStyle}>진료기록</th>
                                <th style={thStyle}>진료날짜</th>
                            </tr>
                        </thead>
                        <tbody>
                            {chartList.map((chart, index) => (
                                <tr key={index}>
                                    <td style={{ border: '1px solid #ccc' }}>{chart.chartNum}</td>
                                    <td style={{ border: '1px solid #ccc' }}>{chart.name}</td>
                                    <td style={{ border: '1px solid #ccc' }}>{chart.frontRRN}</td>
                                    <td style={{ border: '1px solid #ccc' }}>{chart.backRRN}</td>
                                    <td style={{ border: '1px solid #ccc' }}><button onClick={() => getChartNum(chart.chartNum)}>상세보기</button></td>
                                    <td style={{ border: '1px solid #ccc' }}>{chart.chartDate}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div style={{ marginTop: '16px' }}>
                    <button onClick={()=>onClose()} style={{ width: '15vw', height: '3.5vh' }}>확인</button>
                </div>
                <ChartDetailModal show={showPopup} onClose={closePopup} formData={formData}></ChartDetailModal>
            </div>
        </Modal>
    );
};

export default ChartListModal;