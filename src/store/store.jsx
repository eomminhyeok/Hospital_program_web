// zustand를 이용한 상태관리, store 생성(데이터 모델)
import { create } from 'zustand';


// 프로그램 사용자 정보
export const useUserStore = create((set) => ({
  userInfo:
    {
      userId: '', // 사용자 id
      userName: '',
      password: '', // 비밀번호
      email: '',
      address: '',
      phone: '',
    },
  setUserInfo: (userInfo) => set({ userInfo })
}));




// 환자 정보
export const patientStore = create((set) => ({
  patientList: [    // 테스트 값
    {
      patientNum: '',
      name: '',
      frontRRN: '',
      backRRN: '',
      sex: '',
      address: '',
      phone: ''
    },
  ],
  setPatientList: (patientList) => set({ patientList })
}));






// 진료 기록
export const chartStore = create((set) => ({
  chartList: [
    {
      chartNum: '1',
      patientNum: '001',
      name: '홍길동',
      frontRRN: '123456',
      backRRN: '7890',
      chartDate: '2024-05-26',
      diagnosis: '감기',
      notes: '약 처방함',
    },
    {
      chartNum: '2',
      patientNum: '001',
      name: '홍길동',
      frontRRN: '123456',
      backRRN: '7890',
      chartDate: '2024-02-30',
      diagnosis: '꾀병',
      notes: '학교 가기 싫어함',
    },
    {
      chartNum: '3',
      patientNum: '001',
      name: '홍길동',
      frontRRN: '123456',
      backRRN: '7890',
      chartDate: '2024-01-26',
      diagnosis: '복통',
      notes: '설사 많이함. 물 적게 마실 것',
    },
  ],
  setChartList: (chartList) => set({ chartList })
}));




// 예약 정보
export const reservationStore = create((set) => ({
  reservationList: [
    {
      reservationNum: '1',
      patientNum: '2',
      name: '김철수',
      frontRRN: '910101',
      backRRN: '1423123',
      dateTime: '2024-06-01T09:00', // 09:00 예약
    },
    {
      reservationNum: '2',
      patientNum: '3',
      name: '이영희',
      frontRRN: '880202',
      backRRN: '1234567',
      dateTime: '2024-06-01T09:30', // 09:30 예약
    },
    {
      reservationNum: '3',
      patientNum: '4',
      name: '박민수',
      frontRRN: '950303',
      backRRN: '9876543',
      dateTime: '2024-06-01T10:00', // 10:00 예약
    },
    {
      reservationNum: '4',
      patientNum: '5',
      name: '주사과',
      frontRRN: '910101',
      backRRN: '1423123',
      dateTime: '2024-06-01T09:00', // 09:00 예약
    },
    {
      reservationNum: '5',
      patientNum: '6',
      name: '김수박',
      frontRRN: '880202',
      backRRN: '1234567',
      dateTime: '2024-06-01T10:00', // 09:30 예약
    },
    {
      reservationNum: '6',
      patientNum: '7',
      name: '박포도',
      frontRRN: '950303',
      backRRN: '9876543',
      dateTime: '2024-06-01T11:00', // 10:00 예약
    },
  ],
  setReservationList: (resList) => set({ resList }),
}));
