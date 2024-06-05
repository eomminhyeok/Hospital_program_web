package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Login;
import com.example.demo.service.LoginService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class LoginController {

    @Autowired
    private LoginService loginService;

    @PostMapping("/api/login")
    public ResponseEntity<String> login(@RequestBody Login form) {
        String id = form.getId();
        String password = form.getPassword();
        System.out.println("UserID: " + id);
        System.out.println("Password: " + password);

        String userName = loginService.getUserName(id, password);

        if (userName != null) {
            // 인증 성공 시 사용자 이름을 함께 반환
            return ResponseEntity.ok(userName);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("401");
        }
    }
}
