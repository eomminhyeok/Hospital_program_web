// 환자 관리 페이지
import TopBar from '../etc/topBar';
import usePatient from '../../Hooks/PatientManagement/usePatient';
import { tableStyle, thStyle} from '../../styles/style';
import { patientStore } from '../../store/store';
import RegistrationModal from '../Modal/PatientManagement/AddPatientModal';
import ChartRegiModal from '../Modal/PatientManagement/ChartRegiModal';
import ChartListModal from '../Modal/PatientManagement/ChartListModal';
import useChartRegi from '../../Hooks/PatientManagement/useChartRegi';
import useAddPatient from '../../Hooks/PatientManagement/useAddPatient';
import useChartList from '../../Hooks/PatientManagement/useChartList';
import ErrorModal from '../Modal/ErrorModal';


const PatientPage = () => {
    const { name, setName, searchPatient, showSearchPopup, closeSearchPopup } = usePatient();  // 검색한 환자 이름 변수
    const { showPopup: showPatientPop, handlePopup: handlePatientPop, closePopup:closePatientPop} = useAddPatient(); // 환자등록 훅
    const { showPopup: showChartPop, handlePopup: handleChartPop, closePopup: closeChartPop, formData, handleChange, handleCancel} = useChartRegi(); // 진료등록 훅
    const { showPopup: showListPop, closePopup: closeListPop, getPatientNum} = useChartList();
    const { patientList } = patientStore();

    return (
        <div>
            <TopBar />
            <div style={{ display: 'flex', flexDirection: 'row', width: 'auto', height: '5vh', padding: '1vh 2vw 1vh 2vw' }}>
                <h2 style={{ margin: '0 1vw 0 0' }}>환자 검색</h2>
                <input type='text' value={name} onChange={(e) => setName(e.target.value)}
                    style={{ height: '3vh', width: '10vw', fontSize: '1rem', marginRight: '1vw' }} placeholder="이름을 입력하세요"></input>
                <button onClick={()=>searchPatient()} style={{ height: '4vh', width: '4vw' }}>검색</button>
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
                                {/* 1.useChartRegi의 handlePopup으로 해당 행의 환자정보를 전송 */}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <RegistrationModal show={ showPatientPop } onClose={closePatientPop}></RegistrationModal>
            <ChartRegiModal show={ showChartPop } onClose={closeChartPop} formData={formData} // 3.useChartRegi의 formData와 핸들러들을 Modal로 전달
             handleChange={handleChange} handleCancel={handleCancel}></ChartRegiModal>
            <ChartListModal show={showListPop} onClose={closeListPop}></ChartListModal>
            <ErrorModal show={showSearchPopup} onClose={closeSearchPopup} text={"환자 조회 실패"} message={"해당 환자를 찾을 수 없습니다."} ></ErrorModal> 
        </div>
    )
};

export default PatientPage;