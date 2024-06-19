package com.example.demo.service.ReservationManagement;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.dto.ReservationDTO;
import com.example.demo.entity.ReservationView;
import com.example.demo.repository.ReservationViewRepository;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ReservationListService {
	private final ReservationViewRepository reservationViewRepository;
	
	@Autowired
	ReservationListService(ReservationViewRepository reservationViewRepository){
		this.reservationViewRepository = reservationViewRepository;
	}
	
	public List<ReservationDTO> getReservationList() {
		LocalDateTime today = LocalDateTime.of(LocalDate.now(), LocalTime.MIN);	// 날짜와 시간을 분리하여 날짜는 오늘 시간은 00:00 를 기준으로 조회
		List<ReservationView> reservationView = reservationViewRepository.findReservation(today);
		return reservationView.stream()
				.map(this::convertToDTO)
				.collect(Collectors.toList());
	}
	
	private ReservationDTO convertToDTO(ReservationView reservationView) {
		ReservationDTO reservationDTO = new ReservationDTO();
		reservationDTO.setReservationNum(reservationView.getReservationNum());
		reservationDTO.setPatientNum(reservationView.getPatientNum());
		reservationDTO.setName(reservationView.getName());
		reservationDTO.setFrontRRN(reservationView.getFrontRRN());
		reservationDTO.setBackRRN(reservationView.getBackRRN());
		reservationDTO.setReservationDate(reservationView.getReservationDate());
		return reservationDTO;
	}
}

