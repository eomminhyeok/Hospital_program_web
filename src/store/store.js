// zustand를 이용한 상태관리, store 생성(데이터 모델)
import { create } from 'zustand';


// 프로그램 사용자 정보
export const useUserStore = create((set) => ({   
  userId: '', // 사용자 id
  setUserId: (userId) => set({ userId }),
  password: '', // 비밀번호
  setPassword: (password) => set({ password }),
  email: '',
  setEmail: (email) => set({ email }),
  address: '',
  setAddress: (address) => set({address}),
  phone: '',
  setPhone: (phone) => set({phone}),
}));




// 환자 정보
export const patient = create((set) => ({  
  patientNum: '',    // 환자 번호
  setPatientNum: (patientNum) => set({ patientNum }),
  name: '',   // 환자 이름
  setName: (name) => set({ name }),
  frontRRN: '',   // 주민등록번호 앞자리(생년월일)
  setFrontRRN: (frontRRN) => set({ frontRRN }),
  backRRN: '',    // 주민등록번호 뒷자리
  setBackRRN: (backRRN) => set({ backRRN }),
  sex: '',    // 성별
  setSex: (sex) => set({ sex }),
  address: '', 
  setAddress: (address) => set({ address }),
  phone: '',
  setPhone: (phone) => set({ phone }),
})); 




// 진료 기록
export const chart = create((set) => ({ 
  chartNum: '',  // 차트 번호
  setChartNum: (chartNum) => set({ chartNum }),
  chartName: '',   // 환자 이름
  setChartName: (chartName) => set({ chartName }),
  chartFront: '',  // 주민번호 앞자리
  setChartFront: (chartFront) => set({ chartFront }),
  chartBack: '',  // 주민번호 뒷자리
  setChartBack: (chartBack) => set({ chartBack }),
  chartDate: '',  // 진료 날짜
  setChartDate: (chartDate) => set({ chartDate }),
  diagnosis: '',  // 진단명
  setDiagnosis: (diagnosis) => set({ diagnosis }),
  notes: '',  // 진료 내용
  setNotes: (notes) => set({ notes }),
}));




// 예약 정보
export const reservation = create((set) => ({ 
  resNum: '',  // 예약 번호
  setResNum: (resNum) => set({ resNum }),
  resName: '',  // 예약자 이름
  setResName: (resName) => set({ resName }),
  resFornt: '',  // 예약자 생년월일
  setResFornt: (resFornt) => set({ resFornt }),
  resDate: '',  // 예약 날짜
  setResDate: (resDate) => set({ resDate }),
}));