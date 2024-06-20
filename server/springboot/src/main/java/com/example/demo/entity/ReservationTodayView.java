package com.example.demo.entity;

import java.time.LocalDateTime;
import jakarta.persistence.*;

@Entity
@Table(name = "RESERVATIONTODAY_VIEW")
public class ReservationTodayView{
	@Id
	@Column(name="RESERVATIONNUM")
	private Long reservationNum;
	
	@Column(name="PATIENTNUM")
	private Long patientNum;
	
	@Column(name="NAME")
	private String name;

	@Column(name="FRONTRRN")
	private String frontRRN;
	
	@Column(name="BACKRRN")
	private String backRRN;
	
	@Column(name="RESERVATIONDATE")
	private LocalDateTime reservationDate;
	
	public ReservationTodayView () {}
	
	public ReservationTodayView(Long reservationNum, Long patientNum, String name, String frontRRN, String backRRN, LocalDateTime reservationDate) {
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
