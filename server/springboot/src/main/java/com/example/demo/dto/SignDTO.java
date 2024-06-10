package com.example.demo.dto;

public class SignDTO {
    private String userId;
    private String name;
    private String password;
    private String email;
    private String address;
    private String phone;

    public SignDTO() {}

    public SignDTO(String userId, String name, String password, String email, String address, String phone) {
        this.userId = userId;
        this.name = name;
        this.password = password;
        this.email = email;
        this.address = address;
        this.phone = phone;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getName() {
        return name;
    }

    public void setUserName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
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
