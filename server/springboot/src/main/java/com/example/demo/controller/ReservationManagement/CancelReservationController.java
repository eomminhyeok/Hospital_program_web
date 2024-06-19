package com.example.demo.controller.ReservationManagement;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import com.example.demo.dto.CancelDTO;
import com.example.demo.dto.ReservationDTO;
import com.example.demo.service.ReservationManagement.CancelReservationService;
import com.example.demo.service.ReservationManagement.ReservationListService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class CancelReservationController {
    private final CancelReservationService cancelReservationService;

    @Autowired
    public CancelReservationController(CancelReservationService cancelReservationService) {
        this.cancelReservationService = cancelReservationService;
    }
    
    @Autowired
    private ReservationListService reservationListService;

    @PostMapping("/api/cancelReservation")
    public ResponseEntity<List<ReservationDTO>> cancelReservation(@RequestBody CancelDTO cancelDTO) {
        Long reservationNum = cancelDTO.getReservationNum(); // 리퀘스트로 예약번호를 받을때 DTO로 받음
        System.out.println("ReservationNum : " + reservationNum);
        
        try {
        	cancelReservationService.cancelReservation(reservationNum);	// 예약 취소
        	List<ReservationDTO> reservationList = reservationListService.getReservationList(); // 에약 취소 후 새로운 예약 테이블 정보를 reservationList에 저장
        	return ResponseEntity.ok(reservationList); // 예약 삭제 성공시 상태코드 200 전송
        } catch (Exception e) {
        	return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null); // 예약 삭제 실패시 상태코드 500 전송
        }
    }
}

