package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.demo.entity.PatientView;
import com.example.demo.entity.Search;
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
    public ResponseEntity<?> getPatients(@RequestBody Search search) {
        String name = search.getName();
        System.out.println("Search Name : " + name);
        List<PatientView> patients = searchService.getPatients(name);
        if (patients.isEmpty()) {
        	return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);	// 조회결과가 없으면 상태코드 401 전송
        } else {
        	System.out.println("Search : " + patients);
            return new ResponseEntity<>(patients, HttpStatus.OK);	// 조회 성공시 상태코드 200 전송
        }
    }
}
