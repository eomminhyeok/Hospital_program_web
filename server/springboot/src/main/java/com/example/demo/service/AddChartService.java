package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Chart;
import com.example.demo.repository.ChartRepository;

@Service
public class AddChartService {

    @Autowired
    private ChartRepository chartRepository;

    public void chartRegistration(Chart chart) {
        chartRepository.save(chart);
    }
}

