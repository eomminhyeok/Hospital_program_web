package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.entity.ReservationTodayView;

public interface ReservationTodayViewRepository extends JpaRepository<ReservationTodayView, Long>{
	// reservationDate 기준 오름차순으로 정렬하여 조회하는 메서드
    List<ReservationTodayView> findAllByOrderByReservationDateAsc();
}
