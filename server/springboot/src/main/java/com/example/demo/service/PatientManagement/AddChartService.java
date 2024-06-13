package com.example.demo.service.PatientManagement;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dto.ChartDTO;
import com.example.demo.entity.Chart;
import com.example.demo.repository.ChartRepository;

@Service
public class AddChartService {

    @Autowired
    private ChartRepository chartRepository;

    public void chartRegistration(ChartDTO chartDTO) {
    	Chart chart = new Chart();
    	chart.setChartNum(chartDTO.getChartNum());
    	chart.setPatientNum(chartDTO.getPatientNum());
    	chart.setName(chartDTO.getName());
    	chart.setFrontRRN(chartDTO.getFrontRRN());
    	chart.setBackRRN(chartDTO.getBackRRN());
    	chart.setChartDate(chartDTO.getChartDate());
    	chart.setDiagnosis(chartDTO.getDiagnosis());
    	chart.setNotes(chartDTO.getNotes());
    	
        chartRepository.save(chart);
    }
}

