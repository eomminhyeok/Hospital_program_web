package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.dto.ChartDTO;
import com.example.demo.entity.ChartView;
import com.example.demo.repository.ChartViewRepository;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ChartListService {
	private final ChartViewRepository chartViewRepository;
	
	@Autowired
	ChartListService(ChartViewRepository chartviewRepository){
		this.chartViewRepository = chartviewRepository;
	}
	
	public List<ChartDTO> getChartList(Long patientNum) {
		List<ChartView> chartViews = chartViewRepository.findByPatientNum(patientNum);
		return chartViews.stream()
				.map(this::convertToDTO)
				.collect(Collectors.toList());
	}
	
	private ChartDTO convertToDTO(ChartView chartView) {
		ChartDTO chartDTO = new ChartDTO();
		chartDTO.setChartNum(chartView.getChartNum());
		chartDTO.setPatientNum(chartView.getPatientNum());
		chartDTO.setName(chartView.getName());
		chartDTO.setFrontRRN(chartView.getFrontRRN());
		chartDTO.setBackRRN(chartView.getBackRRN());
		chartDTO.setChartDate(chartView.getChartDate());
		chartDTO.setDiagnosis(chartView.getDiagnosis());
		chartDTO.setNotes(chartView.getNotes());
		return chartDTO;
	}
}
