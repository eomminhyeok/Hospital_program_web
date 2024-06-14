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

@RestController
public class AddReservationController {
	
	@Autowired
	private AddReservationService addReservationService;
	
	@Autowired
    private ReservationListService reservationListService;
	
	@PostMapping("/api/addReservation")
	public ResponseEntity<List<ReservationDTO>> addReservation(@RequestBody ReservationDTO reservationDTO) {
		try {
			System.out.println("Received ReservationDTO:");
			System.out.println("ReservationNum: " + reservationDTO.getReservationNum());
			System.out.println("PatientNum: " + reservationDTO.getPatientNum());
			System.out.println("Name: " + reservationDTO.getName());
			System.out.println("FrontRRN: " + reservationDTO.getFrontRRN());
			System.out.println("BackRRN: " + reservationDTO.getBackRRN());
			System.out.println("ReservationDate: " + reservationDTO.getReservationDate());
			addReservationService.addReservation(reservationDTO);
			List<ReservationDTO> reservationList = reservationListService.getReservationList();
			 return ResponseEntity.ok(reservationList);
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
		}
	}
}
