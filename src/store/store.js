// zustand를 이용한 상태관리, store 생성
import { create } from 'zustand';

const useUserStore = create((set) => ({  
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

export default useUserStore;
