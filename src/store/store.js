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
      chartName: '홍길동',
      chartFront: '123456',
      chartBack: '7890',
      chartDate: '2024-05-26',
      diagnosis: '감기',
      notes: '약 처방함',
    },
    {
      chartNum: '2',
      chartName: '김영희',
      chartFront: '987654',
      chartBack: '3210',
      chartDate: '2024-05-25',
      diagnosis: '소화불량',
      notes: '식이요법 시행함',
    },
  ],
  setChartList: (chartList) => set({ chartList })
  /* 진료기록도 환자정보와 마찬가지로 서버에서 진료정보를 받아올 리스트만 있으면 됨 */
  // chartNum: '',  // 차트 번호
  // setChartNum: (chartNum) => set({ chartNum }),
  // chartName: '',   // 환자 이름
  // setChartName: (chartName) => set({ chartName }),
  // chartFront: '',  // 주민번호 앞자리
  // setChartFront: (chartFront) => set({ chartFront }),
  // chartBack: '',  // 주민번호 뒷자리
  // setChartBack: (chartBack) => set({ chartBack }),
  // chartDate: '',  // 진료 날짜
  // setChartDate: (chartDate) => set({ chartDate }),
  // diagnosis: '',  // 진단명
  // setDiagnosis: (diagnosis) => set({ diagnosis }),
  // notes: '',  // 진료 내용
  // setNotes: (notes) => set({ notes }),
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