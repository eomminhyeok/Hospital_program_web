// 예약자 차트
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
Chart.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const centerTextPlugin = { // 차트 가운데 표시할 텍스트 플러그인 생성
    id: 'centerText',
    beforeDraw: (chart) => {
        const { ctx, chartArea: { top, bottom, left, right, height } } = chart;
        const centerConfig = chart.config.options.plugins.centerText;
        if (centerConfig) {
            const { text, color, fontStyle, size } = centerConfig;
            ctx.save(); // 현재 상태 저장
            ctx.font = `${size}rem ${fontStyle}`;
            ctx.fillStyle = color || '#000'; // 색상 미지정시 검은색
            ctx.textAlign = 'center'; // 텍스트 가로기준 중앙 정렬
            ctx.textBaseline = 'middle'; // 텍스트 세로기준 중앙 정렬
            const centerX = (left + right) / 2; // x좌표(좌우 기준 중앙)
            const centerY = (top + bottom) / 2 - height * 0.1; // y좌표(중앙에서 살짝 아래)
            ctx.fillText(text, centerX, centerY); // 텍스트 좌표 설ㅈ렁
            ctx.restore();
        }
    },
};

Chart.register(centerTextPlugin);

const DoughnutChart = ({ morning, afternoon }) => {
    const total = morning + afternoon;

    const data = {
        labels: ['오전', '오후'],
        datasets: [
            {
                label: '예약자 수',
                data: [morning, afternoon],
                backgroundColor: [
                    'rgba(255, 50, 50, 0.8)', // 오전 색상
                    'rgba(50, 50, 255, 0.8)', // 오후 색상
                ],
                borderColor: [
                    'rgba(255, 50, 50, 1)', // 오전 테두리 색상
                    'rgba(50, 50, 255, 1)', // 오후 테두리 색상
                ],
                borderWidth: 1,
                borderRadius: 0,
            },
        ],
    };

    const options = {
        plugins: {
            datalabels: { // 차트 영역 안 텍스트
                display: false,
                color: 'solid gray',
                font: {
                    size: '18em',
                },
                align: 'center',
                anchor: 'center',
            },
            centerText: {  // 차트 중앙 텍스트
                text: `${total}명`,
                color: '#999999',
                fontStyle: 'Arial',
                size: 3,
            },
            legend: { // 막대 바 표시 x
                display: false,
            },
        },
        maintainAspectRatio: false,
        cutout: '85%', // 차트 두께
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h1>금일 예약 현황</h1>
            <div style={{ position: 'relative', width: '20vw', height: '40vh', margin: '10% 0 0 5%' }}>

                <Doughnut data={data} options={options} /> {/* 차트 생성 */}

                <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', bottom: '30%', textAlign: 'center', width: '100%' }}>

                    {/* 오전 진료자 수 출력 */}
                    <div style={{ display: 'flex', justifyContent: 'center' }}> 
                        <div style={{ width: '1.1vw', height: '2.2vh', backgroundColor: 'rgba(255, 50, 50, 0.8)', margin: '0 0' }}></div>
                        <p style={{ margin: '0 0.2vw' }}>오전: {morning}명</p>
                    </div>

                    {/* 오후 진료자 수 출력 */}
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1vh' }}>
                        <div style={{ width: '1.1vw', height: '2.2vh', backgroundColor: 'rgba(50, 50, 255, 0.8)', margin: '0 0' }}></div>
                        <p style={{ margin: '0 0.2vw' }}>오후: {afternoon}명</p>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default DoughnutChart;
