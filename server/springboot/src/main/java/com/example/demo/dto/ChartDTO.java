package com.example.demo.dto;

public class ChartDTO {
    private Long chartNum;
    private Long patientNum;
    private String name;
    private String frontRRN;
    private String backRRN;
    private String chartDate;
    private String diagnosis;
    private String notes;

    // 생성자
    public ChartDTO() {}

    public ChartDTO(Long chartNum, Long patientNum, String name, String frontRRN, String backRRN, String chartDate, String diagnosis, String notes) {
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
