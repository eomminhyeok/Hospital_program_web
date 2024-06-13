package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import com.example.demo.dto.PatientDTO;
import com.example.demo.dto.SearchDTO;
import com.example.demo.service.SearchService;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class SearchController {
    private final SearchService searchService;

    
    @Autowired
    public SearchController(SearchService searchService) {
        this.searchService = searchService;
    }

    @PostMapping("/api/search")
    public ResponseEntity<?> getPatients(@RequestBody SearchDTO searchDTO) {
        String name = searchDTO.getName(); // 리퀘스트로 이름을 받을때 DTO로 받음
        System.out.println("Search Name : " + name);
        List<PatientDTO> patients = searchService.getPatients(name);	// 서비스파일에 매개변수로 name을 전달
        if (patients.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED); // 조회결과가 없으면 상태코드 401 전송
        } else {
            System.out.println("Search : " + patients);
            return new ResponseEntity<>(patients, HttpStatus.OK); // 조회 성공시 상태코드 200 전송
        }
    }
}

