import React from 'react';
import TopBar from '../etc/topBar';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import useStatistics from '../../Hooks/useStatistics';
import { tableStyle, thStyle, tdStyle } from '../../styles/style';

const StatisticsPage = () => {
    const { year, setYear, month, setMonth, sex, setSex, filterChart, chartData, chartHeaders } = useStatistics();

    const divStyle = {
        display: 'flex',
        flexDirection: 'row',
    };

    const pStyle = {
        margin: '0 0.5vw 0 1vw',
    };

    const renderTableRows = () => {     // td 랜더링
        return chartData.map((data, index) => {
            const isEvenRow = index % 2 === 0;
            const rowStyle = {
                ...tdStyle,
                backgroundColor: isEvenRow ? 'white' : '#f0f0f0',   // row를 흰색과 회색을 번갈아가며 설정해 가시성을 높임
            };

            return (
                <tr key={index} style={rowStyle}>
                    <td style={tdStyle}>
                        {chartHeaders[index]}   {/* 년,월,일에 따라 표시되는 헤더가 달라짐 */}
                    </td>
                    <td style={tdStyle}>{data.ageGroups['0~9']}</td>
                    <td style={tdStyle}>{data.ageGroups['10대']}</td>
                    <td style={tdStyle}>{data.ageGroups['20대']}</td>
                    <td style={tdStyle}>{data.ageGroups['30대']}</td>
                    <td style={tdStyle}>{data.ageGroups['40대']}</td>
                    <td style={tdStyle}>{data.ageGroups['50대']}</td>
                    <td style={tdStyle}>{data.ageGroups['60대']}</td>
                    <td style={tdStyle}>{data.ageGroups['70대+']}</td>
                    <td style={tdStyle}>{data.total}</td>
                </tr>
            );
        });
    };

    return (
        <div>
            <TopBar />
            <h2 style={{ margin: '0 0 0 1vw' }}>환자 검색</h2>
            <hr style={{ borderColor: 'white' }} />
            <div style={divStyle}>
                <p style={pStyle}>년도 선택 :</p>   
                <select
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    style={{ textAlign: 'center', height: '2.5vh', width: 'fit-content' }}
                >
                    <option value="선택안함">선택안함</option>
                    {[...Array(new Date().getFullYear() - 2020).keys()].map((_, index) => { // 현재 년도(2024) - 2020 = 4. 배열의 길이는 4가 되어 현재 년도포함 이전 4년까지만 년도 설정이 가능하다 */
                        const year = new Date().getFullYear() - index;
                        return (
                            <option key={year} value={year}> {/* year에 사용자가 선택한 년도 저장 */}
                                {year} 년
                            </option>
                        );
                    })}
                </select>

                <p style={pStyle}>월 선택 :</p>
                <select
                    value={month}
                    onChange={(e) => setMonth(e.target.value)}
                    style={{ height: '2.5vh', width: 'fit-content', textAlign: 'center' }}
                >
                    <option value="선택안함">선택안함</option>
                    {Array.from({ length: 12 }, (_, i) => i + 1).map((i) => ( 
                        <option key={i} value={i}> {/* 월은 1월부터 시작하므로 i + 1부터 시작 */}
                            {' '}
                            {i} 월
                        </option>
                    ))}
                </select>
            </div>
            <hr style={{ borderColor: 'white' }} />

            <div style={divStyle}>
                <p style={pStyle}>성 별 :</p>
                <div style={{ marginRight: '1vw' }}>
                    <label>
                        <input
                            type="radio"
                            name="sex"
                            value="전체"
                            defaultChecked
                            onChange={() => setSex('전체')}
                            style={{ marginRight: '0.5vw' }}
                        />
                        전체
                    </label>
                </div>
                <div style={{ marginRight: '1vw' }}>
                    <label>
                        <input
                            type="radio"
                            name="sex"
                            value="남자"
                            onChange={() => setSex('남자')}
                            style={{ marginRight: '0.5vw' }}
                        />
                        남자
                    </label>
                </div>
                <div>
                    <label>
                        <input
                            type="radio"
                            name="sex"
                            value="여자"
                            onChange={() => setSex('여자')}
                            style={{ marginRight: '0.5vw' }}
                        />
                        여자
                    </label>
                </div>
                <button onClick={()=>filterChart(year, month, sex)} style={{ width: '3vw', marginLeft: '1.3vw' }}>
                    검색
                </button>
            </div>
            <hr style={{ borderColor: 'white' }} />

            <table style={{ ...tableStyle, borderCollapse: 'collapse', backgroundColor: 'white' }}>
                <thead>
                    <tr>
                        <th style={thStyle}>년/월/일</th>
                        <th style={thStyle}>0~9세</th>
                        <th style={thStyle}>10대</th>
                        <th style={thStyle}>20대</th>
                        <th style={thStyle}>30대</th>
                        <th style={thStyle}>40대</th>
                        <th style={thStyle}>50대</th>
                        <th style={thStyle}>60대</th>
                        <th style={thStyle}>70대+</th>
                        <th style={thStyle}>총 진료자 수</th>
                    </tr>
                </thead>
                <tbody>{renderTableRows()}</tbody> {/* tbody에 td 랜더링 값 호출 */}
            </table>
        </div>
    );
};

export default StatisticsPage;
