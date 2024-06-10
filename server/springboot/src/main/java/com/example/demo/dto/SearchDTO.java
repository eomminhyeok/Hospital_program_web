package com.example.demo.dto;

public class SearchDTO {
    private String name;

    // 생성자, 게터 및 세터
    public SearchDTO() {
    }

    public SearchDTO(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
