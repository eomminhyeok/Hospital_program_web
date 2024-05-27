// zustand를 이용한 상태관리, store 생성(데이터 모델)
import { create } from 'zustand';


// 프로그램 사용자 정보
export const useUserStore = create((set) => ({
  userId: '', // 사용자 id
  setUserId: (userId) => set({ userId }),
  userName: '',
  setUserName: (userName) => set({ userName }),
  // password: '', // 비밀번호
  // setPassword: (password) => set({ password }),
  // email: '',
  // setEmail: (email) => set({ email }),
  // address: '',
  // setAddress: (address) => set({address}),
  // phone: '',
  // setPhone: (phone) => set({phone}),
}));




// 환자 정보
export const patientStore = create((set) => ({
  patientList: [    // 테스트 값
    {
      patientNum: '001',
      name: '홍길동',
      frontRRN: '910101',
      backRRN: '1234567',
      sex: '남',
      address: '서울특별시',
      phone: '010-1234-5678'
    },
    {
      patientNum: '002',
      name: '김영희',
      frontRRN: '950202',
      backRRN: '2345678',
      sex: '여',
      address: '부산광역시',
      phone: '010-9876-5432'
    },
    // 추가 데이터
    ...Array.from({ length: 30 }, (_, index) => ({
      patientNum: `00${index + 3}`,
      name: `테스트${index + 1}`,
      frontRRN: `${index + 910101}`,
      backRRN: `${index + 1234567}`,
      sex: index % 2 === 0 ? '남' : '여',
      address: index % 2 === 0 ? '서울특별시' : '부산광역시',
      phone: `010-${index + 1234}-${index + 5678}`
    }))
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
  resList: [],
  setResList: (resList) => set({ resList })
  // resNum: '',  // 예약 번호
  // setResNum: (resNum) => set({ resNum }),
  // resName: '',  // 예약자 이름
  // setResName: (resName) => set({ resName }),
  // resFornt: '',  // 예약자 생년월일
  // setResFornt: (resFornt) => set({ resFornt }),
  // resDate: '',  // 예약 날짜
  // setResDate: (resDate) => set({ resDate }),
}));