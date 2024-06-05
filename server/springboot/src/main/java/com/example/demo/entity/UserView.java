package com.example.demo.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "USERINFO")
public class UserView {

    @Id
    @Column(name = "USERID")
    private String USERID;
    private String PASSWORD;
    private String NAME;
    private String EMAIL;
    private String ADDRESS;
    private String PHONE;
    
    @Override
    public String toString() {
        return "User{" +
                "USERID='" + USERID + '\'' +
                ", PASSWORD='" + PASSWORD + '\'' +
                ", NAME='" + NAME + '\'' +
                ", EMAIL='" + EMAIL + '\'' +
                ", ADDRESS='" + ADDRESS + '\'' +
                ", PHONE='" + PHONE + '\'' +
                '}';
    }

    // 생성자, 게터 및 세터
    public UserView() {
    }

    public UserView(String USERID, String PASSWORD, String NAME, String EMAIL, String ADDRESS, String PHONE) {
        this.USERID = USERID;
        this.PASSWORD = PASSWORD;
        this.NAME = NAME;
        this.EMAIL = EMAIL;
        this.ADDRESS = ADDRESS;
        this.PHONE = PHONE;
    }

    
    public String getUSERID() {
        return USERID;
    }

    public void setUSERID(String USERID) {
        this.USERID = USERID;
    }

    public String getPASSWORD() {
        return PASSWORD;
    }

    public void setPASSWORD(String PASSWORD) {
        this.PASSWORD = PASSWORD;
    }

    public String getNAME() {
        return NAME;
    }

    public void setNAME(String NAME) {
        this.NAME = NAME;
    }

    public String getEMAIL() {
        return EMAIL;
    }

    public void setEMAIL(String EMAIL) {
        this.EMAIL = EMAIL;
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
}
