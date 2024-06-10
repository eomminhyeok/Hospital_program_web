package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.dto.PatientDTO;
import com.example.demo.entity.PatientView;
import com.example.demo.repository.PatientViewRepository;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class SearchService {
    private final PatientViewRepository patientViewRepository;

    @Autowired
    public SearchService(PatientViewRepository patientViewRepository) {
        this.patientViewRepository = patientViewRepository;
    }

    public List<PatientDTO> getPatients(String name) { // name을 매개변수로 받아 name에 해당하는 환자정보 조회
        // PatientViewRepository를 사용하여 뷰에서 사용자 정보를 조회
        List<PatientView> patientViews = patientViewRepository.findByName(name);
        return patientViews.stream()	// 이름을 조회해 얻은 환자 정보인 patientViews를 클라이언트에게 전송하기전에 DTO로 변환하기 위해 리스트를 스트림으로 변환
                .map(this::convertToDTO)	// map연산을 사용해 각 요소에 접근, this::convertToDTO는 patientView => convertToDTO(patientView) 와 동일하다
                .collect(Collectors.toList()); // 변환된 각 요소를 모아 다시 리스트로 변환
    }

    private PatientDTO convertToDTO(PatientView patientView) {	 // patieentView 형식의 매개변수를 DTO로 변환해주는 메서드
        PatientDTO patientDTO = new PatientDTO();
        patientDTO.setPatientNum(patientView.getPatientNum());
        patientDTO.setName(patientView.getName());
        patientDTO.setFrontRRN(patientView.getFrontRRN());
        patientDTO.setBackRRN(patientView.getBackRRN());
        patientDTO.setAddress(patientView.getAddress());
        patientDTO.setPhone(patientView.getPhone());
        patientDTO.setSex(patientView.getSex());
        return patientDTO;
    }
}
