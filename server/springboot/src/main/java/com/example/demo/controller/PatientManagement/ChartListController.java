package com.example.demo.controller.PatientManagement;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import com.example.demo.dto.ChartDTO;
import com.example.demo.service.PatientManagement.ChartListService;

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
	
	@PostMapping("/api/chartListAll")
	public ResponseEntity<?> getChartListAll(){
		List<ChartDTO> chartListAll = chartListService.getChartListAll();
		System.out.println("차트목록: " + chartListAll);
		if (chartListAll.isEmpty()) {
			return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
		} else {
			return new ResponseEntity<>(chartListAll, HttpStatus.OK);
		}
	}
}
