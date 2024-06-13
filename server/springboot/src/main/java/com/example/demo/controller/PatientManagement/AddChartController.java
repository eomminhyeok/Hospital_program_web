package com.example.demo.controller.PatientManagement;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import com.example.demo.dto.ChartDTO;
import com.example.demo.entity.Chart;
import com.example.demo.service.PatientManagement.AddChartService;

@RestController
public class AddChartController {

    @Autowired
    private AddChartService addChartService;

    @PostMapping("/api/chart")
    public ResponseEntity<String> chartRegistration(@RequestBody ChartDTO chartDTO) {
        try {
            addChartService.chartRegistration(chartDTO);

            return ResponseEntity.ok().body("진료등록 성공");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("진료등록 실패: " + e.getMessage());
        }                  
    }
}
