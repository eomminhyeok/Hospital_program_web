package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Patient;
import com.example.demo.service.PatientService;

@RestController
public class PatientController {

    @Autowired
    private PatientService patientService;

    @PostMapping("/api/patient")
    public ResponseEntity<String> registration(@RequestBody Patient patient) {
        try {
            System.out.println("Received user info: " + patient);
            System.out.println("PatientNum: " + patient.getPATIENTNUM());
            System.out.println("Name: " + patient.getNAME());
            System.out.println("FrontRRN: " + patient.getFRONTRRN());
            System.out.println("BackRRN: " + patient.getBACKRRN());
            System.out.println("Address: " + patient.getADDRESS());
            System.out.println("Phone: " + patient.getPHONE());
            System.out.println("Sex: " + patient.getSEX());
            patientService.registration(patient);
            return ResponseEntity.ok().body("환자등록 성공");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("환자등록 실패: " + e.getMessage());
        }
    }
}
