package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dto.PatientDTO;
import com.example.demo.entity.Patient;
import com.example.demo.repository.PatientRepository;

@Service
public class PatientService {

    @Autowired
    private PatientRepository patientRepository;

    public void registration(PatientDTO patientDTO) {
        Patient patient = new Patient();
        patient.setPatientNum(patientDTO.getPatientNum());
        patient.setName(patientDTO.getName());
        patient.setFrontRRN(patientDTO.getFrontRRN());
        patient.setBackRRN(patientDTO.getBackRRN());
        patient.setAddress(patientDTO.getAddress());
        patient.setPhone(patientDTO.getPhone());
        patient.setSex(patientDTO.getSex());

        patientRepository.save(patient);
    }
}
