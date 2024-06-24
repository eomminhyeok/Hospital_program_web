package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.User;
import com.example.demo.entity.UserView;
import com.example.demo.repository.UserViewRepository;

@Service
public class LoginService {
    private final UserViewRepository userViewRepository;

    @Autowired
    public LoginService(UserViewRepository userViewRepository) {
        this.userViewRepository = userViewRepository;
    }

    public String getUserName(String id, String password) {
        // UserViewRepository를 사용하여 뷰에서 사용자 정보를 조회
        UserView userView = userViewRepository.findByUSERID(id);
        
        if (userView != null) {
            // 사용자 정보가 존재하면 비밀번호를 비교하고 인증 결과를 반환
            if (password.equals(userView.getPASSWORD())) {
                return userView.getNAME(); // 비밀번호도 맞는 경우에만 사용자 이름 반환
            }
        }
        // 사용자 정보가 없거나 비밀번호가 틀린 경우에는 null 반환
        return null;
    }
}