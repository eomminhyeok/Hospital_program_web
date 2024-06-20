package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import com.example.demo.dto.LoginDTO;
import com.example.demo.dto.ReservationDTO;
import com.example.demo.entity.Login;
import com.example.demo.service.LoginService;
import com.example.demo.service.ReservationManagement.ReservationListService;
import com.example.demo.service.ReservationManagement.ReservationTodayListService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class LoginController {

    @Autowired
    private LoginService loginService;
    
    @Autowired
    private ReservationListService reservationListService;
    
    @Autowired
    private ReservationTodayListService reservationTodayListService;

    @PostMapping("/api/login")
    public ResponseEntity<LoginDTO> login(@RequestBody Login form) {
        String id = form.getId();
        String password = form.getPassword();
        System.out.println("UserID: " + id);
        System.out.println("Password: " + password);

        String userName = loginService.getUserName(id, password);

        if (userName != null) {
            // 인증 성공 시 사용자 이름과 예약리스트를 함께 반환
        	 List<ReservationDTO> reservations = reservationListService.getReservationList();	// 예약서비스 파일에서 reservationView에 있는 모든 데이터 조회
        	 List<ReservationDTO> reservationsToday = reservationTodayListService.getReservationTodayList();
             LoginDTO response = new LoginDTO();	// 조회된 사용자 이름과 예약리스트를 담을 DTO 호출
             response.setUserName(userName);	// dto에 유저 이름 저장
             response.setReservations(reservations);	// dto에 예약 리스트 저장
             response.setReservationsToday(reservationsToday); // dto에 금일 예약 리스트 저장
             
             return ResponseEntity.ok(response);	// 사용자 이름과 예약리스트를 response로 전송
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);
        }
    }
}
