package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.User;
import com.example.demo.service.UserService;

@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/api/sign")
    public ResponseEntity<String> signUp(@RequestBody User userInfo) {
        try {
        	System.out.println("Received user info: " + userInfo);
        	System.out.println("UserID: " + userInfo.getUSERID());
        	System.out.println("Password: " + userInfo.getPASSWORD());
        	System.out.println("Name: " + userInfo.getNAME());
        	System.out.println("Email: " + userInfo.getEMAIL());
        	System.out.println("Address: " + userInfo.getADDRESS());
        	System.out.println("Phone: " + userInfo.getPHONE());
            userService.signUp(userInfo);
            return ResponseEntity.ok("회원가입 성공");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("회원가입 실패: " + e.getMessage());
        }
    }
}
