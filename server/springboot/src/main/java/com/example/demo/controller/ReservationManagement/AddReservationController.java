package com.example.demo.controller.ReservationManagement;
// 예약리스트를 조회하는 컨트롤러. 단일로 쓰일곳이 없어 방치중
import java.util.List;

import org.springframework.beans.factory.annotation.*;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import com.example.demo.dto.ChartDTO;
import com.example.demo.dto.ReservationDTO;
import com.example.demo.repository.ReservationRepository;
import com.example.demo.service.ReservationManagement.AddReservationService;
import com.example.demo.service.ReservationManagement.ReservationListService;
import com.example.demo.service.ReservationManagement.ReservationTodayListService;

@RestController
public class AddReservationController {
	
	@Autowired
	private AddReservationService addReservationService;
	
	@Autowired
    private ReservationListService reservationListService;
	
	@Autowired
    private ReservationTodayListService reservationTodayListService;
	
	@PostMapping("/api/addReservation")
	public ResponseEntity<ReservationDTO> addReservation(@RequestBody ReservationDTO reservationDTO) {
		try {
			System.out.println("Received ReservationDTO:");
			System.out.println("ReservationNum: " + reservationDTO.getReservationNum());
			System.out.println("PatientNum: " + reservationDTO.getPatientNum());
			System.out.println("Name: " + reservationDTO.getName());
			System.out.println("FrontRRN: " + reservationDTO.getFrontRRN());
			System.out.println("BackRRN: " + reservationDTO.getBackRRN());
			System.out.println("ReservationDate: " + reservationDTO.getReservationDate());
			addReservationService.addReservation(reservationDTO);
			List<ReservationDTO> reservations = reservationListService.getReservationList();	// 예약리스트 조회 결과를 resrvations에 저장
			List<ReservationDTO> reservationsToday = reservationTodayListService.getReservationTodayList(); // 금일 예약 조회 결과를 저장
			ReservationDTO response = new ReservationDTO();
			response.setReservations(reservations);	// DTO로 변환하여 response에 reservations와 reservationsToday를 담아 클라이언트에게 전송한다.
			response.setReservationsToday(reservationsToday);
			return ResponseEntity.ok(response);
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
		}
	}
}
