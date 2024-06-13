package com.example.demo.controller.PatientManagement;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import com.example.demo.dto.PatientDTO;
import com.example.demo.service.PatientManagement.PatientService;

@RestController
public class PatientController {

    @Autowired
    private PatientService patientService;

    @PostMapping("/api/patient")
    public ResponseEntity<String> registration(@RequestBody PatientDTO patientDTO) {
        try {
            System.out.println("Received user info: " + patientDTO);
            patientService.registration(patientDTO);
            return ResponseEntity.ok().body("환자등록 성공");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("환자등록 실패: " + e.getMessage());
        }
    }
}
