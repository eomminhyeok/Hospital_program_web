package com.example.demo.entity;

public class Login {
    private String id;
    private String password;

    // 생성자, 게터 및 세터
    public Login() {
    }

    public Login(String id, String password) {
        this.id = id;
        this.password = password;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
