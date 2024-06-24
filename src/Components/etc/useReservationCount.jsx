// 예약자 수 카운트 훅
import { useEffect, useCallback } from 'react';
import { reservationStore, countsStore } from '../../store/store';

const useReservationCount = () => {
  const { reservationList } = reservationStore();
  const { setCounts } = countsStore();

  const calculateCounts = useCallback(() => {
    const today = new Date().toISOString().split('T')[0];
    const morningCount = reservationList.filter(reservation => {
      const reservationTime = new Date(reservation.reservationDate);
      return reservationTime.toISOString().startsWith(today) && reservationTime.getHours() < 12;
    }).length;

    const afternoonCount = reservationList.filter(reservation => {
      const reservationTime = new Date(reservation.reservationDate);
      return reservationTime.toISOString().startsWith(today) && reservationTime.getHours() >= 12;
    }).length;

    setCounts({ morning: morningCount, afternoon: afternoonCount });
  }, [reservationList, setCounts]); // 의존성 배열에서 reservationList와 setCounts만 포함

  useEffect(() => {
    calculateCounts();
  }, [calculateCounts]); // calculateCounts 함수만 의존성 배열에 포함

  return { calculateCounts };
};

export default useReservationCount;
