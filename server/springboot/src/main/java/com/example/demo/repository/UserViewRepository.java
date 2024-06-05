package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.demo.entity.User;
import com.example.demo.entity.UserView;

@Repository
public interface UserViewRepository extends JpaRepository<UserView, String> {
	UserView findByUSERID(String id);
    // 추가적인 메서드가 필요한 경우 여기에 정의
}
