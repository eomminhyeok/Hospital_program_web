package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.demo.entity.Chart;

@Repository
public interface ChartRepository extends JpaRepository<Chart, Long> {
    // 추가적인 메서드가 필요한 경우 여기에 정의
}
