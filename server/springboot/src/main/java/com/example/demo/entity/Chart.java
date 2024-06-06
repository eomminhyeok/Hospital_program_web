package com.example.demo.entity;

import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "CHART")
public class Chart {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "CHARTNUM")
    private Long chartNum; // 엔티티 클래스에서 필드명은 camelCase를 사용하고, 컬럼명은 대문자 스네이크 케이스를 사용하는 것이 관례입니다
    
    @Column(name = "PATIENTNUM") 
    private Long patientNum; 
    
    @Column(name = "NAME")
    private String name; 
    
    @Column(name = "FRONTRRN")
    private String frontRRN; 
    
    @Column(name = "BACKRRN")
    private String backRRN;
    
    @Column(name = "CHARTDATE")
    private String chartDate;
    
    @Column(name = "DIAGNOSIS")
    private String diagnosis; 
    
    @Column(name = "NOTES")
    private String notes;
    
    @Override
    public String toString() {
        return "Chart{" +
        		"chartNum='" + chartNum + '\'' +
                "patientNum='" + patientNum + '\'' +
                ", name='" + name + '\'' +
                ", frontRRN='" + frontRRN + '\'' +
                ", backRRN='" + backRRN + '\'' +
                ", chartDate='" + chartDate + '\'' +
                ", diagnosis='" + diagnosis + '\'' +
                ", notes='" + notes + '\'' +
                '}';
    }
 
    // 생성자
    public Chart() {
    }

    public Chart(Long chartNum, Long patientNum, String name, String frontRRN, String backRRN, String chartDate, String diagnosis, String notes) {
        this.chartNum = chartNum;
    	this.patientNum = patientNum;
        this.name = name;
        this.frontRRN = frontRRN;
        this.backRRN = backRRN;
        this.chartDate = chartDate;
        this.diagnosis = diagnosis;
        this.notes = notes;
    }

    // 게터 및 세터
    public Long getChartNum() {
        return chartNum;
    }

    public void setChartNum(Long chartNum) {
        this.chartNum = chartNum;
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

    public String getChartDate() {
        return chartDate;
    }

    public void setChartDate(String chartDate) {
        this.chartDate = chartDate;
    }

    public String getDiagnosis() {
        return diagnosis;
    }

    public void setDiagnosis(String diagnosis) {
        this.diagnosis = diagnosis;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }
}
