package com.example.demo.dto;
// 로그인시 반환해야할 유저 이름과 예약 내역 데이터를 담을 DTO

import java.util.List;

public class LoginDTO {
	private String userName;	// 로그인한 유저 이름을 담을 변수
    private List<ReservationDTO> reservations;	// 예약리스트를 담을 변수
    private List<ReservationDTO> reservationsToday; // 금일 예약리스트만 담을 변수

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public List<ReservationDTO> getReservations() {
        return reservations;
    }

    public void setReservations(List<ReservationDTO> reservations) {
        this.reservations = reservations;
    }
    
    public List<ReservationDTO> getReservationsToday() {
        return reservationsToday;
    }

    public void setReservationsToday(List<ReservationDTO> reservationsToday) {
        this.reservationsToday = reservationsToday;
    }
}
