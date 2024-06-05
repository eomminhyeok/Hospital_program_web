package com.example.demo.entity;
// 환자 등록
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import oracle.sql.NUMBER;

@Entity
@Table(name = "PATIENT")
public class Patient {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // 자동 증가 설정
    @Column(name = "PATIENTNUM")
    private Long PATIENTNUM;
    
    private String NAME;
    private String FRONTRRN;
    private String BACKRRN;
    private String ADDRESS;
    private String PHONE;
    private String SEX;
    
    @Override
    public String toString() {
        return "Patient{" +
                "PATIENTNUM='" + PATIENTNUM + '\'' +
                ", NAME='" + NAME + '\'' +
                ", FRONTRRN='" + FRONTRRN + '\'' +
                ", BACKRRN='" + BACKRRN + '\'' +
                ", ADDRESS='" + ADDRESS + '\'' +
                ", PHONE='" + PHONE + '\'' +
                ", SEX='" + SEX + '\'' +
                '}';
    }

    // 생성자
    public Patient() {
    }

    public Patient(Long PATIENTNUM, String NAME, String FRONTRRN, String BACKRRN, String ADDRESS, String PHONE, String SEX) {
        this.PATIENTNUM = PATIENTNUM;
    	this.NAME = NAME;
        this.FRONTRRN = FRONTRRN;
        this.BACKRRN = BACKRRN;
        this.ADDRESS = ADDRESS;
        this.PHONE = PHONE;
        this.SEX = SEX;
    }

    // 게터 및 세터
    public Number getPATIENTNUM() {
        return PATIENTNUM;
    }

    public void setPATIENTNUM(Long PATIENTNUM) {
        this.PATIENTNUM = PATIENTNUM;
    }

    public String getNAME() {
        return NAME;
    }

    public void setNAME(String NAME) {
        this.NAME = NAME;
    }

    public String getFRONTRRN() {
        return FRONTRRN;
    }

    public void setFRONTRRN(String FRONTRRN) {
        this.FRONTRRN = FRONTRRN;
    }

    public String getBACKRRN() {
        return BACKRRN;
    }

    public void setBACKRRN(String BACKRRN) {
        this.BACKRRN = BACKRRN;
    }

    public String getADDRESS() {
        return ADDRESS;
    }

    public void setADDRESS(String ADDRESS) {
        this.ADDRESS = ADDRESS;
    }

    public String getPHONE() {
        return PHONE;
    }

    public void setPHONE(String PHONE) {
        this.PHONE = PHONE;
    }

    public String getSEX() {
        return SEX;
    }

    public void setSEX(String SEX) {
        this.SEX = SEX;
    }
}
