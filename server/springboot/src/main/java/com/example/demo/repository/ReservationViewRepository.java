package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.example.demo.entity.ReservationView;

import java.time.LocalDateTime;
import java.util.List;

public interface ReservationViewRepository extends JpaRepository<ReservationView, Long>{
	@Query("SELECT r FROM ReservationView r WHERE r.reservationDate >= :today")	// 오늘 날짜 포함 이후 날짜의 예약들만 조회
	List<ReservationView> findReservation(@Param("today") LocalDateTime today);	
}
