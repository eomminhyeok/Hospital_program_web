package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.demo.entity.ReservationView;
import java.util.List;

public interface ReservationViewRepository extends JpaRepository<ReservationView, Long>{
}
