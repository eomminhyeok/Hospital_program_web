package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.demo.entity.PatientView;

import java.util.List;

@Repository
public interface PatientViewRepository extends JpaRepository<PatientView, Long> {
    List<PatientView> findByName(String name);
}
