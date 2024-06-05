package com.example.demo.entity;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "PATIENT")
public class PatientView {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "PATIENTNUM")
    private Long patientNum; // 엔티티 클래스에서 필드명은 camelCase를 사용하고, 컬럼명은 대문자 스네이크 케이스를 사용하는 것이 관례입니다.
    
    @Column(name = "NAME") // 대문자로 표시된 컬럼명은 해당 어노테이션을 사용하여 매핑합니다.
    private String name; // camelCase를 사용한 엔티티 클래스의 필드명은 그대로 유지합니다.
    
    @Column(name = "FRONTRRN")
    private String frontRRN; // 엔티티 클래스의 필드명은 camelCase를 사용합니다.
    
    @Column(name = "BACKRRN")
    private String backRRN; // 엔티티 클래스의 필드명은 camelCase를 사용합니다.
    
    @Column(name = "ADDRESS")
    private String address; // 엔티티 클래스의 필드명은 camelCase를 사용합니다.
    
    @Column(name = "PHONE")
    private String phone; // 엔티티 클래스의 필드명은 camelCase를 사용합니다.
    
    @Column(name = "SEX")
    private String sex; // 엔티티 클래스의 필드명은 camelCase를 사용합니다.
    
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
