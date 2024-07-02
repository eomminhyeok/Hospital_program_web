// 바 차트 임시 폐기

// import { ResponsiveBar } from '@nivo/bar';

// const BarChart = ({ data }) => {
//     const chartData = Object.keys(data).map(key => ({
//         month: key,
//         오전: data[key],
//         오후: data[key] * 2 // 예제에서는 임의로 데이터를 설정함
//     }));

//     return (
//         <ResponsiveBar
//             data={chartData}
//             keys={['오전', '오후']}
//             indexBy="month"
//             margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
//             padding={0.3}
//             valueScale={{ type: 'linear' }}
//             indexScale={{ type: 'band', round: true }}
//             colors={({ id }) => id === '오전' ? 'rgba(76, 187, 23, 0.8)' : 'rgba(148, 0, 211, 0.8)'}
//             borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
//             axisTop={null}
//             axisRight={null}
//             axisBottom={{
//                 tickSize: 5,
//                 tickPadding: 5,
//                 tickRotation: 0,
//                 legend: '월',
//                 legendPosition: 'middle',
//                 legendOffset: 32
//             }}
//             axisLeft={{
//                 tickSize: 5,
//                 tickPadding: 5,
//                 tickRotation: 0,
//                 legend: '진료자 수',
//                 legendPosition: 'middle',
//                 legendOffset: -40
//             }}
//             labelSkipWidth={12}
//             labelSkipHeight={12}
//             labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
//             legends={[
//                 {
//                     dataFrom: 'keys',
//                     anchor: 'bottom-right',
//                     direction: 'column',
//                     justify: false,
//                     translateX: 120,
//                     translateY: 0,
//                     itemsSpacing: 2,
//                     itemWidth: 100,
//                     itemHeight: 20,
//                     itemDirection: 'left-to-right',
//                     itemOpacity: 0.85,
//                     symbolSize: 20,
//                     effects: [{ on: 'hover', style: { itemOpacity: 1 } }]
//                 }
//             ]}
//             role="application"
//             ariaLabel="Nivo bar chart demo"
//             barAriaLabel={({ id, value }) => `${id}: ${value}명`}
//         />
//     );
// };

// export default BarChart;
