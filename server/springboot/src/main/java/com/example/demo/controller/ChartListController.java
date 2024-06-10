package com.example.demo.controller;

import org.springframework.beans.factory.annotation.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.dto.ChartDTO;
import com.example.demo.service.ChartListService;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ChartListController {
	private final ChartListService chartListService;
	
	@Autowired
	public ChartListController (ChartListService chartListService) {
		this.chartListService = chartListService;
	}
	
	@PostMapping("/api/chartList")
	public ResponseEntity<?> getChartList(@RequestBody ChartDTO chartDTO){
		Long patientNum = chartDTO.getPatientNum();
		List<ChartDTO> chartList = chartListService.getChartList(patientNum);
		if (chartList.isEmpty()) {
			return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
		} else {
			return new ResponseEntity<>(chartList, HttpStatus.OK);
		}
	}
}
