package com.example.demo.service.ReservationManagement;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.dto.ReservationDTO;
import com.example.demo.entity.ReservationTodayView;
import com.example.demo.repository.ReservationTodayViewRepository;
import com.example.demo.repository.ReservationViewRepository;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ReservationTodayListService {
	private final ReservationTodayViewRepository reservationTodayViewRepository;
	
	@Autowired
	ReservationTodayListService(ReservationTodayViewRepository reservationTodayViewRepository){
		this.reservationTodayViewRepository = reservationTodayViewRepository;
	}
	
	public List<ReservationDTO> getReservationTodayList() {
		LocalDateTime today = LocalDateTime.of(LocalDate.now(), LocalTime.MIN);	// 날짜와 시간을 분리하여 날짜는 오늘 시간은 00:00 를 기준으로 조회
		List<ReservationTodayView> reservationTodayView = reservationTodayViewRepository.findAll();
		return reservationTodayView.stream()
				.map(this::convertToDTO)
				.collect(Collectors.toList());
	}
	
	private ReservationDTO convertToDTO(ReservationTodayView reservationTodayView) {	
		ReservationDTO reservationTodayDTO = new ReservationDTO(); // reservation 테이블과 reservationTodayView의 형식이 같기때문에 ReservationDTO를 재사용한다
		reservationTodayDTO.setReservationNum(reservationTodayView.getReservationNum());
		reservationTodayDTO.setPatientNum(reservationTodayView.getPatientNum());
		reservationTodayDTO.setName(reservationTodayView.getName());
		reservationTodayDTO.setFrontRRN(reservationTodayView.getFrontRRN());
		reservationTodayDTO.setBackRRN(reservationTodayView.getBackRRN());
		reservationTodayDTO.setReservationDate(reservationTodayView.getReservationDate());
		return reservationTodayDTO;
	}
}
