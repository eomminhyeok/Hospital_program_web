package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.entity.PatientView;
import com.example.demo.repository.PatientViewRepository;

import java.util.List;

@Service
public class SearchService {
    private final PatientViewRepository patientViewRepository;

    @Autowired
    public SearchService(PatientViewRepository patientViewRepository) {
        this.patientViewRepository = patientViewRepository;
    }

    public List<PatientView> getPatients(String name) {		// name을 매개변수로 받아 name에 해당하는 환자정보 조회
        // PatientViewRepository를 사용하여 뷰에서 사용자 정보를 조회
        List<PatientView> patientViews = patientViewRepository.findByName(name);
        return patientViews;
    }
}
