package com.example.demo.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "PATIENT_VIEW")
public class PatientView {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "PATIENTNUM")
    private Long patientNum; //
    
    @Column(name = "NAME") // 대문자로 표시된 컬럼명은 해당 어노테이션을 사용하여 매핑
    private String name; // camelCase를 사용한 엔티티 클래스의 필드명은 그대로 유지
    
    @Column(name = "FRONTRRN")
    private String frontRRN; // 엔티티 클래스의 필드명은 camelCase를 사용
    
    @Column(name = "BACKRRN")
    private String backRRN; 
    
    @Column(name = "ADDRESS")
    private String address; 
    
    @Column(name = "PHONE")
    private String phone; 
    
    @Column(name = "SEX")
    private String sex;
    
    @Override
    public String toString() {
        return "PatientView{" +
                "patientNum='" + patientNum + '\'' +
                ", name='" + name + '\'' +
                ", frontRRN='" + frontRRN + '\'' +
                ", backRRN='" + backRRN + '\'' +
                ", address='" + address + '\'' +
                ", phone='" + phone + '\'' +
                ", sex='" + sex + '\'' +
                '}';
    }

    // 생성자
    public PatientView() {
    }

    public PatientView(Long patientNum, String name, String frontRRN, String backRRN, String address, String phone, String sex) {
        this.patientNum = patientNum;
        this.name = name;
        this.frontRRN = frontRRN;
        this.backRRN = backRRN;
        this.address = address;
        this.phone = phone;
        this.sex = sex;
    }

    // 게터 및 세터
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

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }
}
