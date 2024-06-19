package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.ChartView;
import com.example.demo.entity.Reservation;
import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

@Repository
public interface ReservationRepository extends JpaRepository<Reservation, Long>{ // 데이터베이스에서 매개변수로 받은 reservationDate와 같은 레코드가 몇 개 있는지 카운트
	@Query("SELECT COUNT(*) FROM Reservation WHERE reservationDate = :reservationDate") // 1. Reservation과 WHERE reservation은 Reservation 엔티티파일 클래스명과 속성 명 
	int countReservation(@Param("reservationDate") LocalDateTime reservationDate); // 매개변수로 클라이언트로부터 받는 reservationDate
	
	void deleteByReservationNum(Long reservationNum);
}

