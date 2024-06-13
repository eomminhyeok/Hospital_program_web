package com.example.demo.entity;
// 회원가입
import jakarta.persistence.*;

@Entity
@Table(name = "USERINFO")
public class User {

    @Id
    @Column(name = "USERID")
    private String userId;
    @Column(name = "PASSWORD")
    private String password;
    @Column(name = "NAME")
    private String name;
    @Column(name = "EMAIL")
    private String email;
    @Column(name = "ADDRESS")
    private String address;
    @Column(name = "PHONE")
    private String phone;
    
    @Override
    public String toString() {
        return "User{" +
                "USERID='" + userId + '\'' +
                ", PASSWORD='" + password + '\'' +
                ", NAME='" + name + '\'' +
                ", EMAIL='" + email + '\'' +
                ", ADDRESS='" + address + '\'' +
                ", PHONE='" + phone + '\'' +
                '}';
    }

    // 생성자, 게터 및 세터
    public User() {
    }

    public User(String userId, String password, String name, String email, String address, String phone) {
        this.userId = userId;
        this.password = password;
        this.name = name;
        this.email = email;
        this.address = address;
        this.phone = phone;
    }

    // 게터 및 세터
    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
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
}