package com.example.demo.controller.ReservationManagement;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import com.example.demo.dto.CancelDTO;
import com.example.demo.dto.ReservationDTO;
import com.example.demo.service.ReservationManagement.CancelReservationService;
import com.example.demo.service.ReservationManagement.ReservationListService;
import com.example.demo.service.ReservationManagement.ReservationTodayListService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class CancelReservationController {
	@Autowired
    private CancelReservationService cancelReservationService;

    @Autowired
    private ReservationListService reservationListService;
    
    @Autowired
    private ReservationTodayListService reservationTodayListService;

    @PostMapping("/api/cancelReservation")
    public ResponseEntity<ReservationDTO> cancelReservation(@RequestBody CancelDTO cancelDTO) {
        Long reservationNum = cancelDTO.getReservationNum(); // 리퀘스트로 예약번호를 받을때 DTO로 받음
        System.out.println("ReservationNum : " + reservationNum);
        
        try {
        	cancelReservationService.cancelReservation(reservationNum);	// 예약 취소
        	List<ReservationDTO> reservations = reservationListService.getReservationList(); // 에약 취소 후 새로운 예약 테이블 정보를 reservationList에 저장
        	List<ReservationDTO> reservationsToday = reservationTodayListService.getReservationTodayList(); // 금일 예약 조회 결과를 저장
        	 System.out.println("Reservation : " + reservations);
        	 System.out.println("TodayReservation : " + reservationsToday);
        	ReservationDTO response = new ReservationDTO();
        	response.setReservations(reservations);	// DTO로 변환하여 response에 reservations와 reservationsToday를 담아 클라이언트에게 전송한다.
			response.setReservationsToday(reservationsToday);
        	return ResponseEntity.ok(response); // 예약 삭제 성공시 상태코드 200 전송
        } catch (Exception e) {
        	return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null); // 예약 삭제 실패시 상태코드 500 전송
        }
    }
}
