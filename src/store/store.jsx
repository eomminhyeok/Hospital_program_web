// zustand를 이용한 상태관리, store 생성(데이터 모델)
import { create } from 'zustand';


// 프로그램 사용자 정보
export const useUserStore = create((set) => ({
  userInfo:
    {
      userId: '', // 사용자 id
      name: '',
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
      chartNum: '',
      patientNum: '',
      name: '',
      frontRRN: '',
      backRRN: '',
      chartDate: '',
      diagnosis: '',
      notes: '',
    },
  ],
  setChartList: (chartList) => set({ chartList })
}));




// 예약 리스트
export const reservationStore = create((set) => ({
  // 전체 예약 리스트
  reservationList: [
    {
      reservationNum: '',
      patientNum: '',
      name: '',
      frontRRN: '',
      backRRN: '',
      reservationDate: '',
    },
  ],
  setReservationList: (reservationList) => set({ reservationList }),

  // 금일 예약 리스트
  reservationTodayList: [
    {
      reservationNum: '',
      patientNum: '',
      name: '',
      frontRRN: '',
      backRRN: '',
      reservationDate: '',
    },
  ],
  setReservationTodayList: (reservationTodayList) => set({ reservationTodayList }),
}));

