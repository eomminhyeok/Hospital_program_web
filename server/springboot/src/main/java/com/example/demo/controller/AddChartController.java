package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Chart;
import com.example.demo.service.AddChartService;

@RestController
public class AddChartController {

    @Autowired
    private AddChartService addChartService;

    @PostMapping("/api/chart")
    public ResponseEntity<String> chartRegistration(@RequestBody Chart chart) {
        try {
        	System.out.println("Received user info: " + chart);
        	System.out.println("ChartNum: " + chart.getChartNum());
            System.out.println("PatientNum: " + chart.getPatientNum());
            System.out.println("Name: " + chart.getName());
            System.out.println("FrontRRN: " + chart.getFrontRRN());
            System.out.println("BackRRN: " + chart.getBackRRN());
            System.out.println("chartDate: " + chart.getChartDate());
            System.out.println("diagnosis: " + chart.getDiagnosis());
            System.out.println("notes: " + chart.getNotes());
            addChartService.chartRegistration(chart);
            return ResponseEntity.ok().body("진료등록 성공");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("진료등록 실패: " + e.getMessage());
        }
    }
}