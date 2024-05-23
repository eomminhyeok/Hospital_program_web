export const verticalLine = (height) => ({
    borderRight: '0.1vw solid black',
    width: '0.001vw',
    height: height,
    margin: '0 1vw' // 각 세로 선과 요소 사이의 간격 조절
});

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
    padding: '1vh',
    textAlign: 'center',
    border: '0.1vw solid #ccc',
    borderRadius: '0.5vw',
};

export const thStyle = {
    ...tdStyle,
    position: 'sticky',
    top: 0,
    backgroundColor: '#f2f2f2',
    zIndex: 1,
    border: '0.1vw solid #ccc',
    borderRadius: '0.5vw',
};

export const buttonStyle = {
    marginTop: '1vh',
    width: '100%',
    height: '4vh',
    backgroundColor: 'white',
    border: '0.1vw solid #333333', // 변경된 부분
    color: 'solid gray',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '1vw',
    cursor: 'pointer',
    borderRadius: '0.5vw',  // 덜 둥근 모서리
    transitionDuration: '0.4s',
    fontFamily: 'Arial, sans-serif',
};
