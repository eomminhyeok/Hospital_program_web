// zustand를 이용한 상태관리, store 생성(데이터 모델)
import { create } from 'zustand';
import { persist } from 'zustand/middleware';


// 프로그램 사용자 정보
export const useUserStore = create(
  persist(
    (set) => ({
      userInfo: {
        userId: '1', // 사용자 id
        name: '',
        password: '1', // 비밀번호
        email: '1',
        address: '1',
        phone: '1',
      },
      setUserInfo: (userInfo) => set({ userInfo }),
    }),
    {
      name: 'user-storage', // 로컬 스토리지 키
    }
  )
);




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
export const reservationStore = create(
  persist(
    (set) => ({
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
    }),
    {
      name: 'reservation-storage', // 로컬 스토리지 키
    },
  ),
);

export const countsStore = create(  // 예약자 수, 진료 환자 수 등 통계정보 관련 store
  persist(
    (set) => ({
      counts: {
        morning: 0,
        afternoon: 0,
        // 추가적인 count 필드들
      },
      setCounts: (counts) => set({ counts }),
    }),
    {
      name: 'counts-storage',
    }
  )
);

