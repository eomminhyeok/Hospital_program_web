package com.example.demo.controller.ReservationManagement;

import org.springframework.beans.factory.annotation.*;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import com.example.demo.dto.ReservationDTO;
import com.example.demo.repository.ReservationRepository;
import com.example.demo.service.ReservationManagement.AddReservationService;

@RestController
public class AddReservationController {
	
	@Autowired
	private AddReservationService addReservationService;
	
	@PostMapping("/api/addReservation")
	public ResponseEntity<String> addReservation(@RequestBody ReservationDTO reservationDTO) {
		try {
			System.out.println("Received ReservationDTO:");
			System.out.println("ReservationNum: " + reservationDTO.getReservationNum());
			System.out.println("PatientNum: " + reservationDTO.getPatientNum());
			System.out.println("Name: " + reservationDTO.getName());
			System.out.println("FrontRRN: " + reservationDTO.getFrontRRN());
			System.out.println("BackRRN: " + reservationDTO.getBackRRN());
			System.out.println("ReservationDate: " + reservationDTO.getReservationDate());
			addReservationService.addReservation(reservationDTO);
			return ResponseEntity.ok().body("예약등록 성공");
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
		}
	}
}
