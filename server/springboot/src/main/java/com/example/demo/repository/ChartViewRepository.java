package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.demo.entity.ChartView;

@Repository
public interface ChartViewRepository extends JpaRepository<ChartView, Long> {
    List<ChartView> findByPatientNum(Long patientNum);
}
