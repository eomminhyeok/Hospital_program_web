export const tableStyle = {
    borderCollapse: 'separate',
    width: '100%',
    textAlign: 'center',
    border: '0.1vw #f5f5f5',
    borderRadius: '0.5vw',
    backgroundColor: '#f5f5f5',
    padding: '1vw'
};

export const tdStyle = {
    border: '0.1vw solid #ccc',
};

export const thStyle = {
    padding: '1vh',
    textAlign: 'center',
    position: 'sticky',
    top: 0,
    backgroundColor: 'rgb(220, 255, 220)',
    zIndex: 1,
    border: '0.1vw solid #ccc',

};

export const buttonStyle = { // shortButton button
    width: '15%',
    height: '4vh',
    // backgroundColor: 'white',
    border: '0.1vw solid #333333', // 변경된 부분
    // color: '#333333',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '1vw',
    cursor: 'pointer',
    borderRadius: '0.15vw',  // 덜 둥근 모서리
    transitionDuration: '0.4s',
    fontFamily: 'Arial, sans-serif',
};

export const modalStyle = { // 모달 스타일
    content: {
        width: '50%',
        height: 'fit-content',
        top: '50%', // 모달이 화면 상단에서 50% 위치
        left: '50%', // 모달이 화면 왼쪽에서 50% 위치
        transform: 'translate(-50%, -50%)', // 모달을 수평 및 수직으로 정확히 가운데로 이동
        padding: '20px',
        textAlign: 'left',
        zIndex: 1000 // z-index를 설정하여 모달이 최상위에 위치
    },
    overlay: {
        zIndex: 1000 // content와 overlay 두 영역 모두에서 최상위에 위치하게 하여 모든 요소에서 최상위에 위치하도록 보장
    }
};