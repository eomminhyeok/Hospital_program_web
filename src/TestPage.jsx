import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const TestPage = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    return(
                <div >
                    <DatePicker
                        selected={selectedDate}
                        onChange={(date) => setSelectedDate(date)}
                        inline  // 이 부분이 누락되어 있었습니다.
                        style={{ width: '100%', height: '100%' }}
                    />
                </div>
    );
};

export default TestPage;