package com.example.demo.service.ReservationManagement;

import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.Service;

import com.example.demo.dto.ReservationDTO;
import com.example.demo.entity.Reservation;
import com.example.demo.repository.ReservationRepository;

@Service
public class AddReservationService {
	
	@Autowired
	private ReservationRepository reservationRepository;
	
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
	}

}
