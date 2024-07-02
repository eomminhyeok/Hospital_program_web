import { useState } from 'react';
import { chartStore } from '../store/store'; // chartStore 파일 경로

const useStatistics = () => {
    const { chartList } = chartStore(); // chartStore에서 상태와 업데이트 함수 가져오기
    const [year, setYear] = useState('선택안함');
    const [month, setMonth] = useState('선택안함');
    const [sex, setSex] = useState('');
    const [chartData, setChartData] = useState([]);
    const [chartHeaders, setChartHeaders] = useState([]);

    const calculateAge = (birthYear) => {   // 나이 계산 메서드
        const currentYear = new Date().getFullYear();
        const age = currentYear - birthYear;    // 현재 년도에서 출생년도를 빼서 나이를 추출. 각 나이에 맞는 그룹을 리턴
        if (age < 10) return '0~9';
        if (age < 20) return '10대';
        if (age < 30) return '20대';
        if (age < 40) return '30대';
        if (age < 50) return '40대';
        if (age < 60) return '50대';
        if (age < 70) return '60대';
        return '70대+';
    };

    const filterChart = (year, month, sex) => {
        let resultChart = chartList; // chartList에서 필터링할 데이터 가져오기
        let updatedChartData = []; // 조건에 따라 필터링된 값들을 저장할 배열. 필터링하여 updatedChartData에 저장한뒤 updatedChartData의 값을 chartData에 최종적으로 저장
        let updatedChartHeaders = [];   // 조건에 맞는 년/월/일 테이블의 헤더값을 저장할 배열

        if (year !== '선택안함') {  // 사용자가 년도를 선택했을시 chartList에서 선택 년도에 해당하는 값만 필터링
            resultChart = resultChart.filter(chart => new Date(chart.chartDate).getFullYear() === parseInt(year));
        }

        if (month !== '선택안함') { // 사용자가 월을 선택했을시 chartList에서 선택 월에 해당하는 값만 필터링
            resultChart = resultChart.filter(chart => new Date(chart.chartDate).getMonth() + 1 === parseInt(month));
        }

        if (sex !== '전체') {   // 주민등록번호 뒷자리의 첫번째 숫자에 따라 성별 판별
            if (sex === '남자') {
                resultChart = resultChart.filter(chart => chart.backRRN[0] === '1' || chart.backRRN[0] === '3');
            } else if (sex === '여자') {
                resultChart = resultChart.filter(chart => chart.backRRN[0] === '2' || chart.backRRN[0] === '4');
            }
        }


        if (year !== '선택안함' && month === '선택안함') {  // 년도선택. 월 미선택 시
            updatedChartData = Array.from({ length: 12 }, () => ({ // 월 별로 진료자 수 집계하여 카운트
                ageGroups: {
                    '0~9': 0,
                    '10대': 0,
                    '20대': 0,
                    '30대': 0,
                    '40대': 0,
                    '50대': 0,
                    '60대': 0,
                    '70대+': 0
                },
                total: 0
            }));

            updatedChartHeaders = Array.from({ length: 12 }, (_, i) => `${i + 1}월`); // 테이블의 헤더는 월 별

            resultChart.forEach(chart => {
                const birthYear = parseInt(chart.frontRRN.slice(0, 2)) + (chart.backRRN[0] <= '2' ? 1900 : 2000);   // 주민번호 앞, 뒷자리를 이용해 생년월일 추출
                const ageGroup = calculateAge(birthYear); // 추출한 생년월일로 나이를 계산해 해당하는 나이대 그룹 을 ageGroup에 저장
                const monthIndex = new Date(chart.chartDate).getMonth(); 

                updatedChartData[monthIndex].ageGroups[ageGroup]++; // updatedChartData의 각 월에 해당하는 배열칸에 위에서 얻은 ageGroup에 카운트+1
                updatedChartData[monthIndex].total++; // 해당 월 전체 진료자수 카운트+1
            });
        } else if (year === '선택안함' && month === '선택안함') {   // 년도,  월 모두 선택안했을 시 년도별로 진료자 수 집계
            const currentYear = new Date().getFullYear();
            const startYear = 2020; // 2020년부터 집계 데이터 시작
            const numYears = currentYear - startYear; // 현재 년도에서 2020을 뺀 만큼 집계할 년도의 수가 정해짐. 현재(2024)년도에서 2020을 빼면 4. 즉 2024년포함 이전 4년까지 집계

            updatedChartData = Array.from({ length: numYears }, (_, i) => ({
                year: currentYear - i,
                ageGroups: {
                    '0~9': 0,
                    '10대': 0,
                    '20대': 0,
                    '30대': 0,
                    '40대': 0,
                    '50대': 0,
                    '60대': 0,
                    '70대+': 0
                },
                total: 0
            }));

            updatedChartHeaders = Array.from({ length: numYears }, (_, i) => `${currentYear - i}년`);

            resultChart.forEach(chart => {
                const birthYear = parseInt(chart.frontRRN.slice(0, 2)) + (chart.backRRN[0] <= '2' ? 1900 : 2000);
                const ageGroup = calculateAge(birthYear);
                const yearIndex = currentYear - new Date(chart.chartDate).getFullYear();

                updatedChartData[yearIndex].ageGroups[ageGroup]++;
                updatedChartData[yearIndex].total++;
            });
        } else if (year !== '선택안함' && month !== '선택안함') {   // 년도, 월 모두 선택시
            const daysInMonth = new Date(year, month, 0).getDate(); // 선택한 달의 일자를 계산

            updatedChartData = Array.from({ length: daysInMonth }, (_, i) => ({ // 테이블의 행 갯수는 해당 월의 일자 수 만큼
                day: i + 1, // 일자 또한 1일부터 시작이므로 +1
                ageGroups: {
                    '0~9': 0,
                    '10대': 0,
                    '20대': 0,
                    '30대': 0,
                    '40대': 0,
                    '50대': 0,
                    '60대': 0,
                    '70대+': 0
                },
                total: 0
            }));

            updatedChartHeaders = Array.from({ length: daysInMonth }, (_, i) => `${i + 1}일`);

            resultChart.forEach(chart => {
                const birthYear = parseInt(chart.frontRRN.slice(0, 2)) + (chart.backRRN[0] <= '2' ? 1900 : 2000);
                const ageGroup = calculateAge(birthYear);
                const dayIndex = new Date(chart.chartDate).getDate() - 1;

                updatedChartData[dayIndex].ageGroups[ageGroup]++;
                updatedChartData[dayIndex].total++;
            });
        }

        setChartData(updatedChartData); // 필터링된 데이터로 chartData 업데이트
        setChartHeaders(updatedChartHeaders); // 필터링된 데이터로 chartHeaders 업데이트
    };

    return {
        filterChart,
        year, setYear,
        month, setMonth,
        sex, setSex,
        chartData,
        chartHeaders
    };
};

export default useStatistics;
