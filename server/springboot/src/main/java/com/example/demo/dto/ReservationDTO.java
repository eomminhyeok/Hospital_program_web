package com.example.demo.dto;

import java.time.LocalDateTime;

public class ReservationDTO {
	private Long reservationNum;
	private Long patientNum;
	private String name;
	private String frontRRN;
	private String backRRN;
	private LocalDateTime reservationDate;
	
	public ReservationDTO() {}
	
	public ReservationDTO(Long reservationNum, Long patientNum, String name, String frontRRN, String backRRN, LocalDateTime reservationDate) {
		this.reservationNum = reservationNum;
		this.patientNum = patientNum;
		this.name = name;
		this.frontRRN = frontRRN;
		this.backRRN = backRRN;
		this.reservationDate = reservationDate;
	}
	
	public Long getReservationNum() {
		return reservationNum;
	}
	
	public void setReservationNum(Long reservationNum) {
		this.reservationNum = reservationNum;
	}
	
	public Long getPatientNum() {
		return patientNum;
	}
	
	public void setPatientNum(Long patientNum) {
		this.patientNum = patientNum;
	}
	
	public String getName() {
		return name;
	}
	
	public void setName(String name) {
		this.name = name;
	}
	
	public String getFrontRRN() {
		return frontRRN;
	}
	
	public void setFrontRRN(String frontRRN) {
		this.frontRRN = frontRRN;
	}
	
	public String getBackRRN() {
		return backRRN;
	}
	
	public void setBackRRN(String backRRN) {
		this.backRRN = backRRN;
	}
	
	public LocalDateTime getReservationDate() {
		return reservationDate;
	}
	
	public void setReservationDate(LocalDateTime reservationDate) {
		this.reservationDate = reservationDate;
	}
}
