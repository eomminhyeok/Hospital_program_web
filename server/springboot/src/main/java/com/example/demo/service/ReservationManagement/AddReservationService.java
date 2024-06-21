package com.example.demo.service.ReservationManagement;

import org.springframework.beans.factory.annotation.*;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import com.example.demo.dto.ReservationDTO;
import com.example.demo.entity.Reservation;
import com.example.demo.repository.ReservationRepository;

@Service
public class AddReservationService {
	
	@Autowired
	private ReservationRepository reservationRepository;
	
	 @Autowired
	    private JdbcTemplate jdbcTemplate;
	
	 private static final int max = 2; // 동시간대 최대 예약자 수
	
	public void addReservation(ReservationDTO reservationDTO) throws Exception {
		int checkReservation = reservationRepository.countReservation(reservationDTO.getReservationDate()); // 클라리언트로부터 받은 예약날짜와 동시간대 예약자 수를 조회
        if (checkReservation >= max) { // 동시간대 에약자가 2명이상 있으면 throw
            throw new Exception("더 이상 예약자를 추가할 수 없습니다.");
        }
        
		Reservation reservation = new Reservation();
		
		reservation.setReservationNum(reservationDTO.getReservationNum());
		reservation.setPatientNum(reservationDTO.getPatientNum());
		reservation.setName(reservationDTO.getName());
		reservation.setFrontRRN(reservationDTO.getFrontRRN());
		reservation.setBackRRN(reservationDTO.getBackRRN());
		reservation.setReservationDate(reservationDTO.getReservationDate());
		
		reservationRepository.save(reservation);
		
		 jdbcTemplate.execute("CALL REFRESH_RESERVATION_TODAY()"); // jdbcTemplate를 이용해 새로운 예약 추가시 REFRESH_RESERVATION_TODAY 프로시저를 통해 금일 예약자 목록 테이블도 업데이트한다
	}

}
