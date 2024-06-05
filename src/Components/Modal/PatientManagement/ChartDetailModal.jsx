// 진료 기록 -> 상세보기 -> 환자진료 기록 리스트에서 상세보기 버튼 이벤트 모달
import Modal from 'react-modal';

const ChartDetailModal = ({ show, onClose, formData, handleChange}) => {

    const modalStyle = {
        content: {
            width: '50%',
            height: '80%',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            padding: '3vh 7vw 3vh 7vw',
            textAlign: 'left',
            zIndex: 1000,
        },
        overlay: {
            zIndex: 1000,
        },
    };

    const textArrayStyle = {
            display: 'flex',
            flexDirection: 'row',
            marginBottom: '5vh',
    };

    return (
        <Modal isOpen={show} onRequestClose={onClose} style={modalStyle}>
            <h1 style={{display: 'flex', justifyContent: 'center'}}> &lt;진료기록&gt; </h1>  {/* &lt; = '<', $gt; = '>' 표현 */}
            <hr style={{marginBottom:'5vh'}}></hr>
            <div>
            <div style={textArrayStyle}>
                    <p style={{margin: '0 1vw 0 0'}}>진료번호 :</p>
                    <input
                        type="text"
                        name="chartNum"
                        value={formData.chartNum}
                        onChange={handleChange}
                        style={{height: '2vh'}}
                        disabled
                    />
                </div>
            <div style={textArrayStyle}>
                    <p style={{margin: '0 1vw 0 0'}}>환자번호 :</p>
                    <input
                        type="text"
                        name="patientNum"
                        value={formData.patientNum}
                        onChange={handleChange}
                        style={{height: '2vh'}}
                        disabled
                    />
                </div>
                <div style={textArrayStyle}>
                    <p style={{margin: '0 1vw 0 0'}}>이 름 :</p>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        style={{height: '2vh'}}
                        disabled
                    />
                </div>
                <div style={textArrayStyle}>
                    <p style={{margin: '0 1vw 0 0'}}>주민등록번호 :</p>
                    <input
                        type="text"
                        name="frontRRN"
                        value={formData.frontRRN}
                        onChange={handleChange}
                        style={{height: '2vh', width: '6vw'}}
                        disabled
                    />
                    -
                    <input
                        type="text"
                        name="backRRN"
                        value={formData.backRRN}
                        onChange={handleChange}
                        style={{height: '2vh', width: '6vw'}}
                        disabled
                    />
                </div>
                <div style={textArrayStyle}>
                    <p style={{margin: '0 1vw 0 0'}}>진료날짜 :</p>
                    <input
                        type="text"
                        name="chartDate"
                        value={formData.chartDate}
                        onChange={handleChange}
                        style={{height: '2vh'}}
                        disabled
                    />
                </div>

                <div style={textArrayStyle}>
                    <p style={{margin: '0 1vw 0 0'}}>진단명 :</p>
                    <input
                        type="text"
                        name="diagnosis"
                        value={formData.diagnosis}
                        onChange={handleChange}
                        style={{height: '2vh'}}
                    />
                </div>

                <div>
                    <p>진료내용 :</p>
                    <textarea
                        name="notes"
                        value={formData.notes}
                        onChange={handleChange}
                        style={{ height: '20vh', width: '50vw' }}
                    />
                </div>

                <div style={{display:'flex', flexDirection:'row', justifyContent:'center', marginTop: '3vh'}}>
                    <button onClick={()=>onClose()} style={{width:'15vw', height: '3.5vh'}}>확인</button>
                </div>

            </div>
        </Modal>
    );
};

export default ChartDetailModal;
