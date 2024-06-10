package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dto.SignDTO;
import com.example.demo.entity.User;
import com.example.demo.repository.UserRepository;

@Service
public class SignService {

    @Autowired
    private UserRepository userRepository;

    public void signUp(SignDTO signDTO) {
    	User user = new User();
    	user.setUserId(signDTO.getUserId());
    	user.setPassword(signDTO.getPassword());
    	user.setName(signDTO.getName());
    	user.setEmail(signDTO.getEmail());
    	user.setAddress(signDTO.getAddress());
    	user.setPhone(signDTO.getPhone());
    	
        userRepository.save(user);
    }
}
