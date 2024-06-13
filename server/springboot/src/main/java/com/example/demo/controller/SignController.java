package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import com.example.demo.dto.SignDTO;
import com.example.demo.service.SignService;

@RestController
public class SignController {

    @Autowired
    private SignService userService;

    @PostMapping("/api/sign")
    public ResponseEntity<String> signUp(@RequestBody SignDTO signDTO) {
        try {
            userService.signUp(signDTO);
            return ResponseEntity.ok("회원가입 성공");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("회원가입 실패: " + e.getMessage());
        }
    }
}
