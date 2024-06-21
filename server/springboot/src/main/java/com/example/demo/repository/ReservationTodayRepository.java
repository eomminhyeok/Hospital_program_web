package com.example.demo.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.ReservationToday;

@Repository
public interface ReservationTodayRepository extends JpaRepository<ReservationToday, Long>{
	void deleteByReservationNum(Long reservationNum);
}


