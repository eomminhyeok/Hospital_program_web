package com.example.demo.dto;

public class CancelDTO {
	private Long reservationNum;

    // 생성자, 게터 및 세터
    public CancelDTO() {
    }

    public CancelDTO(Long reservationNum) {
        this.reservationNum = reservationNum;
    }

    public Long getReservationNum() {
        return reservationNum;
    }

    public void setReservationNum(Long reservationNum) {
        this.reservationNum = reservationNum;
    }
}
