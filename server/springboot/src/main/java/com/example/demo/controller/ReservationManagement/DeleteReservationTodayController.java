package com.example.demo.controller.ReservationManagement;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import com.example.demo.dto.CancelDTO;
import com.example.demo.dto.ReservationDTO;
import com.example.demo.service.ReservationManagement.DeleteReservationTodayService;
import com.example.demo.service.ReservationManagement.ReservationTodayListService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class DeleteReservationTodayController {
    private final DeleteReservationTodayService deleteReservationTodayService;

    @Autowired
    public DeleteReservationTodayController(DeleteReservationTodayService deleteReservationTodayService) {
        this.deleteReservationTodayService = deleteReservationTodayService;
    }
    
    @Autowired
    private ReservationTodayListService reservationTodayListService;
    

    @PostMapping("/api/deleteReservationToday")
    public ResponseEntity<ReservationDTO> DeleteReservationToday(@RequestBody CancelDTO cancelDTO) {	// DTO는 예약삭제시 사용하는 CancelDTO를 재사용
        Long reservationNum = cancelDTO.getReservationNum(); // 리퀘스트로 예약번호를 받을때 DTO로 받음
        System.out.println("ReservationNum : " + reservationNum);
        try {
        	deleteReservationTodayService.deleteReservationToday(reservationNum);	// 예약 취소
        	List<ReservationDTO> reservationsToday = reservationTodayListService.getReservationTodayList(); // 금일 예약 조회 결과를 저장
        	ReservationDTO response = new ReservationDTO();
        	response.setReservationsToday(reservationsToday);
        	return ResponseEntity.ok(response); // 예약 삭제 성공시 상태코드 200 전송
        } catch (Exception e) {
        	return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null); // 예약 삭제 실패시 상태코드 500 전송
        }
    }
}