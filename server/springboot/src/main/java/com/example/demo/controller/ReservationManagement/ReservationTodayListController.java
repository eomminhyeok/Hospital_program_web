package com.example.demo.controller.ReservationManagement;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import com.example.demo.dto.ReservationDTO;
import com.example.demo.service.ReservationManagement.ReservationTodayListService;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ReservationTodayListController {
	private final ReservationTodayListService reservationTodayListService;
	
	@Autowired
	public ReservationTodayListController (ReservationTodayListService reservationTodayListService) {
		this.reservationTodayListService = reservationTodayListService;
	}
	
	@PostMapping("/api/reservationTodayList")
	public ResponseEntity<?> getChartList(@RequestBody ReservationDTO reservationDTO){
		try {
        	List<ReservationDTO> reservationsToday = reservationTodayListService.getReservationTodayList(); // 금일 예약 조회 결과를 저장
        	 System.out.println("TodayReservation : " + reservationsToday);
        	ReservationDTO response = new ReservationDTO();
			response.setReservationsToday(reservationsToday);
        	return ResponseEntity.ok(response); // 예약 삭제 성공시 상태코드 200 전송
        } catch (Exception e) {
        	return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null); // 예약 삭제 실패시 상태코드 500 전송
        }
	}
}
