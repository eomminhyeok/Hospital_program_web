import TopBar from '../etc/topBar';
import usePatient from '../../Hooks/usePatient';
import { tableStyle, thStyle} from '../../styles/style';
import { patientStore } from '../../store/store';
import RegistrationModal from '../Modal/RegistrationModal';
import ChartRegiModal from '../Modal/ChartRegiModal';
import ChartListModal from '../Modal/ChartListModal';
import useChartRegi from '../../Hooks/useChartRegi';
import useRegistration from '../../Hooks/useRegistration';
import useChartList from '../../Hooks/useChartList';


const PatientPage = () => {
    const { useName, setUseName} = usePatient();  // 환자 이름 저장
    const { showPopup: showPatientPop, handlePopup: handlePatientPop, closePopup:closePatientPop} = useRegistration(); // 환자등록 훅
    const { showPopup: showChartPop, handlePopup: handleChartPop, closePopup: closeChartPop, formData, handleChange, handleCancel} = useChartRegi(); // 진료등록 훅
    const { showPopup: showListPop, closePopup: closeListPop, getPatientNum} = useChartList();
    const { patientList } = patientStore();

    return (
        <div>
            <TopBar />
            <div style={{ display: 'flex', flexDirection: 'row', width: 'auto', height: '5vh', padding: '1vh 2vw 1vh 2vw' }}>
                <h2 style={{ margin: '0 1vw 0 0' }}>환자 검색</h2>
                <input type='text' value={useName} onChange={(e) => setUseName(e.target.value)}
                    style={{ height: '3vh', width: '10vw', fontSize: '1rem', marginRight: '1vw' }} placeholder="이름을 입력하세요"></input>
                <button style={{ height: '4vh', width: '4vw' }}>검색</button>
                <button  onClick={ handlePatientPop } style={{ height: '4vh', width: '6vw', marginLeft: 'auto' }}>환자등록</button>
            </div>
            <div style={{ maxHeight: '65vh', overflowY: 'scroll', backgroundColor: 'solid #ccc' }}>
                <table style={{ ...tableStyle, borderCollapse: 'collapse', backgroundColor: 'white'}}>
                    <thead> 
                        <tr>
                            <th style={thStyle}>환자번호</th>
                            <th style={thStyle}>이 름</th>
                            <th style={thStyle}>주민등록번호(앞)</th>
                            <th style={thStyle}>주민등록번호(뒤)</th>
                            <th style={thStyle}>성 별</th>
                            <th style={thStyle}>주 소</th>
                            <th style={thStyle}>휴대폰번호</th>
                            <th style={thStyle}>진료기록</th>
                            <th style={thStyle}>진료등록</th>
                        </tr>
                    </thead>
                    <tbody>
                    {patientList.map((patient, index) => (
                            <tr key={index}>
                                <td style={{border : '1px solid #ccc'}}>{patient.patientNum}</td>
                                <td style={{border : '1px solid #ccc'}}>{patient.name}</td>
                                <td style={{border : '1px solid #ccc'}}>{patient.frontRRN}</td>
                                <td style={{border : '1px solid #ccc'}}>{patient.backRRN}</td>
                                <td style={{border : '1px solid #ccc'}}>{patient.sex}</td>
                                <td style={{border : '1px solid #ccc'}}>{patient.address}</td>
                                <td style={{border : '1px solid #ccc'}}>{patient.phone}</td>
                                <td style={{border : '1px solid #ccc'}}><button onClick={() => getPatientNum(patient.patientNum)}>상세보기</button></td>
                                <td style={{border : '1px solid #ccc'}}><button onClick={() => handleChartPop(patient)}>등 록</button></td>
                                {/* 1.useChartRegi의 handleChartPop으로 해당 행의 환자정보를 전송 */}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <RegistrationModal show={ showPatientPop } onClose={closePatientPop}></RegistrationModal>
            <ChartRegiModal show={ showChartPop } onClose={closeChartPop} formData={formData} // 3.useChartRegi의 formData와 핸들러들을 Modal로 전달
             handleChange={handleChange} handleCancel={handleCancel}></ChartRegiModal>
            <ChartListModal show={showListPop} onClose={closeListPop}></ChartListModal>
        </div>
    )
};

export default PatientPage;