package com.example.demo.controller.ReservationManagement;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import com.example.demo.dto.ReservationDTO;
import com.example.demo.service.ReservationManagement.ReservationListService;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ReservationListController {
	private final ReservationListService reservationListService;
	
	@Autowired
	public ReservationListController (ReservationListService reservationListService) {
		this.reservationListService = reservationListService;
	}
	
	@PostMapping("/api/reservationList")
	public ResponseEntity<?> getChartList(@RequestBody ReservationDTO reservationDTO){
		List<ReservationDTO> reservations = reservationListService.getReservationList();
		if (reservations.isEmpty()) {
			return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
		} else {
			return new ResponseEntity<>(reservations, HttpStatus.OK);
		}
	}
}
